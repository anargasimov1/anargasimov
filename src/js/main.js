const btn = document.querySelector(".header__main-ham-menu-cont"),
    menu = document.querySelector(".header__sm-menu"),
    clos = document.getElementById("close"),
    text = document.getElementById("head_text"),
    url = "https://anargasimov1.glitch.me/messages",
    names = document.getElementById("name"),
    email = document.getElementById("email"),
    message = document.getElementById("message"),
    send = document.getElementById("send"),
    phone = document.getElementById("phone");




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


let content = "I'm very glad to have you on my website..."


for (let i = 0; i < content.length; ++i) {
    setTimeout(() => {
        text.innerHTML += `${content[i]}`;

    }, i * 50);
}

const namerror = document.getElementById("name_error"),
    phonerror = document.getElementById("phone_error"),
    emilerror = document.getElementById("email_error"),
    messagerror = document.getElementById("message_error")


send.onclick = () => {
    if (names.value.trim() == "") {
        namerror.innerText = "*required!"
    }
    else {
        namerror.innerText = "";
    }
    if (phone.value == "") {
        phonerror.innerText = "*required!"
    }
    else {
        phonerror.innerText = "";
    }
    if (email.value.trim() == "") {
        emilerror.innerText = "*required!"
    }
    else {
        emilerror.innerText = "";
    }
    if (message.value.trim() == "") {
        messagerror.innerText = "*required!"
    }
    else {
        messagerror.innerText = "";
    }

    if (names !== "" && phone.value !== "" && email.value !== "" && message.value !== "") {

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
            .then(r => {
                if (r.ok) {
                    alert("Mesajınız uğurla göndərildi!");
                    names.value = "",
                        email.value = "",
                        message.value = "",
                        phone.value = "";
                }
            })
    }
}



