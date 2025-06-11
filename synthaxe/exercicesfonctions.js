// Écrire une fonction qui prend en paramètre
// un moment de la journée (soit "matin", "midi", "après-midi", "soir")
// "matin" -> Écrire une fonction qui prend en paramètre
// un moment de la journée (soit "matin", "midi", "après-midi", "soir")
// "matin" -> "J'ai trop hâte de continuer de coder !"
// "midi" -> "J'ai faim, j'en ai marre des bugs..."
// "après-midi" -> "Tchao les copins"
// "soir" -> "ZzzzZZZzzz"


function printemotions(momentoftheday){
    //console.log(`le moment est ${momentoftheday}`);

    //if(momentoftheday === "matin")
        //console.log("J'ai trop hâte de continuer de coder !")

     //if (momentoftheday === "midi")
        //console.log("J'ai faim, j'en ai marre des bugs...")

     //if (momentoftheday === "après-midi")
       // console.log("Tchao les copins")

     //else if (momentoftheday === "soir")
       // console.log("ZzzzZZZzzz")
} 

// console.log("J'ai trop hâte de continuer de coder !")
// console.log("J'ai faim, j'en ai marre des bugs...")
// console.log("Tchao les copins")
// console.log("ZzzzZZZzzz")

printemotions("matin")
printemotions("midi")
printemotions("après-midi")
printemotions("soir")


// Écrire une fonction qui prend en paramètre une heure (ex: 9, 12, 18, etc.)
// et qui RETOURNE le moment correspondant
// getMomentFromHour(12) -> "midi"
// getMomentFromHour(18) -> "après-midi"

//function getMomentFromHour(hour){ 
  // if(hour === 12)
//     return "midi"
//  if(hour === 18)
//     return "après-midi" 


//console.log(getMomentFromHour(12))
//console.log(getMomentFromHour(18))

function getMomentFromHour(hour) {
    if(hour <= 12){
        return "morning"
}
if(hour >= 12){
  return "afternoon"
}
  return "afternoon"   
}
console.log(getMomentFromHour(6))