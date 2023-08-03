import { ExternalLink } from "../assets/Icons";

function EachProject({ proyect }) {
  const { name, tumbnail, technologies } = proyect;
  return (
    <article
      key={name}
      className="group container mx-auto mb-10 grid max-w-3xl overflow-hidden border-b border-t sm:border border-gray-400 bg-slate-300 hover:bg-slate-200 dark:bg-[#111] dark:hover:bg-[#0c0c0c] sm:grid-cols-[40%_50%_1fr] md:rounded-xl"
    >
      <picture className="overflow-hidden">
        <img
          src={tumbnail}
          alt={`Imagen del proyecto ${name}`}
          className="mx-auto block h-full w-full max-w-xl rotate-0 rounded object-cover transition-all group-hover:-rotate-3 group-hover:scale-105"
        />
      </picture>
      <aside className="sm: w-full px-4 py-12 pl-8">
        <h3 className="mb-3 text-left text-5xl text-gray-800 dark:text-white">
          {name}
        </h3>
        <div className="flex flex-wrap items-start gap-2">
          {technologies?.map((tech) => (
            <p
              className="border border-slate-800 bg-slate-800 px-3 py-1 text-white dark:border-white dark:bg-white dark:text-black"
              key={tech}
            >
              {tech}
            </p>
          ))}
        </div>
      </aside>
      <p className="flex items-center gap-2 place-self-center p-4">
        <span className="block sm:hidden text-slate-800 group-hover:text-[#9d72fe] dark:text-white dark:group-hover:text-[#a67cff]">Mas info</span>
        <ExternalLink
          className={
            "h-4 w-4 text-gray-800 group-hover:text-[#9d72fe] dark:group-hover:text-[#a67cff] dark:text-white sm:h-6 sm:w-4"
          }
        />
      </p>
    </article>
  );
}
export default EachProject;
