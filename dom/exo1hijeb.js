const redbutton = document.getElementById('rouge')
const greenbutton = document.getElementById('vert')
const bluebutton = document.getElementById('bleu')

const carre = document.querySelector("#carre")
redbutton.addEventListener("click",() => {

    carre.style.backgroundColor= "red"
})


greenbutton.addEventListener("click",() => {

    carre.style.backgroundColor= "green"
})


bluebutton.addEventListener("click",() => {

    carre.style.backgroundColor= "blue"
})
console.log(redbutton)