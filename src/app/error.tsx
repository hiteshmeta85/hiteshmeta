"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: globalThis.Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      role="alert"
      className="flex min-h-[50vh] flex-col items-center justify-center gap-4"
    >
      <h1 className="h2">Something went wrong!</h1>
      <button
        type="button"
        onClick={reset}
        className="rounded bg-zinc-800 px-4 py-2 text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-400"
      >
        Try again
      </button>
    </div>
  );
}
