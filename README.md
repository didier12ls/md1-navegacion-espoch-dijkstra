# MD1 – Navegación ESPOCH con Dijkstra

Proyecto académico de Matemática Discreta I para modelar el campus principal de la ESPOCH como un grafo ponderado y calcular rutas de menor distancia mediante una implementación propia del algoritmo de Dijkstra.

## Grupo 7

- Didier Loor — Líder / Product Owner
- Jonathan Chiquito — Matemático / Modelador Formal
- Jaqueline Veloz — Desarrollador Full Stack / UI
- Franccesco Alban — Desarrollador de Algoritmos
- Fernando Varela — QA Engineer / Verificador
- Erick Heredia — Documentador / DevOps

## Objetivo

Desarrollar una aplicación web que permita seleccionar un punto de origen y un destino dentro del campus principal de la ESPOCH y visualizar la ruta de menor distancia calculada mediante Dijkstra.

## Núcleo matemático

El campus se modela como un grafo ponderado no dirigido y conectado `G = (V, E, w)`:

- `V`: edificios, puntos de interés e intersecciones relevantes.
- `E`: tramos peatonales transitables entre vértices.
- `w`: distancia no negativa, en metros, asociada a cada arista.

El algoritmo de Dijkstra será implementado por el grupo en JavaScript, sin delegar el cálculo de caminos mínimos a una librería externa.

## Tecnologías iniciales

- HTML5
- CSS3
- JavaScript ES Modules
- Leaflet para visualización del mapa
- OpenStreetMap como capa cartográfica base
- JSON para almacenar el grafo del campus
- Jest para pruebas automatizadas del núcleo algorítmico
- Git y GitHub para control de versiones y colaboración

## Estructura

```text
.
├── index.html
├── package.json
├── src/
│   ├── algorithms/
│   │   └── dijkstra.js
│   ├── data/
│   │   └── grafo.json
│   ├── map/
│   │   └── map.js
│   ├── ui/
│   │   └── app.js
│   └── styles.css
├── tests/
│   └── dijkstra.test.js
├── docs/
│   └── modelo-matematico.md
├── assets/
└── .gitignore
```

## Ejecución

Para una prueba rápida de la interfaz se puede abrir `index.html` con un servidor local, por ejemplo usando la extensión Live Server de VS Code.

Para las pruebas automatizadas:

```bash
npm install
npm test
```

## Estado actual

Proyecto en etapa inicial. El grafo incluido es únicamente un ejemplo mínimo para verificar la implementación de Dijkstra. Los vértices, aristas y distancias reales del campus deberán levantarse y validarse antes de considerarse definitivos.
