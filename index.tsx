import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [role, setRole] = useState("passenger");
  const router = useRouter();

  const handleLogin = () => {
    if (role === "passenger") router.push("/passenger");
    else router.push("/driver");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4 py-10">
      <div className="flex flex-col items-center mb-8">
        <div className="bg-green-200 p-4 rounded-full">
          <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#34D399" />
            <path d="M24 14a2 2 0 110 4 2 2 0 010-4zm-4 7h8v2l-2 2v4h-4v-4l-2-2v-2z" fill="#fff" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-green-800 mt-4">Chipa</h1>
        <p className="text-green-700 text-sm mt-1">Smart urban share</p>
      </div>

      <div className="grid gap-6 w-full max-w-md">
        <label className="text-gray-700 font-medium mb-2">Choose Role:</label>
        <select
          className="w-full rounded-lg border p-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="passenger">Passenger</option>
          <option value="driver">Driver</option>
        </select>

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white rounded-xl py-3 text-lg font-semibold hover:bg-green-700 transition"
        >
          Continue as {role.charAt(0).toUpperCase() + role.slice(1)}
        </button>
      </div>
    </main>
  );
}