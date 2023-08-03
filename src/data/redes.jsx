import { LinkedinRounded, IconGithub, EmailCircleIcon } from "../assets/Icons"

export const redes = [
	{
		name: "Linkedin",
		url: new URL("https://www.linkedin.com/in/nirodriguez/"),
		icon: <LinkedinRounded className="w-6 h-6" />,
	},
	{
		name: "Github",
		url: new URL("https://github.com/nicolasrodriguez3"),
		icon: <IconGithub className="w-6 h-6 "/>,
	},
	{
		name: "Email",
		url: new URL ("mailto:nicolasrodriguez@outlook.com.ar?Subject=Hola!%20"),
		icon: <EmailCircleIcon className="w-6 h-6 "/>,
	},
]
