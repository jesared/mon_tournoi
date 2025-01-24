"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Bienvenue sur Ping Quest</h1>
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/logo.svg"
            alt="Ping Quest logo"
            width={180}
            height={38}
            priority
          />
        </div>
      </div>
    </div>
  );
}
