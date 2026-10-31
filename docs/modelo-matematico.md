# Modelo matemático preliminar

## Grafo

Se propone representar el campus mediante un grafo ponderado no dirigido y conectado:

`G = (V, E, w)`

- `V`: conjunto de vértices que representan edificios, puntos de interés e intersecciones.
- `E`: conjunto de aristas que representan tramos peatonales transitables.
- `w: E → R≥0`: función de peso que asigna a cada arista una distancia no negativa en metros.

## Camino

Un camino entre `v0` y `vk` es una secuencia:

`P = (v0, v1, ..., vk)`

con `(vi, vi+1) ∈ E` para todo `0 ≤ i < k`.

## Costo de un camino

`c(P) = Σ w(vi, vi+1)`

El problema consiste en hallar un camino `P*` entre origen `s` y destino `t` tal que:

`c(P*) = min { c(P) | P es un camino entre s y t }`

## Condición para Dijkstra

El algoritmo es aplicable porque todos los pesos representan distancias y, por tanto, cumplen:

`w(e) ≥ 0` para toda `e ∈ E`.

## Observación

Las distancias y vértices incluidos actualmente en `grafo.json` son datos de prueba. El modelo definitivo debe construirse a partir del levantamiento y validación del campus principal de la ESPOCH.
