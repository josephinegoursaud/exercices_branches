const counterbutton = document.getElementById('counter')

 let compteur = 0;
counterbutton.addEventListener("click",() => {
   
compteur = compteur + 1;

       document.getElementById("counter").textContent = compteur
})


//On récupère le bouton HTML avec l’ID "counter".
//On le stocke dans la variable counterbutton.

//On crée une variable compteur et on lui donne la valeur initiale 0.
//
//À chaque clic, on augmente la valeur de compteur de 1.


