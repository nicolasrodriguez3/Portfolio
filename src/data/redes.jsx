import { LinkedinRounded, IconGithub, EmailCircleIcon } from "../assets/Icons"

export const redes = [
	{
		name: "Linkedin",
		url: new URL("https://www.linkedin.com/in/nirodriguez/"),
		icon: <LinkedinRounded className="w-6 h-6 group-hover:fill-[#b811ce] dark:group-hover:fill-[#53d301] " />,
	},
	{
		name: "Github",
		url: new URL("https://github.com/nicolasrodriguez3"),
		icon: <IconGithub className="w-6 h-6 group-hover:fill-[#b811ce] dark:group-hover:fill-[#53d301] "/>,
	},
	{
		name: "Email",
		url: "nicolasrodriguez@outlook.com.ar",
		icon: <EmailCircleIcon className="w-6 h-6 group-hover:text-[#b811ce] dark:group-hover:text-[#53d301] "/>,
	},
]
