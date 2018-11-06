// let은 변수 재할당 가능
// const는 변수 재할당이 불가능
// let은 선언 후 나중에 값을 할당 할 수 있지만
// const는 선언 즉시 값을 할당해야한다

// schema.graphql
//movie(id: Int!): Movie

//type Mutation{
//    addMovie(name: String!, score: Int!): Movie!
//    deleteMovie(id: Int!): Boolean!
//}

import fetch from "node-fetch";

const API_URL = 'https://yts.am/api/v2/list_movies.json?';

export const getMovies = (limit, rating) => {

let REQUEST_URL = API_URL;
if(limit > 0){
    REQUEST_URL += 'limit='+String(limit);
}
if(rating > 0){
    REQUEST_URL += 'minimum_rating='+String(rating);
}
    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);

};

// export let movies = [
//     {
//         id: 1,
//         name: "Avengers - The new one",
//         score: 8
//     },
//     {
//         id: 2,
//         name: "The Godfather I",
//         score: 99
//     },
//     {
//         id: 3,
//         name: "Logan",
//         score: 2
//     }
// ];

//   export const getMovies = () => movies;

//   export const getById = id => {
//       const filteredMovies = movies.filter(movie => movie.id === id);
//       return filteredMovies[0];
//   };

//   export const deleteMovie = id => {
//       const cleanedMovies = movies.filter(movie => movie.id !== id);
//       if (movies.length > cleanedMovies.length){
//           movies = cleanedMovies;
//           return true
//       }else { 
//           return false
//       }
//   };

//   export const addMovie = (name, score) => {
//       const newMovie = {
//           id: movies.length + 1,
//           name,
//           score
//       };
//       movies.push(newMovie);
//       return newMovie;
//   };