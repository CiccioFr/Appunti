## Tipo di dato in Java: 
I tipi ammessi in un programma Java sono i seguenti:
- otto **Value Type** o **tipi primitivi** definiti dal linguaggio:
    - boolean,
    - byte,
    - char,
    - short,
    - int,
    - long,
    - float,
    - double.
- **Reference Type** (classi, interfacce e tipi array);
- il **nulltype**;
- il tipo degenere **void**.

---
- il programma accede a un oggetto sempre e solo tramite "**reference**", che svolge un ruolo analogo a quello del **puntatore** del C.  
- gli oggetti possono cambiare il proprio stato interno

Il **nulltype** ammette un solo valore possibile, indicato con il valore letterale null. Quest'ultimo, pur non essendo un oggetto, può svolgere il ruolo di "segnaposto" in sostituzione di un oggetto, perché formalmente può essere convertito (tramite cast implicito) verso qualunque tipo riferimento.  
Il tipo **void** non ammette alcun valore ed è utilizzato come tipo di ritorno dei metodi che non restituiscono un valore. 


---
primitivi, astratte, interfacce, enumerazioni

CONVENZIONI:
- bool inizializzato a false di default (pg 411-412 libro)

classe wrapper (es Integer) : ogni tipo primitivo ha una classe omonima con dei metodi, java riesce a convertire di default i valori

- [Array](./Tipi_di_Dati/Array.md)