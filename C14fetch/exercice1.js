// const promise = fetch('https://codepassport.dev/api/data'); 
// console.log(promise);

async function fetchdata() {
    const response = await fetch("https://www.codepassport.dev/api/offers")
    const data = await response.json()

    const titleetdescription = document.getElementById("titleetdescription")

    for (let i = 0; i < data.length; i++) {
  
        const title = document.createElement('h2');
    titleetdescription.appendChild(title);
  title.innerHTML = data[i].titre;

  const paragraphe = document.createElement('p');
  titleetdescription.appendChild(paragraphe);
  paragraphe.innerHTML = data[i].description;
}
    //console.log(data)
}
fetchdata()
//    const title= document.createElement('h2');
//    titleetdescription.appendChild(title)
//     title.innerHTML=data[i].titre

// const paragraphe=document.createElement('p')
// titleetdescription.appendChild(paragraphe)
// title.innerHTML=data[i].paragraphe
  

// for (let i = 0; i < data.length; i++) {
//   const title = document.createElement('h2');
//     titleetdescription.appendChild(title);
//   title.innerHTML = data[i].titre;

//   const paragraphe = document.createElement('p');
//   titleetdescription.appendChild(paragraphe);
//   paragraphe.innerHTML = data[i].paragraphe;


  
// }
