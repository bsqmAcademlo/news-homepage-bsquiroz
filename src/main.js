const iconOpen = document.querySelector(".icon__open");
const iconClose = document.querySelector(".icon__close");

const contentMenu = document.querySelector(".content__menu");
console.log(contentMenu);

iconOpen.addEventListener("click", function () {
	iconOpen.style.display = "none";
	iconClose.style.display = "block";

	contentMenu.classList.add("content__menu--show");
});

iconClose.addEventListener("click", function () {
	iconClose.style.display = "none";
	iconOpen.style.display = "block";

	contentMenu.classList.remove("content__menu--show");
});
