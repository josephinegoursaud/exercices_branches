const pageTitle = document.querySelector('h1')
console.log(pageTitle)
const subscribebutton = document.querySelector("#newsletter")


let userhasclicked = false
subscribebutton.addEventListener('click', () => {
    if (userhasclicked){

 userhasclicked = false
 subscribebutton.innerText = "subscribe"

    }
    else {
        userhasclicked = true
      subscribebutton.innerText = "unsubscribe"  


}

})

    

    

//subscribebutton.innertext = "unsubscribe"
