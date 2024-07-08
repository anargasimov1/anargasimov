const url = 'http://localhost:8080/db';

function start() {
    fetch(url, {
        method: 'GET'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            addelements(data);
        })
        .catch(err => console.error(err))
}

start();

const list = document.getElementById("list"),
    name1 = document.getElementById("name"),
    surname = document.getElementById("surname"),
    age = document.getElementById("age"),
    btn = document.getElementById("btn"),
    id = document.getElementById("id"),
    btn1 = document.getElementById("btn1"),
    name2 = document.getElementById("name1"),
    surname1 = document.getElementById("surname1"),
    age1 = document.getElementById("age1");

function addelements(par) {
    for (let i = 0; i < par.length; i++) {
        list.innerHTML += ` <tr>
                <td >${par[i].id}</td>
                <td>${par[i].name}</td>
                <td>${par[i].surname}</td>
                <td>${par[i].age}</td>
                <td style="cursor:pointer" data-role=${par[i].id}>x</td>
            </tr>`
    }
}

btn.onclick = () => {
    let object = {
        name: name1.value,
        surname: surname.value,
        age: age.value
    }

    post(object);
    name1.value = "",
        surname.value = "";
    age.value = "";

}

function post(par) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(par)
    })
        .then(response => {
            if (response.ok) {
                list.innerHTML = "";
                start();

            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

document.addEventListener("click", e => {
    if (e.target.dataset.role) {
        deletuser(e.target.dataset.role)
    }

})


function deletuser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE"
    })
        .then(r => {
            list.innerHTML = "";
            if (r.ok) start()
        })
}



function update(par,id1) {
    fetch(`${url}/${id1}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(par)
    })
        .then(response => {
            if (response.ok) {
                list.innerHTML = "";
                start();

            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

btn1.onclick = () => {
    let object = {
        name: name2.value,
        surname: surname1.value,
        age: age1.value
    }
    let id = id.value;

    update(object,id);
    name2.value = "",
        surname1.value = "";
    age1.value = "";

}