const API_URL = "https://pokeapi.co/api/v2/pokemon/ditto";

async function cargarDatos() {
  const response = await fetch(API_URL);
  const data = await response.json();

  document.querySelector("#titulo").textContent = data.title;
  document.querySelector("#descripcion").textContent = data.description;
}

cargarDatos();
