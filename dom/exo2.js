
const horoscope = [
  {
    sign: 'Bélier',
    description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
  },
  {
    sign: 'Taureau',
    description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
  },
  {
    sign: 'Gémeaux',
    description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
  },
  {
    sign: 'Cancer',
    description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
  }
];


const conteneur = document.getElementById('horoscope') 
//Cette ligne commence une boucle for...of qui va parcourir chaque élément du tableau horoscope.
//À chaque itération, la variable item représente un objet individuel dans ce tableau.

for (const item of horoscope) { ////Cette ligne commence une boucle for...of qui va parcourir chaque élément du tableau horoscope.
//À chaque itération, la variable item représente un objet individuel dans ce tableau.
	const article = document.createElement('article');
	//Cette ligne crée un nouvel élément HTML <article> en mémoire, mais il n’est pas encore visible sur la page.
    //L’élément article servira de conteneur pour afficher un signe astrologique et sa description

	const h2 = document.createElement('h2'); //On crée un élément <h2> (titre de niveau 2).
//On lui donne comme contenu le texte contenu dans item.sign (par exemple "Bélier", "Taureau", etc.).
//textContent permet d’ajouter un texte simple dans cet élément

	h2.textContent = item.sign;
	
	const p = document.createElement('p');
    //On crée un élément <p> (paragraphe).

	p.textContent = item.description;
	
	article.appendChild(h2);
	article.appendChild(p);
    //On insère le <h2> et le <p> créés à l’intérieur de l’élément <article>.
//appendChild signifie "ajouter comme enfant", donc le <h2> et le <p> deviennent des parties du <article>.
	
	document.body.appendChild(article);
}
//On ajoute finalement l’élément <article> (contenant le titre et la description) dans le corps de la page HTML (document.body).
//Cela rend visible le contenu sur la page.
//Le commentaire suggère que tu pourrais aussi choisir un autre conteneur spécifique dans la page, plutôt que le corps.





