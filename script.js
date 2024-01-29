const body = document.body;

document.getElementById('menuButton').addEventListener('click', function() {
    const sideMenu = document.getElementById('sideMenu');
    
    // når du trykker på meny knappen går menyen til venstre
    if (sideMenu.style.left === '-250px') {
        sideMenu.style.left = '0';
    } else {
        sideMenu.style.left = '-250px';
      }
    });


    document.getElementById('darkModeButton').addEventListener('click', function() {
         
  // Toggle dark mode lagres via localstorage
    body.classList.toggle('dark-mode');
    if(localStorage.getItem("dark") == "off" || null){
        localStorage.setItem("dark","on")
    }
    else{
        localStorage.setItem("dark","off")
    }
});
console.log(localStorage.getItem("dark"))
if(localStorage.getItem("dark") == "on"){
    body.classList.toggle('dark-mode');
}
