"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import AddBookmark from "@/components/AddBookmark";
import BookmarkList from "@/components/BookmarkList";
import { LogOut } from "lucide-react";

export default function Page() {
  const [user, setUser] = useState<any>(null);
  const [bookmarks, setBookmarks] = useState<any[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
  }, []);

  const login = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setBookmarks([]);
  };

  if (!user)
  return (
    <div className="page-center">
      <div className="card w-full max-w-md text-center space-y-6">

        <div>
          <h1 className="text-3xl font-bold">Smart Bookmark</h1>
          <p className="text-gray-400 mt-2">
            Save and manage your favorite links in one place.
          </p>
        </div>

        <button onClick={login}>
          Sign in with Google
        </button>

      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-3xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Smart Bookmarks
          </h1>
          <button
  onClick={logout}
  className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-red-700 shadow-lg hover:shadow-2xl transition duration-200"
>
  <LogOut className="w-5 h-5" />
  Logout
</button>

        </header>

        <AddBookmark user={user} setBookmarks={setBookmarks} />
        <BookmarkList user={user} bookmarks={bookmarks} setBookmarks={setBookmarks} />
      </div>
    </div>
  );
}
