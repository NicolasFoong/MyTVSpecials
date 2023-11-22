"use strict"

//Fetches the movie data
function fetchingMovieData(){
    const API_Key = "d1a08fb2ece27e2499d31d0dfab1153d";
    const API_Access_Token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWEwOGZiMmVjZTI3ZTI0OTlkMzFkMGRmYWIxMTUzZCIsInN1YiI6IjY1NWUzMWM5MjY2Nzc4MDBjYTUzOTZkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.USthFar24ABZ-H_U1AkfnHsBWVzyJFh-ATY-TJ0cmgk";
    const EndpointURL = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_Access_Token}`
        }
    };
    

    fetch(EndpointURL, options)
    .then(response => response.json())      //*Responsde from the API
    .then(data => displayData(data))        //*The result data, Calling a separate function to display the data
    .catch(err => console.error(err));;
}

//Displaying the movie data
function displayData(data){
    const movies = data.results;       //*Storing movie data result in a variable for clean coding
    console.log(movies);
    console.log(movies[0].title);     //*Extracting the title of the first movie
 // !------------------------------------------------------------------------------------------
//     movies.forEach((movies) => {      //*Displaying all movie titles
//         console.log(movies.title)
//     })
// or
// movies.map(movie => console.log(movie.title)); //* This will display a list of all movie titles
 // !------------------------------------------------------------------------------------------
// Get a reference to the "myText" div element
const myTextDiv = document.getElementById("myText");

// Iterate over the movies array and update the content of the div
movies.forEach((movie) => {
    // Use a template literal to create the paragraph element with movie title
    const paragraph = document.createElement("p");
    paragraph.textContent = `Movie Title: ${movie.title}`;

    // Append the paragraph element to the "myText" div
    myTextDiv.appendChild(paragraph);
});
}



fetchingMovieData();