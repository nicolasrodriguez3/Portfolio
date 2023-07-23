import { LinkedinRounded, IconGithub, EmailIcon } from "../assets/Icons"

export const redes = [
	{
		name: "Linkedin",
		url: new URL("https://www.linkedin.com/in/nirodriguez/"),
		icon: <LinkedinRounded w={6}/>,
	},
	{
		name: "Github",
		url: new URL("https://github.com/nicolasrodriguez3"),
		icon: <IconGithub w={6} />,
	},
	{
		name: "Email",
		url: "nicolasrodriguez@outlook.com.ar",
		icon: <EmailIcon w={6} />,
	},
]
