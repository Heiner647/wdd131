import recipes from "./recipes.mjs";
function main(list){
    const Recipe = getRandomListEntry(recipes);
    const ResHtml = list.map(Recipe_Temp)
       
    document.getElementById("recipe").innerHTML = Recipes;

}



function Recipe_Temp(Recipe) {
    const R = `
    <div id = "recipe">
        <img src=${Recipe.image} alt=${Recipe.name}>
        <div>

            <div id = tags>${Tags(Recipe.tags)}</div>

            <p id = name>${Recipe.name}</p>
            

            ${ratingTemplate(Recipe.rating)}

            <p id = des>${Recipe.description}</p>
            
        </div>
    </div>`
        return R
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

function Button {
    
}
main()