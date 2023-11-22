'use strict';

// Fetches the movie data
function fetchingMovieData() {
  // ... (unchanged)
}

// Displaying the movie data
function displayData(data) {
  const movies = data.results;
  const myTextDiv = document.getElementById("myText");

  // Iterate over the movies array and create a Bootstrap card for each movie
  movies.forEach((movie) => {
    // Create the card element
    const card = document.createElement("div");
    card.className = "card";
    card.style = "width: 18rem; margin-bottom: 20px;"; // Optional: Add some styling

    // Create the card image element using the movie poster path from TMDb
    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`; // Use the movie poster path
    img.className = "card-img-top";
    img.alt = "Movie Poster"; // Add alt text for accessibility

    // Create the card body element
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // Create the card title element
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = movie.title;

    // Create the card text element (you can replace this with the movie's actual overview or description)
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";

    // Create the button element
    const btn = document.createElement("a");
    btn.href = "#"; // Add the actual link or action
    btn.className = "btn btn-primary";
    btn.textContent = "Go somewhere";

    // Append elements to build the card structure
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(btn);

    card.appendChild(img);
    card.appendChild(cardBody);

    // Append the card to the myTextDiv
    myTextDiv.appendChild(card);
  });
}

// Run the script after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  fetchingMovieData();
});
