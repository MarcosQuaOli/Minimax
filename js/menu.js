const $btn = document.querySelector('.btn-hambug');
const $navHeader = document.querySelector('.nav-header');

let open = false;

const WIDTH = 768;

window.addEventListener('resize', function(){
	if(window.innerWidth > WIDTH) {
		btnClose();
	}
});

$btn.addEventListener('click', function(){				
	if(!open) {
		btnOpen();
	}	
	else {
		btnClose();
	}		
	open = !open;					
})

function btnOpen() {					
	$navHeader.classList.add("show");				
}

function btnClose() {
	$navHeader.classList.remove("show");
}