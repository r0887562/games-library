const game1 = { name: "Elden Ring", type: "a fanatsy game", rating: 4 , favorite: false };
const game2 = { name: "Horizon Forbidden West", type: "an adventure game", rating: 3.5, favorite: false };
const game3 = { name: "Pokemon Legends: Arceus", type: "a RPG game", rating: 3, favorite: true };
const game4 = { name: "GTA V", type: "Open World", rating: 5, favorite: true };
const game5 = { name: "Gran Turismo", type: "Car", rating: 6, favorite: true };
const game6 = { name: "Fifa 23", type: "Football", rating: 7, favorite: false };
const game7 = { name: "AO Tennis 2", type: "Tennis", rating: 2, favorite: true };

const games = [game6, game7,game1, game2, game3, game4, game5 ];
const [first, second] = games;

console.log(first);
console.log(second);

const friendgame1 = { name: "Minecraft", type: "Open World", rating: 5 , favorite: false };
const friendgame2 = { name: "Tetris", type: "Puzzle", rating: 5, favorite: false };

const friendgames = [friendgame1, friendgame2];

// get games array and friendgames array and return a new array with all games
const getAllGames = (games, friendgames) => {
    return [...games, ...friendgames];
}

// function printAllGames
const printAllGames = (games) => {
    games.map(toString).forEach(addStatus)
};

// function toFixed
const toFixed = (number) => {
    return number.toFixed(1);
}



// function toString
const toString = (game) => {
    return `name: ${game.name}, type: ${game.type}, rating: ${game.rating}, favorite: ${game.favorite}`;
}

// function getAverageRating
const getAverageRating = () => {
    let result = 0;
    games.forEach((game) => {
        result += game.rating;
    });
    return toFixed(result / games.length);
};

// function getHighestRating using for loop
const getHighestRating = () => {
    let result = 0;
    games.forEach((game) => {
        if (game.rating > result) {
            result = game.rating;
        }
    });
    return result;
}

// function isFavorite
const isFavorite = (game) => {
    return game.favorite;
}

// function printFavoriteGames using isFavorite
const printFavoriteGames = () => {
    games.filter(isFavorite).forEach((game) => addStatus(toString(game)));
};

// function 
const printGamesRatingAbove = (games, rating) => {
    games.filter((game) => game.rating > rating).forEach((game) => addStatus(toString(game)));
}

const filterAndPrintGames = (games, customFilter) => {
    games.filter(customFilter).forEach((game) => addStatus(toString(game)));
}





printAllGames(games);
addStatus("SOME STATISTICS ...");
addStatus(`Average rating: ${getAverageRating()}`);
addStatus(`${game6.name} is game with highest rating: ${getHighestRating()}`);
addStatus("FAVORITE GAMES ...");
printFavoriteGames();
addStatus("MY FRIST 2 GAMES ARE:")
addStatus(first.name);
addStatus(second.name);
addStatus("MY BEST FRIENDS GAMES ARE:")
printAllGames(friendgames);
addStatus("All THE GAMES IN OUR LIBRARY:");
printAllGames(getAllGames(games, friendgames));
addStatus("THESE ARE ALL GAMES WITH RATING ABOVE 3")
printGamesRatingAbove(games, 3);
addStatus("THESE ARE ALL THE GAMES IN THE LIBRARY")
filterAndPrintGames(getAllGames(games, friendgames), (game => game.favorite === true))
addStatus("THESE GAMES HAVE TYPE OPEN WORLD")
filterAndPrintGames(getAllGames(games, friendgames), (game => game.type === "Open World"))