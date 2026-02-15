"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Trash2 } from "lucide-react";

type Bookmark = {
  id: string;
  user_id: string;
  title: string;
  url: string;
  created_at: string;
};

type Props = {
  user: { id: string };
  bookmarks: Bookmark[];
  setBookmarks: React.Dispatch<React.SetStateAction<Bookmark[]>>;
};

export default function BookmarkList({ user, bookmarks, setBookmarks }: Props) {
  const fetchBookmarks = async () => {
    const { data } = await supabase
      .from("bookmarks")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });
    setBookmarks(data || []);
  };

  useEffect(() => {
    if (!user?.id) return;

    fetchBookmarks();
    const interval = setInterval(fetchBookmarks, 3000);
    return () => clearInterval(interval);
  }, [user?.id]);

  const deleteBookmark = async (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
    await supabase.from("bookmarks").delete().eq("id", id);
  };

  return (
    <div className="grid gap-4 sm:grid-cols-1">
      {bookmarks.length === 0 && (
        <p className="text-gray-400 text-center text-lg">No bookmarks yet.</p>
      )}

      {bookmarks.map((b) => (
        <div
          key={b.id}
          className="bookmark-item"
        >
          {/* Left Side */}
          <div className="flex flex-col gap-1 flex-1">
            <a
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:underline"
            >
              {b.title}
            </a>

            <span className="text-sm text-gray-400 break-all">
              {b.url}
            </span>
          </div>

          {/* Right Side */}
          <button
            onClick={() => deleteBookmark(b.id)}
            className="ml-6 flex items-center justify-center p-2 rounded-full"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
