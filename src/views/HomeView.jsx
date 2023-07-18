import AboutMe from "../components/AboutMe"
import Hero from "../components/Hero"
import Projects from "../components/Projects"

export default function HomeView() {
	return (
		<>
			<div className="container mx-auto">
				<Hero />
				<AboutMe />
				<Projects />
			</div>
		</>
	)
}
