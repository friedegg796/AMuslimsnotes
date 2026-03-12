// Function starts here
function insertFooter() {
  return `  <div class="medspace"> </div>
        <hr>
        <p> Wanted to go <a href="./../../AMuslimsnotes/index.html">back?</a></p>
        <a class="icon" href="https://www.linkedin.com/in/hasnain-a-6481a0342/">
            <img class="icon" src="./develop/images/linkedin.png" alt="Hasnain Alahi, Linkedin">
        </a>


        <a class="icon" href="./../../AMuslimsnotes/MISC/discord.html">
            <img class="icon" src="./develop/images/gmail.png" alt="awanderingmuslim2billion">
        </a>


        <a class="icon" href="mailto:hasnainalahiwork@gmail.com">
            <img class="icon" src="./develop/images/gmail.png" alt="hasnainalahiwork@gmail.com">
        </a>


        <a class="icon" href="https://mahfil.net/channel/hasnain-alahi">
            <img class="icon" src="./develop/images/gmail.png" alt="AwanderingMuslim">
        </a>
        <a class="icon" href="https://github.com/friedegg796">
            <img class="icon" src="./develop/images/github.png" alt="friedegg796">
        </a>
        <a class="icon" href="https://github.com/friedegg796">
            <img class="icon" src="./develop/images/youtube.png" alt="friedegg796">
        </a>`;
} // we use backticks--` `-- to allow for the usage of quotes.

// Wait for the HTML to be loaded so it doesn't go boom
document.addEventListener("DOMContentLoaded", function() {
  var footerElement = document.getElementById("footer");

  // Only run if the 'footer' ID exists on this specific page
  if (footerElement) {
    footerElement.innerHTML = insertFooter();
  }
  // If you wanna use it, make a footer element with the id="footer"
});

