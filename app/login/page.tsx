"use client";

import { login, signup } from "./actions";
import { LoginGoogle } from "./components/loginGoogle";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white text-black rounded-lg shadow-md p-8 max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <LoginGoogle></LoginGoogle>
      </div>
    </div>
  );
};

export default page;
