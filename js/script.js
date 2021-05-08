$(function() {
	$(".reviews__slider").slick({
		arrows: true
	});
});

if (document.querySelector(".header-second") !== null) {
  var s_menuBtn = document.querySelector(".s-adaptive");
  var s_menuLines = document.querySelectorAll(".s-adaptive__line");
  var s_menu = document.querySelector(".s-adaptive-menu");

  s_menuBtn.onclick = function () {
    for (var j = 0; j < s_menuLines.length; j++) {
      s_menuLines[j].classList.toggle("active");
    }

    s_menu.classList.toggle("active");
  };
}

if (document.querySelector('header') !== null) {
	var menuBtn = document.querySelector(".adaptive");
  var menuLines = document.querySelectorAll(".adaptive__line");
  var menu = document.querySelector(".adaptive-menu");

  menuBtn.onclick = function () {
    for (var i = 0; i < menuLines.length; i++) {
      menuLines[i].classList.toggle("active");
    }

    menu.classList.toggle("active");
  };
}

