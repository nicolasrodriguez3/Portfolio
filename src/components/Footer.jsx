import { redes } from "../data/redes"

function Footer() {
	return (
		<>
			<footer className="relative flex items-center flex-col gap-2 p-4">
			<div
				className="footer-bg absolute inset-0 bg-[url('/footer_fondo_velada.webp')] bg-no-repeat bg-bottom -z-10"
			></div>
				<nav className="flex items-end gap-4">
					{redes.map((red) => {
						return (
							<a
								className="hover:scale-105"
								key={red.name}
								href={red.url.href}
								target="_blank"
								rel="noreferrer">
								<img src={red.icon} alt="" width="40px" />
							</a>
						)
					})}
				</nav>
				<hr className="w-8/12 mt-2" />
				<p>Nicolás Rodriguez</p>
			</footer>
		</>
	)
}
export default Footer
