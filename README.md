# hrsf116-movieList
React Framework Practice App for HR@G

https://gist.github.com/beth/3e7eb34ff1a46b674d40ece896c593c2

Movie List App
Use any framework you want to create a movie list app! The levels get increasingly difficult and some refactoring may be necessary. Wireframes accompany each level to give you a better idea of what that level should include.

Level 0
 Display a list of movies from hardcoded data.

You can use the following data:

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

Level 1
 Add a search bar so that a user may see if a movie is in the list.
 After a user submits the search, display all matches (or partial matches) to that title.
 Bonus: Handle the case of "no movie by that name found" gracefully.

Level 2
 Add an input field for users to add movies.
 Display only user added movies, not the hardcoded data.

Level 3
 Add a button to each list item that allows the user to toggle a 'watched' property.
 Add two buttons to allow the users to toggle between a list of 'watched' movies and movies 'to watch'.

 Level 4
 Add a panel of movie information that appears when the title is clicked (consider starting with hardcoded information)
 Refactor the watch toggle to be part of the movie information panel
 Get movie information from the The Movie Database API (https://www.themoviedb.org/documentation/api)

 You've reached the end of the front end levels! To proceed to the server levels, check out level 5!

If you don't want to start servers yet, but want to add more to your front end, here are some bonus ideas:

Other ideas (not pictured)
 Think about when it makes sense to request this information from the api - when the user clicks on the title? When the movie gets added? Refactor your code as necessary.
 Add a way for the user to add their own rating
 Add a sorting mechanism so the user can sort on rating or other properties
 Refactor search to allow users to search for movies with a specific director or actor/actress

Level 5
 Create a server that listens on port 3000 and responds to all requests with "Hello World"
 In your request handler, when a GET request is made to /api/movies, respond with a list of movies (just start with some made up list)
 Confirm, using postman, that your route works as expected and responds to all other requests with "Hello World"
 Refactor your front end to get the list of movie titles from the server, instead of using a hardcoded list of movie titles