var sidemenu = document.querySelector(".sidemenu");
var menuBar = document.querySelector(".menu");
var closeBar = document.querySelector(".close")

menuBar.addEventListener("click",function(){
    sidemenu.style.right = "-50px";
    menuBar.style.display = "none";
    closeBar.style.display = "block";
})

closeBar.addEventListener("click",function(){
    sidemenu.style.right = "-200px";
    menuBar.style.display = "block";
})