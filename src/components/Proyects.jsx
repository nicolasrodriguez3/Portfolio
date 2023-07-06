import miniappsImg from "../img/miniapps.png"
import laNerdShopImg from "../img/la-nerd.png"
import soyJuanImg from "../img/soy-juan.png"

const proyects = [
	{
		name: "Miniapps",
		img: miniappsImg,
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
		img: laNerdShopImg,
		textParagraph: [
			'El proyecto "La Nerd Shop" es una emocionante colaboración realizada en conjunto entre dos desarrolladores y dos diseñadores, todos graduados de Coderhouse',
			"El objetivo de este proyecto fue crear una landing page la cual pueda en el futuro convertirse en un ecommerce completamente funcional. Todo el desarrollo se realizó utilizando la popular biblioteca de JavaScript, React.",
		],
		linkToCode: "https://github.com/nicolasrodriguez3/la-nerd-shop",
		linkToSite: "https://la-nerd-shop.vercel.app/",
	},
	{
		name: "Soy Juan, tu tutor",
		img: soyJuanImg,
		textParagraph: [
			'"Soy Juan, tu tutor" es el resultado de un trabajo colaborativo entre dos desarrolladores web que participaron en el curso de Coderhouse.',
			"La página web tiene como objetivo presentar a Juan como un tutor experto y confiable, que puede ayudar a sus alumnos y clientes a mejorar sus habilidades y conocimientos.",
			"Para ello, diseñamos una estructura sencilla y clara, con cuatro secciones principales: inicio, sobre mí, testimonios y contacto. En cada sección, se puede encontrar información relevante sobre Juan, sus servicios, sus alumnos y sus clientes, así como un formulario para enviarle un mensaje.",
		],
		linkToCode: "https://github.com/nicolasrodriguez3/la-nerd-shop",
		linkToSite: "https://la-nerd-shop.vercel.app/",
	},
]
export default function Proyects() {
	return (
		<section className="p-4">
			<h2 className="text-3xl my-4">Proyectos</h2>
			<div>
				{proyects.map(({ name, img, textParagraph }, index) => {
					return (
						<article
							key={name}
							className="grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-4 items-center mb-12">
							<h3 className="text-4xl col-span-full mb-2">{name}</h3>
							<picture className={index % 2 ? "col-start-2" : ""}>
								<img
									src={img}
									alt={`Imagen del proyecto ${name}`}
									className="block max-w-md mx-auto w-full mb-2"
								/>
							</picture>
							<div>
								{textParagraph.map((text) => (
									<p
										key={text}
										className="text-left
							mb-2 text-lg">
										{text}
									</p>
								))}
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}
