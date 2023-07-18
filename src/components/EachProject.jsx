function EachProject({ proyect }) {
	const { name, img, technologies } = proyect
	return (
		<article
			key={name}
			className="mb-32 flex justify-left items-center flex-col md:flex-row gap-8 container mx-auto">
			<picture className="order-1 md:-order-1">
				<img
					src={img}
					alt={`Imagen del proyecto ${name}`}
					className="block max-w-sm mx-auto w-full object-contain"
				/>
			</picture>
			<aside>
				<h3 className="text-4xl mb-3 text-left text-white">{name}</h3>
				<div className="flex gap-2 items-start flex-wrap">
					{technologies?.map((tech) => (
						<p
							className="px-3 py-1 border border-white bg-white text-black"
							key={tech}>
							{tech}
						</p>
					))}
				</div>
			</aside>
		</article>
	)
}
export default EachProject
