import fotoHero from "/nico-foto.webp";

export default function Hero() {
  return (
    <main
      id="home"
      className="container mx-auto flex min-h-screen w-full flex-col items-center justify-center gap-12 p-4 md:flex-row md:justify-between md:gap-8 md:p-8"
    >
      <section>
        <h1 className="mb-4 text-left font-monospace text-4xl md:text-6xl lg:text-7xl">
          ¡Hola! soy
          <br />
          Nicolás Rodriguez
        </h1>
        <p className="text-right font-serif text-3xl md:text-4xl lg:text-5xl">
          frontend developer
        </p>
      </section>
      <img
        src={fotoHero}
        alt="Foto de mi persona de brazos cruzados"
        className="w-[80%] max-w-xs lg:max-w-sm xl:max-w-md"
      />
    </main>
  );
}
