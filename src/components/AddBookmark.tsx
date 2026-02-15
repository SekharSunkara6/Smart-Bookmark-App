"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { PlusCircle } from "lucide-react";
import toast from "react-hot-toast";

type Props = {
  user: { id: string };
  setBookmarks: React.Dispatch<React.SetStateAction<any[]>>;
};

export default function AddBookmark({ user, setBookmarks }: Props) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const addBookmark = async () => {
    if (!title || !url) {
      toast.error("Please enter both Title and URL");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("bookmarks")
      .insert([{ title, url, user_id: user.id }])
      .select()
      .single();

    setLoading(false);

    if (error || !data) {
      toast.error("Error adding bookmark");
      return;
    }

    toast.success("Bookmark added successfully 🎉");

    setTitle("");
    setUrl("");
    setBookmarks((prev) => [data, ...prev]);
  };

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl mb-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        Add a Bookmark
      </h2>

      <div style={{ marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/50 focus:outline-none transition-all duration-200 block w-full"
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <input
          type="url"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/50 focus:outline-none transition-all duration-200 block w-full"
        />
      </div>

      <button
        onClick={addBookmark}
        disabled={loading}
        className="flex items-center justify-center gap-2 bg-indigo-600 px-6 py-2.5 rounded-xl text-white font-semibold hover:bg-indigo-700 transition-all duration-200 disabled:opacity-50 text-sm mx-auto"
      >
        <PlusCircle className="w-4 h-4" />
        {loading ? "Adding..." : "Add"}
      </button>
    </div>
  );
}
