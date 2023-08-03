import { Link, useLocation } from "wouter";
import { projects } from "../data/projects";
import Footer from "../components/Footer";
import { ArrowLeftIcon } from "../assets/Icons";

export default function ProjectView({ params }) {
  const setLocation = useLocation()[1];

  const project = projects.find((eachProject) => eachProject.id === params.id);

  if (!project)
    return (
      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col">
        <main className="container flex flex-grow flex-col items-center justify-center gap-4">
          <p className="text-2xl">No existe el proyecto 🙁</p>
          <Link href="/">
            <a className="underline hover:text-[#8851ff] dark:hover:text-[#a67cff]">
              Ir al inicio
            </a>
          </Link>
        </main>
        <Footer showLinks />
      </div>
    );
  return (
    <div className="flex min-h-screen flex-col ">
      <div className="container mx-auto flex max-w-screen-xl flex-grow justify-center pt-12 flex-wrap">

        <h2 className="flex w-full items-center gap-4 p-4 text-left text-4xl">
          <Link href="/">
            <a>
              <ArrowLeftIcon className="h-10 w-10" />
            </a>
          </Link>
          {project.name}
        </h2>

        <picture className="p-4">
          <img
            src={project.img}
            alt="Imagen del sitio web finalizado"
            className="mx-auto max-w-lg w-full object-contain"
          />
        </picture>
        <figcaption className="mx-auto max-w-2xl px-4 pt-8">
          {project.textParagraph.map((text) => (
            <p key={text} className="mb-2 text-left text-lg">
              {text}
            </p>
          ))}
        </figcaption>
      </div>
      <Footer showLinks />
    </div>
  );
}
