document.addEventListener("DOMContentLoaded", (e) => {
  
 document.getElementById("title").innerHTML = movies.Titanic.title;
 document.getElementById("director").innerHTML = movies.Titanic.director;
 document.getElementById("genre").innerHTML = movies.Titanic.genre;
 document.getElementById("filmRating").innerHTML = movies.Titanic.filmRating;
 document.getElementById("poster").setAttribute("src", movies.Titanic.poster);
 document.getElementById("audienceScore").innerHTML = movies.Titanic.audienceScore;
 document.getElementById("description").innerHTML = movies.Titanic.description;
 

 
 
 for (let i = 0; i < movies.Titanic.cast.length; i++) {
   for (key in movies.Titanic.cast[i]) {
     console.log(movies.Titanic.cast[i][key])
   }} 


 for (let i = 0; i < movies.Titanic.cast.length; i++) {
     let JSONrole = movies.Titanic.cast[i]["role"];
     let JSONactor = movies.Titanic.cast[i]["actor"];
     let output = JSONrole + ": " + JSONactor + "<br>";
     document.getElementById("cast").innerHTML += output;
   } 


 for (let i = 0; i < movies.Titanic.cast.length; i++) {
     let JSONrole = movies.Titanic.cast[i]["role"];
     let JSONactor = movies.Titanic.cast[i]["actor"];
     let output = JSONrole + ": " + JSONactor + "<br>";
     document.getElementById("cast").innerHTML += output;
   }



 
 })
 
 
 const titanic = document.getElementById("Titanic");
 titanic.addEventListener("click", (e) => {
    alert("Titanic!");
 
 })
 
 const terminator = document.getElementById("Terminator 2");
 terminator.addEventListener("click", (e) => {
    alert("Terminator!")
 
 })



