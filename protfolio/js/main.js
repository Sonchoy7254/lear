var toggleButton = document.getElementsByClassName("nav-button")[0]
var navbarLinks = document.getElementsByClassName("nav-link")[0]
toggleButton.addEventListener("click", ()=>
{
    navbarLinks.classList.toggle("active")
}

)
