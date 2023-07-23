function EachProject({ proyect }) {
	const { name, tumbnail, technologies } = proyect
	return (
		<article
			key={name}
			className="group py-16 px-12 mb-8 flex justify-left items-center flex-col md:flex-row gap-12 container mx-auto border-b border-gray-400 bg-slate-300 dark:bg-[#111] hover:bg-[#0c0c0c] rounded-xl">
			<picture className="order-1 md:-order-1">
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
						<p className="px-3 py-1 border border-white bg-white text-black" key={tech}>
							{tech}
						</p>
					))}
				</div>
			</aside>
			<p className="flex items-center gap-2 ">
				<span className="text-white text-3xl"></span>{" "}
				<svg
					className="w-6 h-6 group-hover:text-[#53d301] text-gray-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 18 18">
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
					/>
				</svg>
			</p>
		</article>
	)
}
export default EachProject
