"use client";

import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-8 text-gray-100">
            Se connecter
          </h1>
          <div className="space-y-4">
            <button
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
              className="w-full px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
            >
              Se connecter avec GitHub
            </button>
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
            >
              Se connecter avec Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
