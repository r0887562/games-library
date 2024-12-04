const games = [];


const fetchGames = async () => {
    const response = await fetch("http://localhost:3000/games");
    const result = await response.json();
    games.push(...result);
}


const toString = (game1) => {
    return (`Name: ${game1.name} - Type: ${game1.type} - Rating: ${game1.rating} - Favourite: ${game1.isFavourite}`)
};


const deleteGame = async (id) => {
    const response = await fetch(`http://localhost:3000/games/${id}`, {method: "DELETE",
    headers:
        {Accept:"application/json",
        "Content-Type": "application/json",},
     });
    fetchAndRenderGames({});
}


const toggleFavourite = async (game) => {
    const response = await fetch(`http://localhost:3000/games/${game.id}/favourite`, {method: "POST",
    headers:
        {Accept:"application/json",
        "Content-Type": "application/json",},
     });
    fetchAndRenderGames({});
}



const renderGames = () => {
    const tableBody = document.querySelector("tbody");

    if (games.length == 0){
        hideTable("table");
        document.getElementById("status").innerHTML="";
        const p = document.createElement("p");
        p.innerHTML = "No games in library :(((((((("
        document.getElementById("status").appendChild(p);
    }
    

    games.forEach((game) => {
        const tableRow = createTableRow();
        tableBody.appendChild(tableRow);
        addTableCell({tableRow: tableRow, value: `${game.name}`})
        addTableCell({tableRow: tableRow, value: `${game.type}`})
        addTableCell({tableRow: tableRow, value: `${game.rating}`})

        const button = document.createElement("button");
        button.addEventListener('click', () => deleteGame(game.id));
        button.innerHTML = "delete"
        const cell = document.createElement("td");
        cell.appendChild(button);
        tableRow.appendChild(cell)

        tableRow.addEventListener('click', () => {
            document.querySelector("parStatus").innerHTML = "<p>" + toString(game) + "</p>"
        })
        tableRow.addEventListener('dblclick', () => toggleFavourite(game))
    });
}



// function fetchAndRenderGames() that fetches the games with the function fetchGames() and renders them like before






const fetchAndRenderGames = async () => {
    await fetchGames();
    renderGames();
}


const searchByFetchAndRender = async () => {
    if(games.length == 0){
        await fetchGames();
    }
    renderGames();
};


fetchAndRenderGames();


document.querySelector("h2").addEventListener("click", () => {
    // use Math.floor() and Math.random() to get a random number between 0 and 365 to create a random color and hsl(number, 100%, 50%) to define a color
    const randomColor = Math.floor(Math.random() * 365);
    document.querySelector("h2").style.color = `hsl(${randomColor}, 100%, 50%)`;
});

const status2 = document.getElementById("status")

status2.addEventListener('mouseover', () => {
    status2.setAttribute("class", "colorHover")
})
status2.addEventListener('mouseout', () => {
    status2.removeAttribute("class", "colorHover");
})



const button = document.createElement("button");
button.innerText = "show my favorite games";
document.querySelector("h2").appendChild(button);
button.addEventListener("click", () => {
    const table = document.querySelector("table");
    table.style.display = "none";
    let favoriteGames = games.filter((game) => game.isFavourite);
    console.log(favoriteGames);
    fetchAndRenderGames(favoriteGames);
}   
);




const button2 = document.createElement("button");
button2.innerText = "show all games";
document.querySelector("h2").appendChild(button2);
button2.addEventListener("click", () => {
    const table = document.querySelector("table");
    table.style.display = "";
    fetchAndRenderGames();    
}
);

// Create input field in overview-table.html. When the user fills out some number, only games with a rating higher than the input value are shown. The values are shown in real time, i.e. while typing.

const input = document.createElement("input");
input.setAttribute("type", "number");
input.setAttribute("placeholder", "Enter a number");
document.querySelector("h2").appendChild(input);
input.addEventListener("input", () => {
    const table = document.querySelector("tbody");
    const filteredGames = games.filter(((game) => game.rating > input.value));
    fetchAndRenderGames(filteredGames);   
}
);

const input2 = document.createElement("input");
input2.setAttribute("type", "text");
input2.setAttribute("placeholder", "Enter a string");
document.querySelector("h2").appendChild(input2);
const button3 = document.createElement("button");
button3.innerText = "fetch games";
document.querySelector("h2").appendChild(button3);
button3.addEventListener("click", () => {
    // get the value of the input field 
    const input2 = document.querySelector("input");
    const value = input2.value;
    // use the value to create a url like http://localhost:3000/games?query=chars
    const url = `http://localhost:3000/games?query=${value}`;
    // send the url to the server when you press the button
}
);




