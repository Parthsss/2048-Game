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
