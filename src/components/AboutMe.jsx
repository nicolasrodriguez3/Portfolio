import {
  IconHTML,
  IconCSS,
  IconFigma,
  IconReact,
  IconGit,
  IconGithub,
  IconJavaScript,
  IconSASS,
} from "../assets/Icons";

const technologies = [
  {
    name: "HTML5",
    img: <IconHTML className="h-12 w-12" />,
  },
  {
    name: "CSS",
    img: <IconCSS className="h-12 w-12 " />,
  },
  {
    name: "JavaScript",
    img: <IconJavaScript className="h-12 w-12 " />,
  },
  {
    name: "React",
    img: <IconReact className="h-12 w-12 " />,
  },
  {
    name: "Git",
    img: <IconGit className="h-12 w-12 " />,
  },
  {
    name: "Github",
    img: <IconGithub className="h-12 w-12 " />,
  },
  {
    name: "Figma",
    img: <IconFigma className="h-12 w-12 " />,
  },
  {
    name: "SASS",
    img: <IconSASS className="h-12 w-12 " />,
  },
];

export default function AboutMe() {
  return (
    <section className="py-8 mb-12">
      <h4 className="bg_gradient p-4 text-2xl mb-4 [text-shadow:_0px_0px_2px_rgb(0_0_0_/_20%)]">
        Tecnología al servicio de tu empresa
      </h4>

      <div className="mx-auto inline-grid grid-cols-2 justify-items-center gap-x-10 gap-y-4 px-2 py-12 md:grid-cols-4 lg:grid-cols-8">
        {technologies.map(({ name, img }) => {
          return (
            <picture
              key={name}
              className="flex flex-col items-center justify-center gap-2"
            >
              {img}
              <figcaption className="text-xl">{name}</figcaption>
            </picture>
          );
        })}
      </div>
    </section>
  );
}
