import { redes } from "../data/redes"

function Footer() {
	return (
		<>
			<footer className="relative w-screen">
				<div className="footer__bg absolute inset-0 bg-[url('/src/img/footer_fondo_velada.webp')] bg-no-repeat bg-bottom -z-10"></div>
				<div className="container mx-auto flex items-center justify-between sm:justify-start gap-8 p-4 pt-20">
				<p className="text-lg">Nicolás Rodriguez </p>
				<nav className="flex items-baseline gap-4">
					{redes.map((red) => {
						return (
							<a
								className="hover:scale-105 text-inherit underline"
								key={red.name}
								href={red.url.href}
								target="_blank"
								rel="noreferrer">
								{red.name}
							</a>
						)
					})}
				</nav></div>
			</footer>
		</>
	)
}
export default Footer
