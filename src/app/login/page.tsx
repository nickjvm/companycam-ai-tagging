"use client";

import { useAuth } from "@/lib/hooks/useAuth";

export default function LoginPage() {
  const { login } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-semibold mb-4">
        Nick&apos;s CompanyCam Mock Integration — AI Photo Tagging
      </h2>
      <button
        onClick={login}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Login to Continue
      </button>
    </div>
  );
}
