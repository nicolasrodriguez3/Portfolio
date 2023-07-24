import { redes } from "../data/redes"

function Footer() {
	return (
		<>
			<footer className="relative w-screen">
				<div className="footer__bg absolute inset-0 dark:bg-[#111] bg-slate-200 bg-no-repeat bg-bottom -z-10"></div>
				<div className="container mx-auto flex flex-col gap-4 sm:flex-row sm:gap-8 items-center justify-between sm:justify-start p-4 pt-28 pb-8">
					<p className="text-lg">Nicolás Rodriguez</p>
					<nav className="flex items-center gap-5">
						{redes.map((red) => {
							return (
								<a
									className="group hover:font-bold text-inherit flex gap-2 items-center hover:text-[#b515ca] dark:hover:text-[#53d301]"
									key={red.name}
									href={red.url.href}
									target="_blank"
									rel="noreferrer">
									<span>{red.icon}</span> {red.name}
								</a>
							)
						})}
					</nav>
				</div>
			</footer>
		</>
	)
}
export default Footer
