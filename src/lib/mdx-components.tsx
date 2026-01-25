import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => <h1 className="h1">{children}</h1>,
  h2: ({ children }) => <h2 className="h2">{children}</h2>,
  h3: ({ children }) => <h3 className="h3">{children}</h3>,
  h4: ({ children }) => <h4 className="h4">{children}</h4>,
  p: ({ children }) => <p className="text">{children}</p>,
  a: ({ href, children }) => (
    <Link href={href || "#"} className="link">
      {children}
    </Link>
  ),
  img: ({ src, alt }) => (
    <Image
      src={src || ""}
      alt={alt || ""}
      width={800}
      height={400}
      className="rounded-lg"
    />
  ),
  pre: ({ children }) => <pre className="pre">{children}</pre>,
  code: ({ children }) => (
    <code className="rounded bg-zinc-800 px-1 py-0.5">{children}</code>
  ),
  hr: () => <hr className="hr" />,
  strong: ({ children }) => <strong className="strong">{children}</strong>,
};
