import recipes from "./recipes.mjs";
function main(){
    const Recipe = getRandomListEntry(recipes);
    const Recipes = `
        <img src=${Recipe.image} alt=${Recipe.name}>
        <div>

            <div id = tags>${Tags(Recipe.tags)}</div>

            <p id = name>${Recipe.name}</p>
            

            ${ratingTemplate(Recipe.rating)}

            <p id = des>${Recipe.description}</p>
            
        </div>
        `;
        
    document.getElementById("recipe").innerHTML = Recipes;

}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
    for (let i = 1; i < 6; i++){
        if (i < rating){
            html += `
                <span aria-hidden="true" class="icon-star">⭐</span>
`
        }
        else{
            html += `
                <span aria-hidden="true" class="icon-star-empty">☆</span>
`
        }
    }
	html += 
    `</span>`
	// return the html string
	return html
}

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

function Tags(tags){
    const Html_tags = tags.map(element => `<p>${element}</p>`)
    return Html_tags.join('');
}

main()