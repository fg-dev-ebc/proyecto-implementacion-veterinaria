// navegacion
function showDirectory() {
  document.getElementById("landing-page").classList.add("hidden");
  document.getElementById("directory-page").classList.remove("hidden");
  document.getElementById("detail-page").classList.add("hidden");
}

function showLanding() {
  document.getElementById("landing-page").classList.remove("hidden");
  document.getElementById("directory-page").classList.add("hidden");
  document.getElementById("detail-page").classList.add("hidden");
}

function showVetDetail(vetId) {
  document.getElementById("landing-page").classList.add("hidden");
  document.getElementById("directory-page").classList.add("hidden");
  document.getElementById("detail-page").classList.remove("hidden");
}

function goBackToDirectory() {
  showDirectory();
}