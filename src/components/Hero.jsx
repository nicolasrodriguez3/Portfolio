import fotoHero from "/nico-foto.png"

export default function Hero() {
	return (
		<main
			id="home"
			className="container p-4 md:p-8 mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 md:gap-6 min-h-screen w-full">
			<section>
				<h1 className="font-monospace text-4xl md:text-6xl text-left mb-4">
					¡Hola! soy
					<br />
					Nicolás Rodríguez
				</h1>
				<p className="font-serif text-3xl md:text-4xl text-right">frontend developer</p>
			</section>
			<img src={fotoHero} alt="Foto de mi persona de brazos cruzados" />
		</main>
	)
}
