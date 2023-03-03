# Object-Oriented Programming
## La Programmazione Orientata agli Oggetti
---

## I Tre Pilastri:

### **`Ereditarietà`**
attributi e metodi vengono ereditate dalle Classe figlie  

### **`Polimorfismo`**
Capacità di oggetti diversi di adattarsi ed apparire nella stessa forma in un determinato contesto;  
```java
// Java
List<String> stringList = new ArrayList();
    // questo è polimorfismo
```
Approfondimento: [scheda](./Polimorfismo.md) - [link web](http://www.dacrema.com/Informatica/Polimorfismo.htm)

### **`Incapsulamento`**
Meccanismo atto a limitare l'accesso diretto agli elementi dell'oggetto;  
capacità di un oggetto di nascondere la sua implementazione interna rispetto al resto del codice.  
`Information Hiding` quando si settano a private le variabili - uso get set)  

---
## Caratteristiche:
- **`Astrazione`**
    -   è uno dei paradigmi della OOP
        Comprende 2 concetti fondamentali:
        -   Classi astratte
        -   Interfacce
    -   lo scopo dell'astrazione è di nascondere i dettagli implementativi all'utente,
        lasciandogli solo capire cosa andrà a fare il programma, e non come

### Classi Astratte:
-   una clase astratta è fondamentalmente anch'essa una classe, con la differenza che:
    - non sarà possibile istanziarle e sarà anche possibile creare dei metodi astratti al loro interno.
    - I metodi astratti sono dei metodi che includono la keyword "abstract" all'interno della firma e, non hanno il corpo dela funzione (il blocco).

### Interfacce:
- L'interfaccia Simboleggia una "stipula di contratto" tra programmatore e programma.
    A differenza delle classi Astratte, le interfacce NON hanno:
    - Costruttori
    - Variabili d'Istanza        
    - puoi avere COSTANTI o COSTANTI static
    - Metodi di cui è possibile definire il corpo
- Occorre implemetare i metodi di una interfaccia: si usa la keyword "implements" dopo il nome dell'interfaccia,

---
## La [Firma](./La_Firma.md) / Signature
## [Modificatori](./Modificatori.md)
## [Parametri Formali ed Attuali](./Parametri.md)
## gli [Oggetti](./Oggetti.md)

---
[guida OOP - html.it](https://www.html.it/guide/guida-programmazione-orientata-agli-oggetti/)