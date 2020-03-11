fetch("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/")
    .then(resp => resp.json())
    .then(handleAPI);

function handleAPI(response) {
    console.log(response);
    var rootElement = document.getElementById("root") 
    rootElement.innerHTML = App(response);
}     

function RecipesItem(props) {
    return `
        <div>
            <h2>${props.title}</h2>
            <img src="${props.thumbnail}" alt="${props.title}" />
            <p>Ingredients: ${props.ingredients}</p>
        </div>
    `;             
}

function RecipesListItem(props) {
    return `
        <li class="recipeslist__item">
            ${
                props.map(function(recipesItem) {
                    return RecipesItem(recipesItem);
                })
                .join("")
            }
        </li>
    `;
}

function RecipesList(props) {
    return `
        <ul class="recipeslist">
            ${RecipesListItem(props)}
        </ul>
    `;
}

function App(props) {
    return `
        <header class="mainheader">
            <h1 class="pagetitle">${props.title}</h1>
        </header>
        <main>
            ${RecipesList(props.results)}
        </main> 
    `;
}