import { ExternalLink } from "../assets/Icons"

function EachProject({ proyect }) {
	const { name, tumbnail, technologies } = proyect
	return (
		<article
			key={name}
			className="group py-16 px-4 md:px-8 lg:px-12 mb-8 flex justify-left items-center flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 container mx-auto border-b border-gray-400 bg-slate-300 dark:bg-[#111] hover:bg-slate-400 dark:hover:bg-[#0c0c0c] rounded-xl">
			<picture className="order-1 sm:-order-1">
				<img
					src={tumbnail}
					alt={`Imagen del proyecto ${name}`}
					className="block max-w-xl mx-auto w-full object-contain rounded"
				/>
			</picture>
			<aside className="w-full">
				<h3 className="text-5xl mb-3 text-left dark:text-white text-gray-800">{name}</h3>
				<div className="flex gap-2 items-start flex-wrap">
					{technologies?.map((tech) => (
						<p className="px-3 py-1 border dark:border-white dark:bg-white dark:text-black border-slate-800 bg-slate-800 text-white" key={tech}>
							{tech}
						</p>
					))}
				</div>
			</aside>
			<p className="flex items-center gap-2 ">
				<ExternalLink className={"hidden md:block w-6 h-6 group-hover:text-[#b515ca] dark:group-hover:text-[#53d301] text-gray-800 dark:text-white"} />
			</p>
		</article>
	)
}
export default EachProject
