async function movie() {
    const response = await fetch("https://the-one-api.dev/v2/movie",{
    headers: {Authorization: "Bearer GVeTGNvHZopfMwTwXkwl"}})
    const data = await response.json()
    console.log(data)
       const films = document.getElementById("films")

  for (let i = 0; i < data.docs.length; i++) {
        const film = data.docs[i];
     
const title = document.createElement('h2');
  title.innerHTML = film.name
  films.appendChild(title);

  const budget = document.createElement('p');
  budget.innerHTML = `Budget : ${film.budgetInMillions} millions $`
  films.appendChild(budget);
}

  
   }

movie()