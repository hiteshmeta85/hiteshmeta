export default function Loading() {
  return (
    <output
      aria-label="Loading content"
      className="flex min-h-[50vh] items-center justify-center"
    >
      <div
        className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-600"
        aria-hidden="true"
      />
      <span className="sr-only">Loading...</span>
    </output>
  );
}
