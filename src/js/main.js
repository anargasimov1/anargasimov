const btn = document.querySelector(".header__main-ham-menu-cont"),
    menu = document.querySelector(".header__sm-menu"),
    clos = document.getElementById("close"),
    text = document.querySelector(".head_text"),
    url = "https://anargasimov1.glitch.me/messages",
    names = document.getElementById("name"),
    email = document.getElementById("email"),
    message = document.getElementById("message"),
    send = document.getElementById("send")
phone = document.getElementById("phone")




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


let content = "Saytıma xoş gəlmisiz burada sizə fəaliyyət istiqamətim haqqında və proyektərim haqqında məlumatlar verəcəm..."


for (let i = 0; i < content.length; ++i) {
    setTimeout(() => {
        text.innerHTML += `${content[i]}`;

    }, i * 50);
}



send.onclick = () => {
    let values = {
        name: names.value,
        email: email.value,
        message: message.value,
        phone: phone.value
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(values)
    })


    names.value = "",
        email.value = "",
        message.value = "",
        phone.value = "";
}

fetch(url)
    .then(r => r.json())
    .then(d => console.log(d))