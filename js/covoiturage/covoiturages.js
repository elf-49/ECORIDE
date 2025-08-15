
//alert("copilot js stockage des données du form dans localstorage");


document.getElementById("covoituragesForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs du formulaire
    const villeDepart = document.getElementById("VilleDepartInput").value;
    const villeArrivee = document.getElementById("VilleDarriveeInput").value;
    const dateDepart = document.getElementById("DateDepartInput").value;
    const heureDepart = document.getElementById("TimeDepartInput").value;
    const nombrePassagers = document.getElementById("NombreDePassagersInput").value;
    const fumeur = document.querySelector('input[name="FumeurOuNon"]:checked')?.nextElementSibling.textContent.trim() || "Non précisé";
    const animal = document.querySelector('input[name="AnimalOuNon"]:checked')?.nextElementSibling.textContent.trim() || "Non précisé";

    //test du formulaire complet
    if (!villeDepart || !villeArrivee || !dateDepart || !heureDepart || !nombrePassagers || !fumeur || !animal) {
    alert("Veuillez remplir tout le formulaire svp");
    return;
  }
    
    // Création de l'objet covoiturage
    const covoiturage = {
        villeDepart,
        villeArrivee,
        dateDepart,
        heureDepart,
        nombrePassagers,
        fumeur,
        animal,
        prix: 25 // Prix fixe pour l'exemple
    };



    // Stockage dans le localStorage
    localStorage.setItem("covoiturage", JSON.stringify(covoiturage));
    // Affichage de la carte
    afficherCartes();
});


function afficherCartes() {
    const container = document.getElementById("ride-container");
    container.innerHTML = ""; // Nettoyer l'affichage précédent

    const ride = JSON.parse(localStorage.getItem("covoiturage"));
    if (!ride) return;

    const dateObj = new Date(ride.dateDepart);
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const dateFormatted = dateObj.toLocaleDateString('fr-FR', options);

    const cardHTML = `
    <div class="ride-card">
        <div class="ride-left">
            <img src="/images/avatar conductrice 1.jpg" alt="Avatar" class="avatar">
            <div class="ride-info">
                <h3>🚗 ${ride.villeDepart} → ${ride.villeArrivee}</h3>
                <p>📅 ${dateFormatted} • ${ride.heureDepart}</p>
                <p>💶 ${ride.prix} € par passager</p>
            </div>
        </div>
        <div class="ride-right">
            <p>👤 ${ride.nombrePassagers} passager(s)</p>
            <p>${ride.fumeur === "Fumeur" ? "🚬 Fumeur" : "🚭 Non fumeur"}</p>
            <p>${ride.animal === "Animal accepté" ? "🐾 Animal accepté" : "🚫🐾 Pas d'animal"}</p>
            <button class="btn-reserve">Réserver</button>
        </div>
    </div>
    `;
    container.innerHTML = cardHTML;
}

// Appel initial au chargement de la page
window.onload = afficherCartes;


