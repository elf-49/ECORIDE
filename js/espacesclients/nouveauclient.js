
alert("script nouveau client");

document.getElementById("nouveauClientForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const role = document.querySelector('input[name="role"]:checked');
  if (!role) return alert("Veuillez choisir un rôle");

  if (role.value === "passager") {
    alert("vers form passager")
    window.location.href = "/pages/espacesclients/formulaire_passager.html";
  } else {
    alert("vers form chauffeur")
    window.location.href = "/formulairechauffeur";
  }
});

