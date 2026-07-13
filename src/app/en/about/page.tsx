export default function AboutPageEn() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl text-white">
        About Me
      </h1>
      <article className="text-gray-300">
        <p className="mb-4">
          I live in Serra-ES and have always been fascinated by how things work. My journey began in Control and Automation Engineering at IFES, where I learned the logic behind complex systems.
        </p>

        <p className="mb-4">
          During college, I realized that the real magic was not only in automating machines, but in what we do with the data they generate. That naturally pulled me into the world of Data Engineering.
        </p>

        <p className="mb-4">
          Today, I work as a Data Engineer. I spend my days building scalable pipelines and handling high-volume data with tools like PySpark, Databricks, and Microsoft Fabric to make sure the right information reaches the right people at the right time.
        </p>

        <p className="mb-4">
          When I am not building ETLs or optimizing SQL queries, I am probably exploring new cloud technologies or playing online games.
        </p>

        <p className="mt-6">
          I am also the creator of the <a href="/projects" className="text-white font-semibold hover:underline">Sentinela da Dengue</a> project, where I implemented an end-to-end Medallion Architecture to analyze epidemiological data.
        </p>

<h2 className="mt-10 mb-5 text-2xl font-semibold text-white">Skills</h2>
        <ul className="space-y-3 !pl-0 text-gray-300">
          <li className="!pl-0 before:content-none flex items-start gap-3">
            <span aria-hidden className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
            <span><strong className="text-white font-semibold">Languages:</strong> Python, SQL.</span>
          </li>
          <li className="!pl-0 before:content-none flex items-start gap-3">
            <span aria-hidden className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
            <span><strong className="text-white font-semibold">Data &amp; Cloud:</strong> Apache Spark, PySpark, Databricks, Microsoft Fabric, Azure Data Factory.</span>
          </li>
          <li className="!pl-0 before:content-none flex items-start gap-3">
            <span aria-hidden className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
            <span><strong className="text-white font-semibold">Architecture:</strong> Medallion Architecture, Data Lakes, ETL/ELT pipelines.</span>
          </li>
          <li className="!pl-0 before:content-none flex items-start gap-3">
            <span aria-hidden className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
            <span><strong className="text-white font-semibold">Analytics:</strong> Power BI (DAX, Direct Lake).</span>
          </li>
          <li className="!pl-0 before:content-none flex items-start gap-3">
            <span aria-hidden className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
            <span><strong className="text-white font-semibold">Tools:</strong> Git, GitHub, Linux.</span>
          </li>
        </ul>

        <p className="mt-10">
          Get in touch with me through{" "}
          <a href="https://www.linkedin.com/in/felipe-zerbini" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">LinkedIn</a> or email{" "}
          <a href="mailto:felipezerbini.ss@gmail.com" className="text-white font-semibold hover:underline">felipezerbini.ss@gmail.com</a>.
        </p>
      </article>
    </>
  );
}