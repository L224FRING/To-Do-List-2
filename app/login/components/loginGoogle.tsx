"use client";
import { createClient } from "@/app/supabase/client";

export const LoginGoogle = () => {
  const func = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `https://to-do-list-2-rust.vercel.app/auth/callback`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      console.error("Error logging in with Google:", error.message);
    }
  };
  return (
    <button
      className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md mb-2 transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      onClick={func}
    >
      Login With Google
    </button>
  );
};
