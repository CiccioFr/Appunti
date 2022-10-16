[guida OOP - html.it](https://www.html.it/guide/guida-programmazione-orientata-agli-oggetti/)

# Object-Oriented Programming
## La Programmazione Orientata agli Oggetti
---

## I Tre Pilastri:

- **`ereditarietà`** - attributi e metodi vengono ereditate dalle Classe figlie  

- **`polimorfismo`** -  è la capacità di oggetti diversi di adattarsi ed apparire nella stessa forma in un determinato contesto; fornisce al programmatore dei mezzi per evitare di dover scrivere metodi distinti.  
```java
// Java
List<String> stringList = new ArrayList<>();
    // questo è polimorfismo
```
Approfondimento: [scheda](./Polimorfismo.md) - [link web](http://www.dacrema.com/Informatica/Polimorfismo.htm)

- **`Incapsulamento`** - (quando si settano a private le variabili - uso get set)  

---
## Caratteristiche:
- **`Astrazione`**
    -   è uno dei paradigmi della OOP
        Comprende 2 concetti fondamentali:
        -   Classi astratte
        -   Interfacce
    -   lo scopo dell'astrazione è di nascondere i dettagli implementativi all'utente,
        lasciandogli solo capire cosa andrà a fare il programma, e non come

Classi Astratte:
    -   una clase astratta è fondamentalmente anch'essa una classe, con la differenza che
        non sarà possibile istanziarle e sarà anche possibile creare dei metodi astratti al loro interno.
        I metodi astratti sono dei metodi che includono la keyword "abstract" all'interno della firma e,
        non contengono il corpo dela funzione.
        Es.: non dico come calcolo area/perimetro, ma dico cosa calcolo --> ovvero Area e Perimetro

Interfacce:
    -   L'interfaccia Simboleggia una "stipula di contratto" tra programmatore e programma.
        A differenza delle classi Astratte, le interfacce non hanno:
        -   Costruttori
        -   Variabili d'Istanza        -   puoi avere COSTANTI o COSTANTI static
        -   Metodi di cui è possibile definire il corpo
    -   per implemetare i metodi di una interfaccia si usa la keyword "implements"
            dopo il nome della classe,

---
## La [Firma](./La_Firma.md) / Signature
## i [Modificatori](./Modificatori.md)
## [Qualificatori](./Qualificatori.md)
## [Parametri Formali ed Attuali](./Parametri.md)
## gli [Oggetti](./Oggetti.md)