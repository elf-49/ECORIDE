alert("formulaire chauffeur");

document.getElementById("chauffeurForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Récupération des champs
  const plaqueImmatriculation = document.getElementById("PlaqueInput").value.trim();
  const dateImmatriculation = document.getElementById("DateImmatriculationInput").value.trim();
  const modeleVoiture = document.getElementById("ModeleInput").value;
  const couleurVoiture = document.getElementById("CouleurInput").value;
  const marqueVoiture = document.getElementById("MarqueInput").value;
  const placesVoiture = document.getElementById("PlacesInput").value;

  const fumeur = document.querySelector('input[name="FumeurOuNon"]:checked');
  const animal = document.querySelector('input[name="AnimalOuNon"]:checked');

  // Vérification des champs obligatoires
  if (
    plaqueImmatriculation === "" ||
    dateImmatriculation === "" ||
    modeleVoiture === "" ||
    couleurVoiture === "" ||
    marqueVoiture === "" ||
    placesVoiture === "" ||
    !fumeur ||
    !animal
  ) {
    alert("Veuillez remplir tous les champs du formulaire.");
    return;
  }


// Stockage des données
alert("création de l'objet");
  const chauffeurData = {
    plaqueImmatriculation,
    dateImmatriculation,
    modeleVoiture,
    couleurVoiture,
    marqueVoiture,
    placesVoiture,
    fumeur: fumeur.nextElementSibling.textContent,
    animal: animal.nextElementSibling.textContent
  };

  console.log(chauffeurData);
  alert("stockage ds localstore");
  localStorage.setItem("chauffeur", JSON.stringify(chauffeurData));
 
});


