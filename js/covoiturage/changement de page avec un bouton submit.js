

document.getElementById("id du formulaire").addEventListener("submit", fonction);

fonction() {
//Redirection vers la page associée à "/visualiser"
//dans le router
    window.location.href = "/visualiser";
}

//la meme avec une fonction fléchée
document.getElementById("id du formulaire").addEventListener("submit", () => {
    window.location.href = "/visualiser";
});

