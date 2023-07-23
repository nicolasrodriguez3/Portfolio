import miniappsImg from "../img/miniapps.png"
import laNerdShopImg from "../img/la-nerd.png"
import soyJuanImg from "../img/soy-juan.png"
import laNerdShopTumbnail from "../img/img1.png"
import miniappsTumbnail from "../img/img2.png"
import soyJuanTumbnail from "../img/img3.png"

export const projects = [
	{
		name: "Miniapps",
		id: "miniapps",
		img: miniappsImg,
		tumbnail: miniappsTumbnail,
		technologies: ["JavaScript", "SCSS", "HTML", "API", "Sweet Alert 2"],
		textParagraph: [
			'Miniapps! es una aplicación de página única (SPA) con cuatro "miniaplicaciones": lista de tareas, cronómetro, temporizador y el clima.',
			"Desarrollada en JavaScript, permite al usuario escribir y gestionar tareas, utilizar un cronómetro y temporizador, y consultar el pronóstico del tiempo en distintas ciudades de Argentina. ",
			"El proyecto fue una oportunidad para aprender sobre el desarrollo de aplicaciones de página única y experimentar con diferentes tecnologías.",
		],
		linkToCode: "https://github.com/nicolasrodriguez3/JS_Coder",
		linkToSite: "https://nicolasrodriguez3.github.io/JS_Coder/Final-JS/index.html",
	},
	{
		name: "La Nerd Shop",
		id: "la_nerd_shop",
		img: laNerdShopImg,
		tumbnail: laNerdShopTumbnail,
		technologies: ["React", "SCSS", "HTML", "Framer Motion"],
		textParagraph: [
			"La Nerd Shop es un proyecto web que realicé junto a otro desarrollador y dos diseñadores UI.",
			" Se trata de una landing page bajo la temática geek y nerd, con un diseño moderno, colorido y divertido, que refleja la personalidad de la marca y de su público objetivo.",
			"La página también está preparada para convertirse en un ecommerce en el futuro. Fue creada en React, siguiendo las mejores prácticas de accesibilidad, usabilidad y SEO.",
			"Estoy muy orgulloso del resultado final y de haber trabajado en equipo con otros profesionales.",
		],
		linkToCode: "https://github.com/nicolasrodriguez3/la-nerd-shop",
		linkToSite: "https://la-nerd-shop.vercel.app/",
	},
	{
		name: "Soy Juan, tu tutor.",
		id: "soy_juan_tu_tutor",
		img: soyJuanImg,
		tumbnail: soyJuanTumbnail,
		technologies: ["JavaScript", "SCSS", "HTML"],
		textParagraph: [
			'"Soy Juan, tu tutor" es el resultado de un trabajo colaborativo que realice junto a otro desarrollador web.',
			"La página web tiene como objetivo presentar a Juan como un tutor experto y confiable, que puede ayudar a sus alumnos y clientes a mejorar sus habilidades y conocimientos.",
			"Para ello, diseñamos una estructura sencilla y clara, con cuatro secciones principales: inicio, sobre mí, testimonios y contacto. En cada sección, se puede encontrar información relevante sobre Juan, sus servicios, sus alumnos y sus clientes, así como un formulario para enviarle un mensaje.",
		],
		linkToCode: "https://github.com/nicolasrodriguez3/soy-juan-tu-tutor",
		linkToSite: "https://soyjuantututor.vercel.app/",
	},
]