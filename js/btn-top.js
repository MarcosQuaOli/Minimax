$(document).ready(() => {
	toTop();

	window.onscroll = function() {
		toTop();
	};

	function toTop() {
		(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? $('.btn-toTop').show() : $('.btn-toTop').hide(); 
	}
})