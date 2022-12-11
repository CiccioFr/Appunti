## Tipo di dato in Java: 
I tipi ammessi in un programma Java sono i seguenti:  

1. otto **`Value` Type** o **tipi primitivi** definiti dal linguaggio:
    - boolean,
    - byte,
    - char,
    - short,
    - int,
    - long,
    - float,
    - double.
1. **`Reference` Type** (classi, interfacce e tipi array);
1. il **`null` type**; - Il simbolo null rappresenta un valore che non è il reference di alcun oggetto.  
1. il tipo degenere **`void`**.

[Tipi_di_dato - link Wikipedia](https://it.wikibooks.org/wiki/Java/Tipi_di_dato)

---
- il programma accede a un oggetto sempre e solo tramite "**Reference**", che svolge un ruolo analogo a quello del **puntatore** (del C).  
- gli oggetti possono cambiare il proprio stato interno

Il **`null` type** ammette un solo valore possibile, indicato con il valore letterale null. Quest'ultimo, pur non essendo un oggetto, può svolgere il ruolo di "segnaposto" in sostituzione di un oggetto, perché formalmente può essere convertito (tramite cast implicito) verso qualunque tipo Reference.  
Il tipo **`void`** non ammette alcun valore ed è utilizzato come tipo di ritorno dei metodi che non restituiscono un valore. 


---
primitivi, astratte, interfacce, enumerazioni

CONVENZIONI:
- bool inizializzato a false di default (pg 411-412 libro)

[IEEE 754 - standard IEEE per il calcolo in virgola mobile](https://it.wikipedia.org/wiki/IEEE_754)