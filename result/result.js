


var scoreBoard = document.getElementById("scoreSection");

var playAgaininButton = document.getElementById("newgamebutton")



  // Display the score on the page
  // var display = document.innerH("Your game score: " + retrievedScore);

  // document.getElementById("scorevalue") = localStorage.getItem("retrievedScore")
  // scoreBoard.innerHTML = retrievedScore;

  // function viewResult(){
  //   game.style.display = "none";
  //   results.play();
  //   result_box.classList.add("scorevalue");
    // text.innerText = "You've scored " + score + "retreivedScore";
  // }
// 
// window.onload = () =>{
//   let user = localStorage.getItem('nickname');
//   let score = localStorage.getItem('score');
//   document.getElementById("nick").innerText = user;
//   document.getElementById("score").innerText = score;
// }

 
  // var retrievedScore = localStorage.getItem("gameScore");
  // // // document.getElementById("scoreSection").innerText = "Your game score: " + retrievedScore;

  
  // document.write("Your game score: " + retrievedScore);

  
  
  document.addEventListener("DOMContentLoaded", function() {
    var retrievedScore = localStorage.getItem("gameScore");
  
  
    var scoreDiv = document.createElement("div");
  
   
    scoreDiv.textContent = "Your game score: " + retrievedScore;
  
    
    scoreDiv.style.fontSize = "2em";
    scoreDiv.style.color = "white";
    scoreDiv.style.marginTop = "270px";
  
    // Append the div to the document body or any other container element
    document.body.appendChild(scoreDiv);
  });
  


  // // Display the score on the page
  // document.createElementById("scoreValue").innerText = "Your game score: " + retrievedScore;


document.addEventListener("DOMContentLoaded", function() {
    var redirectButton = document.getElementById("homebutton");
    redirectButton.addEventListener("click", function() {
      window.location.href = "/index.html";
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var redirectButton = document.getElementById("newgamebutton");
    redirectButton.addEventListener("click", function() {
      window.location.href = "  /game/game.html";
    });
  });
  

  const openingAudio = new Audio("../assets/Mozart-Serenade-in-G-major(chosic.com).mp3");
  let isPlaying = true;

  document.addEventListener("DOMContentLoaded", function() {

  // Function to toggle play and pause
  function togglePlayPause() {
    if (isPlaying) {
      openingAudio.pause();
    } else {
      openingAudio.play();
    }

    isPlaying = !isPlaying;
  }


  // Add a click event listener to the image
  document.getElementById("playButton").addEventListener("click", togglePlayPause);

});
