"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Home</h1>
        <div className="flex flex-col items-center space-y-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">Bienvenu sur Ping Quest</li>
            <li>Save and see your changes instantly.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
