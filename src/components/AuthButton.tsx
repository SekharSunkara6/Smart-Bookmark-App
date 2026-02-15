"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AuthButton({ user }: any) {
  const router = useRouter();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (user) {
    return (
      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    );
  }

  return (
    <button
      onClick={handleLogin}
      className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
    >
      Sign in with Google
    </button>
  );
}
