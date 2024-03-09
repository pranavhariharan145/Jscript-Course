/*
let text;
text = "Ghost"
let age = 20
document.getElementById("pa").textContent = "I like burger"

let uname  = prompt("What is your username: ")
document.getElementById("main").textContent = `your name is ${uname}`
*/
// let username;
// // Select the button first
// document.getElementById("submit").onclick = function() {
//     username = document.getElementById("text").value
//     console.log(username)
//     document.getElementById("change").textContent = `Hello ${username}`
// }


// document.getElementById("submit").onclick = function()
// {
//     radius = Number(document.getElementById("text").value)
//     let cfer = 2*Math.PI*radius
//     document.getElementById("ans").textContent = `Circumference is ${cfer}`
// }

// Counter Program
let number = 0;

document.getElementById("decrement").onclick = function()
{
    number --
    document.getElementById("number").textContent = number
}

document.getElementById("reset").onclick = function()
{
    number = 0
    document.getElementById("number").textContent = number
}

document.getElementById("increment").onclick = function()
{
    number ++
    document.getElementById("number").textContent = number
}

