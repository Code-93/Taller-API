const API_URL = "https://gateway.marvel.com/v1/public/";

async function cargarDatos() {
  const response = await fetch(API_URL);
  const data = await response.json();

  // Mostrar los datos
  document.querySelector("#titulo").textContent = data.title;
  document.querySelector("#descripcion").textContent = data.description;
}

cargarDatos();
