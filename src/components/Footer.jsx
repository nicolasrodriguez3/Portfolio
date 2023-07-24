import { redes } from "../data/redes"

function Footer() {
	return (
		<>
			<footer className="relative w-screen">
				<div className="footer__bg absolute inset-0 dark:bg-[#111] bg-slate-200 bg-no-repeat bg-bottom -z-10"></div>
				<div className="container mx-auto flex items-center justify-between sm:justify-start gap-8 p-4 pt-28">
				<p className="text-lg">Nicolás Rodriguez </p>
				<nav className="flex items-baseline gap-4">
					{redes.map((red) => {
						return (
							<a
								className="group hover:font-bold text-inherit flex gap-2 items-center hover:text-[#b515ca] dark:hover:text-[#53d301]"
								key={red.name}
								href={red.url.href}
								target="_blank"
								rel="noreferrer">
								<span className="w-6">{red.icon}</span> {red.name}
							</a>
						)
					})}
				</nav></div>
			</footer>
		</>
	)
}
export default Footer
