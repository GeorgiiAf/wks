function main() {
    const numberOfMovies = parseInt(prompt("How many movies would you like to rate?"));
    const movies = [];

    for (let i = 0; i < numberOfMovies; i++) {
        const title = prompt(`Enter the title of movie #${i + 1}:`);
        let rating = parseInt(prompt(`Enter the rating for "${title}" (1 to 5):`));

        while (isNaN(rating) || rating < 1 || rating > 5) {
            alert("Please enter a valid rating between 1 and 5.");
            rating = parseInt(prompt(`Enter the rating for "${title}" (1 to 5):`));
        }

        movies.push({
            title: title,
            rating: rating
        });
    }

    movies.sort((a, b) => b.rating - a.rating);

    displayMovies(movies);

    const highestRatedMovie = movies[0];
    displayHighestRatedMovie(highestRatedMovie);
}

function displayMovies(movies) {
    const movieList = document.getElementById("movieList");
    let movieListHTML = "<h2>Sorted Movies:</h2><ul>";

    for (let i = 0; i < movies.length; i++) {

        movieListHTML += `<li>${movies[i].title} - Rating: ${movies[i].rating}</li>`;
    }

    movieListHTML += "</ul>";

    movieList.innerHTML = movieListHTML;
}


function displayHighestRatedMovie(movie) {
    const highestRated = document.getElementById("highestRatedMovie");
    highestRated.innerHTML = `<h2>Highest Rated Movie:</h2><p>${movie.title} with a rating of ${movie.rating}</p>`;
}

main();
