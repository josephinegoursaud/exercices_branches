//PARTIE 1
let nombre = 4
 function carre(nombre){

 return nombre * nombre;
  }
 //console.log(carre(nombre))

//PARTIE 2
let resultat = carre(nombre)
function multiplierpar10(resultat){
    return resultat * 10 
}
//console.log(multiplierpar10(resultat))

//PARTIE 3

 let fenetre = prompt("ecris un nombre ")
 let utilisateur = Number(fenetre)
 let resultusercarre = carre(utilisateur)
 let resultusermultiplication = multiplierpar10(resultusercarre)

 
 console.log(resultusercarre )
 console.log(resultusermultiplication)
