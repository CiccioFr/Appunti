# Pattern MVC in Java

creare package
model - controller - repository (mettiamo collegamento a DB - jdbc)
> per html classico in resources/static | altre tecnologie proprio fuori java
corrieri ordini / fermate articoli / preventivi correri / elenco preventivi - elenco spedizioni

---
il controller è la parte di spring ed ha bisogno dele annotation
@ è un rest-controller perche stiamo facendo delle API-controller
@getMapping

cosa ritorna una rest-API: un Json - che useremo in Angular/react

passi:
1. controller
2. server
3. html (fare fetch..)

usando spring non dobbiamo preoccuparci di creare il Json (partendo dai dati estrapolati dal DB), altrimenti da fare a mano con delle librerie che convertono in json

---
paylod: **modelli** che non corrispondono a tabelle del DB - **oggeti** che vogliamo restituire al frontend che non corrispondono al DB -> Algoritmo

Repository -> CRUD
