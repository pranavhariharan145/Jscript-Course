/*
let text;
text = "Ghost"
let age = 20
document.getElementById("pa").textContent = "I like burger"

let uname  = prompt("What is your username: ")
document.getElementById("main").textContent = `your name is ${uname}`
*/
let username;
// Select the button first
document.getElementById("submit").onclick = function() {
    username = document.getElementById("text").value
    console.log(username)
    document.getElementById("change").textContent = `Hello ${username}`
}

