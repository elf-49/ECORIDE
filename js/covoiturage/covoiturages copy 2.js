
alert("copilot js stockage des données du form dans localstorage");


document.getElementById("covoituragesForm").addEventListener("submit", function (e) {
  e.preventDefault();

  //récupération des champs du formulaire
  const villeDepart = document.getElementById("VilleDepartInput").value;
  const villeArrivee = document.getElementById("VilleDarriveeInput").value;
  const dateDepart = document.getElementById("DateDepartInput").value;
  const heureDepart = document.getElementById("TimeDepartInput").value;
  const nombrePassagers = document.getElementById("NombreDePassagersInput").value;

  const fumeur = document.querySelector('input[name="FumeurOuNon"]:checked');
  const animal = document.querySelector('input[name="AnimalOuNon"]:checked');

  //création de l'objet contenant les informations saisies
  const covoiturageData = {
    villeDepart,
    villeArrivee,
    dateDepart,
    heureDepart,
    nombrePassagers,
    fumeur: fumeur ? fumeur.nextElementSibling.textContent : "",
    animal: animal ? animal.nextElementSibling.textContent : ""
  };

  //stockage de l'objet dans le localstorage
  localStorage.setItem("covoiturage", JSON.stringify(covoiturageData));

  // Redirection vers la page d'affichage
  //window.location.href = "moncovoiturage.html";
  //Redirection vers la page associée à "/visualiser"
  window.location.href = "/visualiser";
});


document.getElementById("covoituragesForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // ... récupération des données ...

  localStorage.setItem("covoiturage", JSON.stringify(covoiturageData));

  // ✅ Redirection vers la page associée à "/visualiser"
  window.location.href = "/visualiser";
});








document.getElementById("covoituragesForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement de la page

  // Récupération des valeurs du formulaire
  const villeDepart = document.getElementById("VilleDepartInput").value;
  const villeArrivee = document.getElementById("VilleDarriveeInput").value;
  const dateDepart = document.getElementById("DateDepartInput").value;
  const heureDepart = document.getElementById("TimeDepartInput").value;
  const nombrePassagers = document.getElementById("NombreDePassagersInput").value;

  const fumeur = document.querySelector('input[name="FumeurOuNon"]:checked');
  const animal = document.querySelector('input[name="AnimalOuNon"]:checked');

  // Formatage de la date (optionnel)
  const dateObj = new Date(dateDepart);
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const dateFormat = dateObj.toLocaleDateString('fr-FR', options);

  // Création de la carte
  const card = document.createElement("div");
  card.className = "ride-card";

  card.innerHTML = `
    <div class="ride-left">
      <img src="/images/avatar conductrice 1.jpg" alt="Avatar" class="avatar">
      <div class="ride-info">
        <h3>🚗 ${villeDepart} → ${villeArrivee}</h3>
        <p>📅 ${dateFormat} • ${heureDepart}</p>
        <p>💶 25 € par passager</p>
      </div>
    </div>

    <div class="ride-right">
      <p>👤 ${nombrePassagers} passager${nombrePassagers > 1 ? 's' : ''}</p>
      <p>🚭 ${fumeur && fumeur.nextElementSibling.textContent}</p>
      <p>🐾 ${animal && animal.nextElementSibling.textContent}</p>
      <button class="btn-reserve">Réserver</button>
    </div>
  `;

  // Ajout dans le conteneur
  document.getElementById("ride-container").appendChild(card);

  // Optionnel : réinitialiser le formulaire
  //e.target.reset();
});
