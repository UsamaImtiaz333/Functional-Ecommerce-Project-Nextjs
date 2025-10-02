"use client";

import React from "react";

// Next.js ke Error Boundary ke liye types
interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <html>
      <body className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-700">
        <h2 className="text-2xl font-bold mb-4">⚠️ Something went wrong!</h2>
        <p className="mb-6">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
