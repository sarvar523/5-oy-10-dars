// Created by user on 8/1/2025, 10:27:09 PM
// Last modified by user on 8/4/2025, 2:31:42 PM


let a = prompt("Ismingizni kiriting:");
let b = prompt("orqa fonga rang");
let c= prompt("text rangi");
let h1 = document.createElement('h1')

let body = document.querySelector('body')
body.appendChild(h1)
body.style.backgroundColor=b
h1.style.color=c

h1.textContent=a