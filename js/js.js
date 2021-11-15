const $btn = document.querySelector("#btn-nav");
$btn.addEventListener("blur", () => {
  $("#navbarToggler").collapse('hide');
});
