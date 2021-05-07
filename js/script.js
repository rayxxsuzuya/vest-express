$(function() {
	$(".reviews__slider").slick({
		arrows: true
	});
});

var menuBtn = document.querySelector('.adaptive');
var menuLines = document.querySelectorAll('.adaptive__line');
var menu = document.querySelector('.adaptive-menu');

menuBtn.onclick = function() {

	for (var i = 0; i < menuLines.length; i++) {
		menuLines[i].classList.toggle('active');
	}

	menu.classList.toggle('active');
}