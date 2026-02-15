"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthButton from "@/components/AuthButton";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) router.push("/dashboard");
      setLoading(false);
    };

    checkUser();
  }, []);

  if (loading) return null;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-900 p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-6">Smart Bookmark</h1>
        <AuthButton />
      </div>
    </div>
  );
}
