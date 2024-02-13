var sidemenu = document.querySelector("#container .sidemenu");
var menuBar = document.querySelector("#container .menu");
var closeBar = document.querySelector("#container .close");

menuBar.addEventListener("click", function () {
    sidemenu.style.right = "-50px";
    menuBar.style.display = "none";
    closeBar.style.display = "block";
});

closeBar.addEventListener("click", function () {
    sidemenu.style.right = "-200px";
    menuBar.style.display = "block";
});


