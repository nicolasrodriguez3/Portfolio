import React from "react"
import ReactDOM from "react-dom/client"
import { Route } from "wouter"
import App from "./App.jsx"
import "./index.css"
import ProjectView from "./views/ProjectView.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Route path="/" component={App} />
		<Route path="/projects/:id" component={ProjectView} />
	</React.StrictMode>
)

