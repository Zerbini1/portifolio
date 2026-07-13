export default function AboutPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Sobre Mim
      </h1>
      <article>
        <p>
          Moro na Serra-ES e sempre fui fascinado por entender como as coisas funcionam. Minha jornada começou na Engenharia de Controle e Automação (IFES), onde aprendi a lógica por trás de sistemas complexos.
        </p>
        <p>
          Durante a graduação, percebi que a verdadeira mágica não estava apenas em automatizar máquinas, mas no que fazemos com os dados que elas geram. Isso me puxou naturalmente para o mundo da Engenharia de Dados.
        </p>

        <p>
          Hoje, atuo como Engenheiro de Dados. Passo meus dias construindo pipelines escaláveis e lidando com alto volume de dados (usando ferramentas como PySpark, Databricks e Microsoft Fabric) para garantir que a informação certa chegue às pessoas certas, no momento certo.
        </p>

        <p>
          Quando não estou construindo ETLs ou otimizando queries SQL, provavelmente estou explorando novas tecnologias em nuvem ou jogando online.
        </p>
        
        <p className="mt-6">
          Também sou o criador do projeto <a href="/projects">Sentinela da Dengue</a>, onde implementei uma Arquitetura Medalhão de ponta a ponta para analisar dados epidemiológicos.
        </p>
        
<h2 className="mt-8 mb-4 text-2xl font-semibold">Habilidades Técnicas</h2>
        <ul className="space-y-2 !pl-0">
          <li className="!pl-0 before:content-none flex gap-2">
            <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white" />
            <span><strong>Linguagens:</strong> Python, SQL.</span>
          </li>
          <li className="!pl-0 before:content-none flex gap-2">
            <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white" />
            <span><strong>Dados &amp; Nuvem:</strong> Apache Spark, PySpark, Databricks, Microsoft Fabric, Azure Data Factory.</span>
          </li>
          <li className="!pl-0 before:content-none flex gap-2">
            <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white" />
            <span><strong>Arquitetura:</strong> Arquitetura Medalhão, Data Lakes, pipelines ETL/ELT.</span>
          </li>
          <li className="!pl-0 before:content-none flex gap-2">
            <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white" />
            <span><strong>Analytics:</strong> Power BI (DAX, Direct Lake).</span>
          </li>
          <li className="!pl-0 before:content-none flex gap-2">
            <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white" />
            <span><strong>Ferramentas:</strong> Git, GitHub, Linux.</span>
          </li>
        </ul>
        
        <p className="mt-8">
          Entre em contato comigo através do{" "}
          <a href="https://www.linkedin.com/in/felipe-zerbini">LinkedIn</a> ou email{" "}
          <a href="mailto:felipezerbini.ss@gmail.com">felipezerbini.ss@gmail.com</a>.
        </p>
        
        
        <p className="mt-4">
          Abraços,
          <br />
          Felipe
        </p>
      </article>
    </>
  );
}
