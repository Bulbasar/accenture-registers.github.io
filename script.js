// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Set a timeout of 10 seconds (10000 milliseconds)
    const timeoutDuration = 10000;
    
    // Function to show the content and hide the loading animation
    function showContent() {
      const loadingAnimation = document.getElementById("loadingAnimation");
      const content = document.getElementById("content");
      loadingAnimation.style.display = "none";
      content.style.display = "block";
    }
    
    // Wait for the timeout duration and then show the content
    setTimeout(showContent, timeoutDuration);
  });
  