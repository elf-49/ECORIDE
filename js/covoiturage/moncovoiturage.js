
alert("je suis dans la page mon covoiturage");

// Récupérer l'objet covoiturage dans le loclstorage
// const covoiturage = JSON.parse(localStorage.getItem("covoiturage"));

// Vérification de l'objet
console.log(localStorage.getItem("covoiturage"));


window.addEventListener("DOMContentLoaded", function () {
  const data = JSON.parse(localStorage.getItem("covoiturage"));
  if (!data) return;

  const dateObj = new Date(data.dateDepart);
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const dateFormat = dateObj.toLocaleDateString('fr-FR', options);

  const card = document.createElement("div");
  card.className = "ride-card";

  card.innerHTML = `
    <div class="ride-left">
      <img src="/images/avatar conductrice 1.jpg" alt="Avatar" class="avatar">
      <div class="ride-info">
        <h3>🚗 ${data.villeDepart} → ${data.villeArrivee}</h3>
        <p>📅 ${dateFormat} • ${data.heureDepart}</p>
        <p>💶 25 € par passager</p>
      </div>
    </div>

    <div class="ride-right">
      <p>👤 ${data.nombrePassagers} passager${data.nombrePassagers > 1 ? 's' : ''}</p>
      <p>🚭 ${data.fumeur}</p>
      <p>🐾 ${data.animal}</p>
      <button class="btn-reserve">Réserver</button>
    </div>
  `;

  document.getElementById("ride-container").appendChild(card);
});

