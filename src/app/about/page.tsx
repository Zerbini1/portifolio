export default function AboutPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Sobre Mim
      </h1>
      <article>
        <p>
          Moro em Serra-ES e sempre fui fascinado por entender como as coisas funcionam. Minha jornada começou na Engenharia de Controle e Automação (IFES), onde aprendi a lógica por trás de sistemas complexos.
        </p>
        <p>  
          Durante minha graduação, percebi que o &quot;novo petróleo&quot; não era apenas automatizar máquinas, mas sim o que fazemos com os dados que elas geram. Isso me levou a mergulhar no mundo da Engenharia de Dados.
        </p>

        <p>    
          Hoje, atuo como estagiário na área de Governança de Dados, onde lido diariamente com ambientes de Big Data (Databricks, PySpark) e ajudo a garantir que a informação certa chegue às pessoas certas.
        </p>

        <p>
          Quando não estou construindo pipelines ETL ou otimizando queries SQL, provavelmente estou explorando novas tecnologias, lendo sobre tendências em dados ou estou jogando Online.
        </p>
        
        <p className="mt-6">
          Criador do projeto <a href="/projects">Sentinela da Dengue</a>, onde implemento 
          Arquitetura Medalhão para análise de dados epidemiológicos.
        </p>
        
        <h2 className="mt-8 mb-4 text-2xl font-semibold">🚀 Habilidades Técnicas</h2>
        <p> 
          🐍 Linguagens: Python, SQL, C#, Java.
        </p> 
        <p>  
          ⚙️ Engenharia: PySpark, Databricks, ETL, Data Lake.
        </p> 
        <p>  
          🛠️ Ferramentas: Git, GitHub, Azure.
        </p> 
        <p>  
          📊 Visualização: Power BI, Matplotlib.
        </p>
        
        <p className="mt-8">
          Entre em contato comigo através do{" "}
          <a href="https://www.linkedin.com/in/felipe-zerbini">LinkedIn</a> ou email{" "}
          <a href="mailto:felipezerbini.ss@gmail.com">felipezerbini.ss@gmail.com</a>.
        </p>
        
        <p className="mt-6">
          Vamos construir algo incrível juntos! 🚀
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
