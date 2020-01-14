const $btnTop = document.getElementById("top-btn");

window.onscroll = function() {
	myFunction()
};

// Função para verificar se o usuario desceu a pagina a 200px do Top
function myFunction() {
	if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		$btnTop.style.display = "block";
	}
	else {
		$btnTop.style.display = "none";
	}
}