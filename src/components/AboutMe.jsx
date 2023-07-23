import {
	IconHTML,
	IconCSS,
	IconFigma,
	IconReact,
	IconGit,
	IconGithub,
	IconJavaScript,
	IconSASS,
} from "../assets/Icons"

const technologies = [
	{
		name: "HTML5",
		img: <IconHTML />,
	},
	{
		name: "CSS",
		img: <IconCSS />,
	},
	{
		name: "JavaScript",
		img: <IconJavaScript />,
	},
	{
		name: "React",
		img: <IconReact />,
	},
	{
		name: "Git",
		img: <IconGit />,
	},
	{
		name: "Github",
		img: <IconGithub />,
	},
	{
		name: "Figma",
		img: <IconFigma />,
	},
	{
		name: "SASS",
		img: <IconSASS />,
	},
]

export default function AboutMe() {
	return (
		<section className="py-16 px-2 container mx-auto">
			<h4 className="text-2xl">Tecnología al servicio de tu empresa</h4>
			<div className="inline-grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 justify-items-center gap-x-10 gap-y-4 mx-auto py-12 ">
				{technologies.map(({ name, img }) => {
					return (
						<picture key={name} className="flex flex-col justify-center items-center gap-2">
							{img}
							<figcaption className="text-xl">{name}</figcaption>
						</picture>
					)
				})}
			</div>
		</section>
	)
}
