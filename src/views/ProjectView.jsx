import { Link } from "wouter"
import { projects } from "../data/projects"

export default function ProjectView({ params }) {
	const project = projects.find((eachProject) => eachProject.id === params.id)

	if (!project)
		return (
			<div className="flex-grow flex flex-col justify-center items-center gap-4">
				<p>No existe el proyecto</p>
				<Link href="/">
					<a>Ir al inicio</a>
				</Link>
			</div>
		)
	return (
		<div className="container mx-auto flex-grow flex flex-col justify-center">
			<h2 className="w-full p-4 text-4xl text-left">{project.name}</h2>
			<picture className="flex flex-col gap-8 lg:flex-row p-4 items-center">
				<img
					src={project.img}
					alt="Imagen del sitio web finalizado"
					className="object-contain max-w-md xl:max-w-xl mx-auto"
				/>
				<figcaption className="">
					{project.textParagraph.map((text) => (
						<p
							key={text}
							className="text-left mb-2 text-lg">
							{text}
						</p>
					))}
				</figcaption>
			</picture>
		</div>
	)
}
