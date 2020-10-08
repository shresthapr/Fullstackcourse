const backToButton = document.getElementById("back-to-top");

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

//SHOW HIDE SEARCH BUTTON
const search = document.getElementById("search-form");

const showHide = () => {
	search.classList.toggle("hide");
};
