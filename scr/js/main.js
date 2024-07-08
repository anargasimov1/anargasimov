const btn = document.querySelector(".header__main-ham-menu-cont"),
    menu = document.querySelector(".header__sm-menu"),
    clos = document.getElementById("close"),
    text = document.querySelector(".heading-primary")

let toggle = false;

btn.onclick = () => {
    toggle = !toggle;
    if (toggle) {
        menu.style.visibility = "visible";
        menu.style.opacity = 1;
    }
    else {
        menu.style.visibility = "hidden";
        menu.style.opacity = 0;
    }
}

clos.onclick = () => {
    menu.style.visibility = "hidden";
    menu.style.opacity = 0;
}


let content ="saytıma xoş gəlmİsİnİz!"


for (let i = 0; i < content.length; ++i) {
    setTimeout(() => {
        text.innerHTML += `${content[i]}`;

    }, i*100);
}