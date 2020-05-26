$(document).ready(() => {
	$('.menu-btn').click(() => {
		$('.navtop').slideToggle();
	})

	$(window).resize(() => {
		(window.innerWidth > 768) ? $('.navtop').css('display', 'block') : $('.navtop').css('display', 'none');
	})
})