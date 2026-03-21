function insertNavigation() {
    return `
   <div class="navbar">
   <div class="dropdown">
       <button class="logo"> A Muslim's Notes </button>
        <div class="logocontent">
       <a href="#">Qurandiscs</a>
      <a href="#">Friedegg796</a>
      <a href="#">A Muslim's Blog</a>
      </div>
     </div>

     <div class="dropdown">
      <a class="topbtn" href="#"> AP </a>
       <div class="dropcontent">
       <a href="#">Biology</a>
      <a href="#">Eng comp</a>
      <a href="#">Precalc</a>
      </div>
      </div>

        <div class="dropdown">
       <a class="topbtn" href="#"> Linux </a>
        <div class="dropcontent">
       <a href="#">Commands</a>
      <a href="#">Features</a>
      <a href="#">Apps</a>
      </div>
      </div>

        <div class="dropdown">
       <a class="topbtn" href="#"> Other </a>
        <div class="dropcontent">
       <a href="#">Qurandiscs</a>
      <a href="#">Friedegg796</a>
      <a href="#">A Muslim's Blog</a>
      </div>
      </div>


      </div>
  `;

} // Remember, we use backticks--` `-- to allow for the usage of quotes.

// Wait for the HTML to be loaded so it doesn't go boom
document.addEventListener("DOMContentLoaded", function() {
    var navElement = document.getElementById("nav");

    // Only run if the 'nav' ID exists on this specific page
    if (navElement) {
        navElement.innerHTML = insertNavigation();
    }
    // If you wanna use it, make a nav element with the id="nav"
});
