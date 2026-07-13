import {
  SiGithub,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Download, Send } from "lucide-react";
import { ReactNode } from "react";

interface LinkItem {
  name: string;
  description?: string;
  url: string;
  icon?: ReactNode;
}

const externalLinks: LinkItem[] = [
  {
    name: "LinkedIn",
    description: "connect with me",
    url: "https://www.linkedin.com/in/felipe-zerbini",
    icon: <SiLinkedin className="fill-[#0077B5] dark:fill-zinc-200" />,
  },
  {
    name: "GitHub",
    description: "see my projects",
    url: "https://github.com/Zerbini1",
    icon: <SiGithub />,
  },
];

const ExternalLink = (link: LinkItem) => {
  return (
    <a
      key={link.description}
      href={link.url}
      target="_blank"
      className="group flex items-center justify-between p-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
    >
      <span className="flex items-center gap-4">
        {link.icon} {link.name}
        <span className="text-zinc-500 opacity-0 transition-transform max-sm:hidden sm:group-hover:opacity-100 dark:text-zinc-400">
          {link.description}
        </span>
      </span>
      <ArrowUpRight
        strokeWidth={1.4}
        className="size-5 shrink-0 text-zinc-800 transition-transform sm:group-hover:rotate-45 dark:text-zinc-200"
      />
    </a>
  );
};

export default function HomePageEn() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm">
        Turning raw data into strategic intelligence. Specialized in building robust and scalable pipelines.
      </p>
      <div className="divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
        {externalLinks.map((link: LinkItem) => (
          <ExternalLink key={link.url} {...link} />
        ))}
      </div>
      <div className="flex justify-center gap-6 max-sm:flex-col-reverse sm:justify-between">
        <div className="flex flex-col justify-center gap-4 max-sm:items-center">
          <div className="group -m-8 flex select-all items-center gap-3 p-8 transition-transform">
            felipezerbini.ss@gmail.com
            <div className="inline-flex items-center gap-3">
              <a
                href="mailto:felipezerbini.ss@gmail.com"
                className="text-zinc-800 dark:text-zinc-200"
              >
                <Send strokeWidth={1.4} className="size-4" />
              </a>
            </div>
          </div>
          <span className="-mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-sm text-green-600 ring-1 ring-green-500 dark:bg-transparent dark:text-emerald-500 dark:ring-emerald-500">
            <div className="size-2 animate-pulse rounded-full bg-green-500 dark:bg-emerald-500" />
            Online
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="/FelipeZerbini_DataEngineer.pdf"
            download="FelipeZerbini_DataEngineer.pdf"
            className="flex flex-row items-center justify-center gap-3 rounded bg-sky-300 p-4 text-sky-800 ring-1 ring-sky-500 transition-transform sm:hover:bg-sky-400 dark:bg-inherit dark:text-sky-500 dark:ring-sky-500 sm:sm:dark:hover:bg-zinc-800"
          >
            <span className="text-nowrap">Download Resume</span>
            <Download strokeWidth={1.4} className="size-5 max-sm:hidden" />
          </a>
        </div>
      </div>
    </div>
  );
}