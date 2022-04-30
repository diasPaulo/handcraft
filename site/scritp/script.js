const openMenu = () => {
    btn_openMenu.style.display = "none"
    btn_closeMenu.style.display = "initial"
    menuContent.style.display = "initial"
}

const closeMenu = () => {
    btn_openMenu.style.display = "initial"
    btn_closeMenu.style.display = "none"
    menuContent.style.display = "none"
}

window.addEventListener("resize", size => size > 768 ? menuContent.style.display = "initial" : null);

var btn_openMenu = document.getElementById("openMenu")
var btn_closeMenu = document.getElementById("closeMenu")
var menuContent = document.getElementById("menuContent")

btn_openMenu.addEventListener("click", openMenu)
btn_closeMenu.addEventListener("click", closeMenu)