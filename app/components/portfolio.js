export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="center">
        <h2>Portfolio</h2>
        <div className="portfolio-container">
          <a
            href="https://github.com/Jatesh-Parikh/notion-landing-page"
            target="_blank"
          >
            <img src="/img/notion.png" alt="notion landing page" />
          </a>
          <a
            href="https://github.com/Jatesh-Parikh/asana-clone"
            target="_blank"
          >
            <img src="/img/asana.png" alt="asana landing page" />
          </a>
          <a href="https://github.com/Jatesh-Parikh/promptopia" target="_blank">
            <img src="/img/promptopia.png" alt="promptopia landing page" />
          </a>
        </div>
      </div>
    </section>
  );
}
