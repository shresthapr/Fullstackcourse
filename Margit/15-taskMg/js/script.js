const backToButton = document.getElementById("scrolltop");

const width = window.matchMedia("(max-width: 576px)");
// window.onscroll = function() {scrollFunction()};
window.onscroll = () => scrollFunction();

const scrollFunction = () => {
	if (
		document.body.scrollTop > 200 ||
		(document.documentElement.scrollTop > 200 && !width.matches)
	) {
		backToButton.style.display = "flex";
	} else {
		backToButton.style.display = "none ";
	}
};

const backToTop = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};
