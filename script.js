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


// // Counter Program
// let number = 0;
// document.getElementById("decrement").onclick = function()
// {
//     number --
//     document.getElementById("number").textContent = number
// }

// document.getElementById("reset").onclick = function()
// {
//     number = 0
//     document.getElementById("number").textContent = number
// }

// document.getElementById("increment").onclick = function()
// {
//     number ++
//     document.getElementById("number").textContent = number
// }

/*
// Random Number generation
let max = 100
let min = 1
let Random = Math.floor(Math.random() * max) + min
console.log(Random)
*/

// Number guessng game

// let min = 1
// let max = 100
// let number = Math.floor(Math.random()*100) + 1
// let running = true
// let guess
// let attempts = 0
// document.getElementById("text").textContent = `Guess a number between ${min} - ${max}`
// document.getElementById("reset").onclick  = function()
// {
//     while(running)
//     {
//         guess = document.getElementById("textbox").value
//         guess = Number(guess)

//         if(guess == "NaN")
//         {
//             document.getElementById("text").textContent = "Enter valid input"
//             running = false
//         }

//         else if(guess < min || guess > max)
//         {
//             document.getElementById("text").textContent = "Enter valid input"
//             running = false
//         }


        
//     }
// }

let Fahrenheit = document.getElementById("Fahrenheit")
let Celcius = document.getElementById("Celcius")
let ans = document.getElementById("answer")
let text = document.getElementById("textbox")
let temp
function convert()
{
    if(Fahrenheit.checked)
    {
        temp = Number(text.value)
        temp = temp * (9/5) + 32
        ans.textContent = temp.toFixed(2)
    }
    else if(Celcius.checked)
    {
        temp = Number(text.value)
        temp = 5/9 * (temp - 32)
        ans.textContent = temp.toFixed(2)

    }
    else{
        ans.textContent = "Your Answer"
    }
}