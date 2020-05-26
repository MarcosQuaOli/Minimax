$(document).ready(() => {
	/* Selected Button */
	$('.btnGallery').click(function(){
		$('.btnGallery').removeClass('on');
		$(this).toggleClass('on'); 
	});

	filterSelection("all");

	// Função para filtrar as imagens que serão selecionadas
	function filterSelection(c) {				
		$('[data-filter~="all"]').each(function() {
			let filter = $(this).attr('data-filter').split(" ");

			let filterType = filter.some((e) => {return e === c});

			if(filterType) {
				$(this).animate({
					opacity: 1,
					visibility: 'visible',
				}, {
					complete: () => { 
						$(this).css('display', 'block');
					}
				});
			} else {
				$(this).animate({
					opacity: 0,
					visibility: 'hidden',
				}, {
					complete: () => { 
						$(this).css('display', 'none');
					}
				});
			}
		});
	} 
})

