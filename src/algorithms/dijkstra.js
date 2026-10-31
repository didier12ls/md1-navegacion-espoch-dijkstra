/**
 * Implementación propia del algoritmo de Dijkstra.
 * El grafo usa la forma:
 * {
 *   A: [{ nodo: "B", peso: 10 }],
 *   B: [{ nodo: "A", peso: 10 }]
 * }
 */
export function dijkstra(grafo, origen, destino) {
  if (!grafo[origen] || !grafo[destino]) {
    throw new Error("El origen y el destino deben existir en el grafo.");
  }

  const distancias = {};
  const anteriores = {};
  const noVisitados = new Set(Object.keys(grafo));

  for (const nodo of noVisitados) {
    distancias[nodo] = Infinity;
    anteriores[nodo] = null;
  }
  distancias[origen] = 0;

  while (noVisitados.size > 0) {
    let actual = null;

    for (const nodo of noVisitados) {
      if (actual === null || distancias[nodo] < distancias[actual]) {
        actual = nodo;
      }
    }

    if (actual === null || distancias[actual] === Infinity) break;
    if (actual === destino) break;

    noVisitados.delete(actual);

    for (const vecino of grafo[actual]) {
      if (vecino.peso < 0) {
        throw new Error("Dijkstra requiere pesos no negativos.");
      }

      const alternativa = distancias[actual] + vecino.peso;
      if (alternativa < distancias[vecino.nodo]) {
        distancias[vecino.nodo] = alternativa;
        anteriores[vecino.nodo] = actual;
      }
    }
  }

  if (distancias[destino] === Infinity) {
    return { distancia: Infinity, ruta: [] };
  }

  const ruta = [];
  let cursor = destino;
  while (cursor !== null) {
    ruta.unshift(cursor);
    cursor = anteriores[cursor];
  }

  return { distancia: distancias[destino], ruta };
}
