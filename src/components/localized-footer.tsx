"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LocalizedFooter() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <footer className="mx-auto flex max-w-prose flex-col max-sm:items-start items-center gap-2 py-6 text-sm text-zinc-500 dark:text-zinc-400">
      <div className="flex items-center gap-4">
        <a
          className="decoration-zinc-500 underline-offset-4 transition-transform sm:hover:underline dark:decoration-zinc-400"
          href="https://github.com/Zerbini1"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="decoration-zinc-500 underline-offset-4 transition-transform sm:hover:underline dark:decoration-zinc-400"
          href="https://www.linkedin.com/in/felipe-zerbini"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
      <blockquote className="text-zinc-800 dark:text-zinc-300">
        {isEnglish ? "Turning data into insights" : "Transformando dados em insights"}
      </blockquote>
    </footer>
  );
}