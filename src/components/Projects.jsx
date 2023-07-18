import { projects } from "../data/projects"
import EachProject from "./EachProject"
import { Link } from "wouter"

export default function Proyects() {
	return (
		<section className="p-4">
			<h2 className="text-3xl my-16">Proyectos</h2>
			<div className="container mx-auto">
				{projects.map((proyect, index) => {
					return (
						<Link key={index} href={`/projects/${proyect.id}`}>
							<a>
								<EachProject proyect={proyect} index={index} />
							</a>
						</Link>
					)
				})}
			</div>
		</section>
	)
}
