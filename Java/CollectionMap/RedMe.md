# Java Collection Framework
Il framework delle raccolte Java è un insieme di classi e interfacce che implementano strutture di dati di raccolta comunemente riutilizzabili.  
Sebbene indicato come un framework, funziona come una libreria.  

Buona pratica nella scelta della struttura di raggruppamento è partire dalle interfacce di alto livello che descrivono i tipi base in modo astratto, scegliendo successivamente la classe che implementa il tipo base, attraverso considerazioni che riguardano la velocità di esecuzione e il consumo di memoria. A questi aspetti ci si riferisce con i termini di **costo di tempo e di spazio** di un modulo software.

## Collecion vs Map

Le due interfacce non sono correlate dal punto di vista gerarchico delle classi,  
- `Map` non estende `Collection`
- `Collection` non estende `Map`.  

**Entrambe le interfacce fanno parte del `Java Collection Framework`**.  
Entrambe sono *interfacce* che definiscono un'API per oggetti che contengono altri oggetti.

- `Map` è una versione più specifica che **ha una struttura Key : Value**. 
- `Collection` è solo l'interfaccia che ha strutture di dati per l'archiviazione dei dati in Java.

vedi [Collection](./Collection.md)  
vedi [Map](./Map.md)  

---
[ArrayList](./ArrayList.md)  
[HashMap](./HashMap.md)  
