import { Route } from "wouter"
import ProjectView from "../views/ProjectView.jsx"
import HomeView from "../views/HomeView.jsx"

export default function Router() {
	return (
		<>
			<Route path="/" component={HomeView} />
			<Route path="/projects/:id" component={ProjectView} />
		</>
	)
}