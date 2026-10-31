import { dijkstra } from "../src/algorithms/dijkstra.js";

const grafo = {
  A: [
    { nodo: "B", peso: 4 },
    { nodo: "C", peso: 10 }
  ],
  B: [
    { nodo: "A", peso: 4 },
    { nodo: "C", peso: 3 }
  ],
  C: [
    { nodo: "A", peso: 10 },
    { nodo: "B", peso: 3 }
  ]
};

test("encuentra la ruta de menor distancia", () => {
  expect(dijkstra(grafo, "A", "C")).toEqual({
    distancia: 7,
    ruta: ["A", "B", "C"]
  });
});

test("origen y destino iguales", () => {
  expect(dijkstra(grafo, "A", "A")).toEqual({
    distancia: 0,
    ruta: ["A"]
  });
});

test("rechaza pesos negativos", () => {
  const invalido = {
    A: [{ nodo: "B", peso: -1 }],
    B: [{ nodo: "A", peso: -1 }]
  };

  expect(() => dijkstra(invalido, "A", "B")).toThrow(
    "Dijkstra requiere pesos no negativos."
  );
});
