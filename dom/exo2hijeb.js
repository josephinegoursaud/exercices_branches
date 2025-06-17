const ajouterbutton = document.getElementById('ajouter')
const enleverbutton = document.getElementById('enlever')
const resetbutton = document.getElementById('reset')
const variableAfficher = document.querySelector("p");

let compteur = 0;
compteur = compteur ++

ajouterbutton.addEventListener("click",() => {
compteur = compteur +1
        variableAfficher.innerText = compteur
})


enleverbutton.addEventListener("click",() => {
    compteur = compteur -1
            variableAfficher.innerText = compteur
})


resetbutton.addEventListener("click",() => {

    compteur = 0

            variableAfficher.innerText = compteur
})


