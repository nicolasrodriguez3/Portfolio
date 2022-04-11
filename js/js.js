const $btn = document.querySelector("#btn-nav")
$btn.addEventListener("blur", () => {
	$("#navbarToggler").collapse("hide")
})

//Get the button
let mybutton = document.getElementById("btn-back-to-top")

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block"
	} else {
		mybutton.style.display = "none"
	}
})

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", () => {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
})

document.addEventListener("submit", (e) => {
	e.preventDefault()
  const $response = document.getElementById("response")
	$response.innerHTML = '<img src="./img/loader.svg" alt="loader" />Enviando formulario...'
	$response.classList.remove("d-none")
	fetch("https://formsubmit.co/ajax/nicolasrodriguez@outlook.com.ar", {
		method: "POST",
		body: new FormData(e.target)
	})
		.then((res) => (res.ok ? res.json() : Promise.reject(res)))
		.then((data) => {
			console.log(data)
			let message = "Formulario enviado correctamente!"
			if (data.success === "false") message = "Ocurrió un error. Intente nuevamente."
      $response.innerHTML = message
    })
		.catch((err) => {
      console.log(err)
      $response.innerHTML = "Ocurrió un error al enviar el formulario, intente nuevamente en unos minutos."
    })
})
