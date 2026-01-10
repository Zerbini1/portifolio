import { GitBranch, Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  url: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "Sentinela da Dengue",
    description:
      "Um pipeline End-to-End que analisa a correlação entre fatores climáticos e surtos de dengue no Espírito Santo. Implementa a Arquitetura Medalhão (Bronze/Silver/Gold) para processar dados de 78 municípios, simulando um ambiente produtivo de Data Lake com ingestão via API e tratamento de dados complexos.",
    url: "https://github.com/Zerbini1/SentinelaDengue",
    imageUrl: "/projects/2_chuva_vs_dengue_combinado.png",
    githubUrl: "https://github.com/Zerbini1/SentinelaDengue",
    technologies: (
      <div className="flex items-center gap-x-3 flex-wrap">
        <span className="rounded-full bg-[#3776AB] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Python
        </span>
        <span className="rounded-full bg-[#150458] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Pandas
        </span>
        <span className="rounded-full bg-[#FFD43B] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Medallion Architecture
        </span>
        <span className="rounded-full bg-[#4CAF50] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          ETL
        </span>
      </div>
    ),
  },
];

function ProjectCard({
  name,
  description,
  imageUrl,
  githubUrl,
  url,
  technologies,
}: Project) {
  return (
    <div className="flex-col divide-y divide-zinc-400 dark:divide-zinc-500 overflow-hidden rounded ring-1 dark:zinc-500 dark:ring-zinc-500 ring-zinc-400">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <Image
        src={imageUrl}
        width={1200}
        height={630}
        alt="Logo for css2wind website"
      />
      <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
        <a
          href={url}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
        >
          <Globe strokeWidth={1.4} className="size-5" /> Ver projeto
        </a>
        <a
          href={githubUrl}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
        >
          <GitBranch strokeWidth={1.4} className="size-5" /> Ver código
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projetos
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
    </>
  );
}
