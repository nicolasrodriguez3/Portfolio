function EachProyect({ proyect }, index) {
	const { name, img, textParagraph } = proyect
	return (
		<article key={name} className="mb-32">
			<h3 className="text-4xl col-span-full mb-3">{name}</h3>
			<picture className="flex flex-col md:flex-row gap-4">
				<img
					src={img}
					alt={`Imagen del proyecto ${name}`}
					className={`${
						index % 2 === 0 ? "md:order-2" : ""
					} inline-block max-w-[26rem] mx-auto w-full object-contain mb-2`}
				/>
				<div className="md:w-[60%]">
					{textParagraph?.map((text) => (
						<p
							key={text}
							className="text-left
							mb-2 text-lg">
							{text}
						</p>
					))}
				</div>
			</picture>
		</article>
	)
}
export default EachProyect
