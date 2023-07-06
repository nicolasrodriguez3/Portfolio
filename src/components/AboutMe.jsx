import htmlImg from "../assets/html.svg"
import cssImg from "../assets/css.svg"
import jsImg from "../assets/js.svg"
import reactImg from "../assets/react.svg"
import gitImg from "../assets/git.svg"
import githubImg from "../assets/github.svg"

const technologies = [
	{
		name: "HTML5",
		img: htmlImg,
	},
	{
		name: "CSS",
		img: cssImg,
	},
	{
		name: "JavaScript",
		img: jsImg,
	},
	{
		name: "React",
		img: reactImg,
	},
	{
		name: "Git",
		img: gitImg,
	},
	{
		name: "Github",
		img: githubImg,
	},
]

export default function AboutMe() {
	return (
		<section>
			<h4 className="text-2xl">Tecnología al servicio de tu empresa</h4>
			<div className="inline-grid grid-cols-2 md:grid-cols-6 justify-items-center gap-x-8 gap-y-2 mx-auto py-10 ">
				{technologies.map(({ name, img }) => {
					return (
						<picture key={name} className="">
							<img src={img} alt={`Logo de ${name}`} />
							<figcaption>{name}</figcaption>
						</picture>
					)
				})}
			</div>
		</section>
	)
}
