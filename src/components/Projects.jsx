import { projects } from "../data/projects";
import EachProject from "./EachProject";
import { Link } from "react-router-dom";

export default function Proyects() {
  return (
    <section className="p-0 sm:p-2 md:p-4">
      <h2 className="mb-12 text-4xl">Proyectos</h2>
      <div className="container mx-auto">
        {projects.map((proyect, index) => {
          return (
            <Link key={index} to={`/projects/${proyect.id}`} className="no-underline">
              <EachProject proyect={proyect} index={index} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
