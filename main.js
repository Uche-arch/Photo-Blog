// Wait for the page content to load
window.addEventListener("load", function () {
  // Add the 'hidden' class to the body so it fades in after the animation
  document.body.classList.add("hidden");

  // Wait for the loading screen animation to finish
  setTimeout(function () {
    // Fade out the loading screen
    document.getElementById("loading-screen").classList.add("fade-out");

    // After 1 second (fade-out time), remove the loading screen
    setTimeout(function () {
      document.getElementById("loading-screen").style.display = "none";
      document.body.classList.remove("hidden"); // Reveal main content
    }, 1000);
  }, 3000); // You can adjust the timing here (3 seconds for loading screen)
});
