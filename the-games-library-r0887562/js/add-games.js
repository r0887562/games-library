const modelIsValid = async () =>{
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const rating = document.getElementById("rating").value;

    if(!(name && type && rating)){
        addStatusError("One or more fields are empty");
        return false;
    }
    if(rating < 0 || rating > 10){
        addStatusError("The rating is not valid");
        return false;
    }
    if(name.length > 64 || name.length < 2){
        addStatusError("The length of a name is invalid");
        return false;
    }
    if(!await nameIsUnique(name)){
        addStatusError("The name is not unique in the library");
        return false;
    }
    return true;
}

const addStatusError = (status) => {
    document.getElementById("comment").innerHTML="";
    const p = document.createElement("p");
    p.innerHTML = status
    document.getElementById("comment").appendChild(p);
}

const nameIsUnique = async (gameName) => {
    const g = await fetch(`http://localhost:3000/games/name/${gameName}`);
    const result = await g.json();
    return result?false:true;
}

let games =  [];
const fetchGames = async () => {
    const response = await fetch("http://localhost:3000/games");
    const result = await response.json();
    games.push(...result); 
};





const addGame = async () => {
    if(await modelIsValid()){
        const name = document.getElementById("name").value;
        const type = document.getElementById("type").value;
        const rating = document.getElementById("rating").value;
        
        
        const game = {name: name, type: type, rating: rating}
        await fetch("http://localhost:3000/games",
        {method: "POST",
        headers:
            {Accept:"application/json",
            "Content-Type": "application/json",},
        body: JSON.stringify(game), });
    
        document.getElementById("name").value = "";
        document.getElementById("type").value = "";
        document.getElementById("rating").value = "";
    
        alert("This game has been added to the library");
        addStatusError("")
    }
    
};



const buttonAdd = document.querySelector("button");
buttonAdd.addEventListener('click', () => addGame());