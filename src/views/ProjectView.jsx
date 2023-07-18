import { Link } from "wouter"
import { projects } from "../data/projects"

export default function ProjectView({ params }) {
	const project = projects.find((eachProject) => eachProject.id === params.id)

	if (!project)
		return (
			<div className="flex-grow flex flex-col justify-center items-center gap-4">
				<p>No existe el proyecto</p>
				<Link href="/">
					<a>Volver</a>
				</Link>
			</div>
		)
	return (
		<div className="flex-grow">
			<h2>{project.name}</h2>
			<picture className="flex flex-col gap-6 lg:flex-row">
				<img src={project.img} alt="Imagen del sitio web finalizado" className="object-contain"/>
				<figcaption>
					{project.textParagraph.map((text) => (
						<p
							key={text}
							className="text-left
				mb-2 text-lg">
							{text}
						</p>
					))}
				</figcaption>
			</picture>
		</div>
	)
}
