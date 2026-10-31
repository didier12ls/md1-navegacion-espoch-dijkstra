import { dijkstra } from "../algorithms/dijkstra.js";

async function cargarGrafo() {
  const respuesta = await fetch("./src/data/grafo.json");
  return respuesta.json();
}

function llenarSelect(select, nodos) {
  for (const nodo of nodos) {
    const option = document.createElement("option");
    option.value = nodo;
    option.textContent = nodo;
    select.appendChild(option);
  }
}

async function iniciar() {
  const grafo = await cargarGrafo();
  const origen = document.querySelector("#origen");
  const destino = document.querySelector("#destino");
  const resultado = document.querySelector("#resultado");
  const formulario = document.querySelector("#form-ruta");

  const nodos = Object.keys(grafo);
  llenarSelect(origen, nodos);
  llenarSelect(destino, nodos);

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const calculo = dijkstra(grafo, origen.value, destino.value);

    if (calculo.ruta.length === 0) {
      resultado.textContent = "No existe una ruta disponible entre los puntos seleccionados.";
      return;
    }

    resultado.textContent = `Ruta: ${calculo.ruta.join(" → ")} | Distancia: ${calculo.distancia} m`;
  });
}

iniciar();
