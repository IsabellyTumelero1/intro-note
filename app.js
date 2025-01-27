console.log ("Hello NodeJS")
const fs = require("fs")
// fs.writeFileSync("arquivo.txt", "Hello NodeJS, again")
// fs.appendFileSync("arquivo.txt", "\nIntrodução ao NodeJS")
// fs.appendFileSync("arquivo.txt", "\nUsando uma biblioteca")

const sh = require("superheroes")

let nome = sh.random()
console.log(nome)
fs.appendFileSync("arquivo.txt", `\n${nome}`)