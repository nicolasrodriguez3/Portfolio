import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Projects from "../components/Projects"

export default function HomeView() {
	return (
		<>
			<div className="container mx-auto">
				<Hero />
				<AboutMe />
				<Projects />
				<Contact />
			</div>
		</>
	)
}
