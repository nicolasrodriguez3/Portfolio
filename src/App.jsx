import "./App.css"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import { Route } from "wouter"
import ProjectView from "./views/ProjectView"

function App() {
	return (
		<>
			<Hero />
			<AboutMe />
			<Projects />
			<Footer />
			<Route path="/projects/:id" component={ProjectView}/>
		</>
	)
}

export default App
