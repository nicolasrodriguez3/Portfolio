import { Route } from "wouter"
import "./App.css"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import ProjectView from "./views/ProjectView"

function App() {
	return (
		<>
		<div className="container mx-auto">
			<Hero />
			<AboutMe />
			<Projects />
			<Footer />
			
		</div>
		</>
	)
}

export default App
