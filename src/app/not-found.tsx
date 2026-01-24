import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <h2 className="heading">404 - Page Not Found</h2>
      <p className="text">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded bg-zinc-800 px-4 py-2 text-white hover:bg-zinc-700"
      >
        Go Home
      </Link>
    </div>
  );
}
