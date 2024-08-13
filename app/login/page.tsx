"use client";

import { login, signup } from "./actions";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white text-black rounded-lg shadow-md p-8 max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            required
            className="w-full p-2 border  border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            formAction={login}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md mb-2 transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Log in
          </button>
          <button
            formAction={signup}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md mb-2 transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign up
          </button>
          <span className="block text-sm text-gray-600 mt-4 text-center">
            You will receive a mail after signing up your email to confirm your
            email address.
          </span>
        </form>
      </div>
    </div>
  );
};

export default page;
