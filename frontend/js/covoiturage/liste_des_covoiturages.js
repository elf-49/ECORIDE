const covoiturages = [
  {
    villeDepart: "Paris",
    villeArrivee: "Bordeaux",
    dateDepart: "2025-08-30",
    heureDepart: "08:00",
    places: 3,
    prix: 25,
    electrique: true,
    noteConducteur: 4.8,
    duree: "4h30",
    options: {
      fumeur: false,
      animal: true,
      musique: true
    }
  },
  {
    villeDepart: "Nantes",
    villeArrivee: "Bordeaux",
    dateDepart: "2025-08-30",
    heureDepart: "09:15",
    places: 2,
    prix: 30,
    electrique: false,
    noteConducteur: 4.2,
    duree: "5h00",
    options: {
      fumeur: true,
      animal: false,
      musique: false
    }
  },
  {
    villeDepart: "Lyon",
    villeArrivee: "Marseille",
    dateDepart: "2025-08-30",
    heureDepart: "10:15",
    places: 1,
    prix: 20,
    electrique: false,
    noteConducteur: 4.2,
    duree: "3h00",
    options: {
      fumeur: true,
      animal: false,
      musique: false
    }
  },
  {
    villeDepart: "Nantes",
    villeArrivee: "Bordeaux",
    dateDepart: "2025-08-30",
    heureDepart: "09:15",
    places: 2,
    prix: 30,
    electrique: false,
    noteConducteur: 4.2,
    duree: "5h00",
    options: {
      fumeur: true,
      animal: false,
      musique: false
    }
  }
  // Ajoute autant d'exemples que nécessaire
];

// afficher et trier les covoiturages
function renderTable(data) {
  const tbody = document.getElementById("tbodyCovoiturages");
  tbody.innerHTML = "";
  data.forEach((ride, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${ride.villeDepart}</td>
      <td>${ride.villeArrivee}</td>
      <td>${ride.dateDepart}</td>
      <td>${ride.heureDepart}</td>
      <td>${ride.places}</td>
      <td>${ride.prix}</td>
      <td>${ride.electrique ? "Oui" : "Non"}</td>
      <td>${ride.noteConducteur}</td>
      <td>${ride.duree}</td>
      <td><button class="btn btn-sm btn-outline-primary" onclick="showDetails(${index})">Détail</button></td>
    `;
    tbody.appendChild(row);
  });
}

function sortBy(key) {
  covoiturages.sort((a, b) => {
    if (typeof a[key] === "string") return a[key].localeCompare(b[key]);
    return a[key] - b[key];
  });
  renderTable(covoiturages);
}

function showDetails(index) {
  const ride = covoiturages[index];
  alert(`Options :
- Fumeur : ${ride.options.fumeur ? "Oui" : "Non"}
- Animal accepté : ${ride.options.animal ? "Oui" : "Non"}
- Musique : ${ride.options.musique ? "Oui" : "Non"}`);
}

//renderTable(covoiturages);


function appliquerFiltres() {
  const prixMax = parseFloat(document.getElementById("filtrePrix").value);
  const electrique = document.getElementById("filtreElectrique").value;
  const noteMin = parseFloat(document.getElementById("filtreNote").value);
  const dureeMax = parseFloat(document.getElementById("filtreDuree").value);

  const filtered = covoiturages.filter(ride => {
    const dureeHeures = parseFloat(ride.duree.replace("h", "").replace(",", "."));

    return (
      (isNaN(prixMax) || ride.prix <= prixMax) &&
      (electrique === "" || ride.electrique.toString() === electrique) &&
      (isNaN(noteMin) || ride.noteConducteur >= noteMin) &&
      (isNaN(dureeMax) || dureeHeures <= dureeMax)
    );
  });

  renderTable(filtered);
}



