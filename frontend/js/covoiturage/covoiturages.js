
//alert("stockage des données du form dans localstorage et affichage dynamique d'une carte de covoiturage");

document.getElementById("covoituragesForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Récupération des champs
  const villeDepart = document.getElementById("VilleDepartInput").value.trim();
  const villeArrivee = document.getElementById("VilleDarriveeInput").value.trim();
  const dateDepart = document.getElementById("DateDepartInput").value;
  const heureDepart = document.getElementById("TimeDepartInput").value;
  const nombrePassagers = document.getElementById("NombreDePassagersInput").value;

  const fumeur = document.querySelector('input[name="FumeurOuNon"]:checked');
  const animal = document.querySelector('input[name="AnimalOuNon"]:checked');

  // Vérification des champs obligatoires
  if (
    villeDepart === "" ||
    villeArrivee === "" ||
    dateDepart === "" ||
    heureDepart === "" ||
    nombrePassagers === "" ||
    !fumeur ||
    !animal
  ) {
    alert("Veuillez remplir tous les champs du formulaire.");
    return;
  }

  // Stockage des données
  const covoiturageData = {
    villeDepart,
    villeArrivee,
    dateDepart,
    heureDepart,
    nombrePassagers,
    fumeur: fumeur.nextElementSibling.textContent,
    animal: animal.nextElementSibling.textContent
  };

  localStorage.setItem("covoiturage", JSON.stringify(covoiturageData));

  // Création dynamique de la carte
  const dateObj = new Date(dateDepart);
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const dateFormat = dateObj.toLocaleDateString('fr-FR', options);

  const card = document.createElement("div");
  card.className = "ride-card p-3 mb-3 border rounded shadow-sm";

  card.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h4>🚗 ${villeDepart} → ${villeArrivee}</h4>
        <p>📅 ${dateFormat} à ${heureDepart}</p>
        <p>👤 ${nombrePassagers} passager${nombrePassagers > 1 ? 's' : ''}</p>
        <p>🚭 ${covoiturageData.fumeur}</p>
        <p>🐾 ${covoiturageData.animal}</p>
      </div>
      <div>
        <button class="btn btn-primary">Chercher</button>
      </div>
    </div>
  `;

  document.getElementById("ride-container").innerHTML = ""; // Nettoyer les anciennes cartes
  document.getElementById("ride-container").appendChild(card);

//bouton reserver
  card.querySelector("button").addEventListener("click", function () {
    //alert("Réserver ce covoiturage");
    window.location.replace("/liste_des_covoiturages");
  });

});
