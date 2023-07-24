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
		img: <IconHTML className="w-12 h-12 " />,
	},
	{
		name: "CSS",
		img: <IconCSS className="w-12 h-12 "/>,
	},
	{
		name: "JavaScript",
		img: <IconJavaScript className="w-12 h-12 "/>,
	},
	{
		name: "React",
		img: <IconReact className="w-12 h-12 "/>,
	},
	{
		name: "Git",
		img: <IconGit className="w-12 h-12 "/>,
	},
	{
		name: "Github",
		img: <IconGithub className="w-12 h-12 "/>,
	},
	{
		name: "Figma",
		img: <IconFigma className="w-12 h-12 "/>,
	},
	{
		name: "SASS",
		img: <IconSASS className="w-12 h-12 "/>,
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
