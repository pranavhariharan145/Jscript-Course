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

// let Fahrenheit = document.getElementById("Fahrenheit")
// let Celcius = document.getElementById("Celcius")
// let ans = document.getElementById("answer")
// let text = document.getElementById("textbox")
// let temp
// function convert()
// {
//     if(Fahrenheit.checked)
//     {
//         temp = Number(text.value)
//         temp = temp * (9/5) + 32
//         ans.textContent = temp.toFixed(2)
//     }
//     else if(Celcius.checked)
//     {
//         temp = Number(text.value)
//         temp = 5/9 * (temp - 32)
//         ans.textContent = temp.toFixed(2)

//     }
//     else{
//         ans.textContent = "Your Answer"
//     }
// }


// For Each meathod
// iterate thro elements and apply specific function

// let numbers = [1,2,3,4,5]
// numbers.forEach(display)

// function display(element)
// {
//     console.log(element*2)
// }

// function double(e)
// {
   
// }
// numbers.forEach(double)

// .map function
// it accepts the callback and apply to the function in bracket it is same
// as for each but it returns an array but for each doesnt
// let numbers = [1,2,3,4,5]
// let ans = numbers.map(square)
// function square(n)
// {
//     return Math.pow(n, 2)
// }
// console.log(ans)

// Uppercase 

// let name = ["Spongebob", "Patrick", "Squiward", "Sandy"]
// let val = name.map(ucase)
// console.log(val)
// function ucase(names)
// {
//     return names.toUpperCase()
// }

// Filter
// let ages = [16,17,18,18,19,20,60]
// let ans = ages.filter(isadult)
// console.log(ans)

// function isadult(num)
// {
//     return num > 18
// }

// simple arrow function

// let hello = (name, age ) => {
//     console.log(`Hello ${name}`)
//     console.log(`You are ${age} old`)
// }
// hello("pranav", 20)

// let num = [1,2,3,4,5]
// let squares = num.map((element) => Math.pow(element, 2))
// console.log(squares)