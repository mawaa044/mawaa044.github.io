const body = document.body;

document.getElementById('menuButton').addEventListener('click', function () {
    const sideMenu = document.getElementById('sideMenu');

    if (sideMenu.style.left === '-250px') {
        sideMenu.style.left = '0';
        // om dark mode er av endres bilde
        if (!body.classList.contains('dark-mode')) {
            changeBackgroundImage('url(Asset3.png)');
        }
    } else {
        sideMenu.style.left = '-250px';
        // om dark mode er av bytter menyknappen tilbake til "Asset1"
        if (!body.classList.contains('dark-mode')) {
            changeBackgroundImage('url(Asset1.png)');
        }
    }
});

document.getElementById('darkModeButton').addEventListener('click', function () {
    body.classList.toggle('dark-mode');

    // Toggle dark mode lagres via localStorage
    if (localStorage.getItem("dark") === "off" || localStorage.getItem("dark") === null) {
        localStorage.setItem("dark", "on");
        changeBackgroundImage('url(Asset3.png)');
    } else {
        localStorage.setItem("dark", "off");
        // om menyen er åpen og dark mode ikke er aktivert bytter menyknappen tilbake til "Asset1" når menyen lukkes
        if (document.getElementById('sideMenu').style.left === '0' && !body.classList.contains('dark-mode')) {
            changeBackgroundImage('url(Asset1.png)');
        }
    }
});

// endrer bakgrunnsbilde
function changeBackgroundImage(imageUrl) {
    const knapp = document.querySelector('.knapp');
    knapp.style.backgroundImage = imageUrl;
}

// sjekker local storage for å opprettholde statusen til darkmode og meny knapp
if (localStorage.getItem("dark") === "on") {
    body.classList.toggle('dark-mode');
    changeBackgroundImage('url(Asset3.png)');
} else {
    changeBackgroundImage('url(Asset1.png)');
}