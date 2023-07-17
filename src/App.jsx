import "./App.css"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Proyects from "./components/Proyects"

function App() {
	return (
		<>
		<div className="container mx-auto">
			<Hero />
			<AboutMe />
			<Proyects />
		</div>
			<Footer />
		</>
	)
}

export default App

