const socket = io();
let email;
let input = document.getElementById("input")

Swal.fire({
    tittle: "Bienvenido a nuestro chat !! ",
    input: "text",
    text: "Ingresa por favor tu nombre:",
    inputValidator: (value) => {
        return !value && "Se requiere un nombre para continuar!!"
    },
    allowOutsideClick: false
}).then(result => {
    email = result.value
})

input.addEventListener('keyup', evt => {
    if (evt.key === "Enter") {
        if (input.value.trim().length > 0) {
            socket.emit("message", { email: email, message: input.value });
            input.value = "";
        }
    }
})

socket.on('messageLogs', data => {
    let log = document.getElementById('messageLogs');
    let messages = "";
    data.forEach(message => {
        messages = messages + `${message.email} dice : ${message.message}  </br>`
    });
    log.innerHTML = messages
})