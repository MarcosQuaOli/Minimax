// Adicionando a class selected ao botao que foi pressionado
const $links = document.querySelectorAll('.links');
const $nav = document.querySelector('.nav-portfolio');

for(let i = 0; i < $links.length; i++){
	$links[i].addEventListener('click', function(){
					let current = document.getElementsByClassName("selected");
					current[0].className = current[0].className.replace(" selected", "");
					this.className += " selected"; 
				});
}

filterSelection("all");

// Função para filtrar as imagens que serão selecionadas
function filterSelection(c) {				
	const $filter = document.getElementsByClassName("all");
		
	for(let i = 0; i < $filter.length; i++){
		let filtrando = $filter[i].className.split(" ");

		let filtroType = filtrando.some(function(f){
			return f === c;
		})

		if(filtroType === false) {
			$filter[i].classList.add('hide');
		}
		else {
			$filter[i].classList.remove('hide');
		}
	}					
}