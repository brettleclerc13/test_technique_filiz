export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full flex mx-0 my-10 lg:my-20 flex-wrap px-10 lg:px-0 gap-10 lg:gap-0"
    >
      <div className="box-border flex-1/2 flex flex-col gap-6 lg:pr-24 align-middle justify-center">
        <h1 className="text-center lg:text-left">
          Bienvenue
          <br />
          chez Café Neko
        </h1>
        <h3 className="text-center lg:text-left">
          L'endroit où le café rencontre les ronronnements
        </h3>
        <p className="text-center lg:text-left text-[1rem]">
          Bienvenue dans notre univers où chaque tasse de café est accompagnée
          d'une dose d'amour félin.
        </p>
      </div>
      <div className="flex-1/2 flex align-middle justify-center w-[200px]">
        <img src="/images/cat-hero-section.png" alt="Cat hero section" />
      </div>
    </section>
  );
}
