# Progetto MVC Java

## Struttura Progetto:
- model  
connessione al DB
    - repository  
    - payload  
    conness al DB con WHERE, JOIN, ecc
- controller  
- constant  
- file  

---
# Hassan:

dipendenze:
1. Spring Boot DevTools
2. Lombok
3. spring web
4. My SQL connection

creare progetto IDEA

rinomina application.properties in .yml

1. model/studente.java
2. repository/StudenteRepository.java
3. constant/DBConnectionConstant
4. compilo repository/StudenteRepository.java
5. controller StudenteController


https://www.postman.com/

---
# Filippo
Aggiungere la giusta dipendenza MySQL
nel pom.xml incollare 
    su google:    mysql connector java maven
    -> https://mvnrepository.com/artifact/mysql/mysql-connector-java/8.0.29
    copia - incolla
```xml
*<!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.29</version>
</dependency>*
```
    --> click dx -> maven -> reload project (anche download project, ma il primo fixa ache....)


    --------


creare package
model - controller - repository (mettiamo collegamento a DB - jdbc)
> per html classico in resources/static | altre tecnologie proprio fuori java
corrieri ordini / fermate articoli / preventivi correri / elenco preventivi - elenco spedizioni

---
il controller è la parte di spring ed ha bisogno dele annotation
@ è un rest-controller perche stiamo facendo delle API-controller
@getMapping

cosa ritorna una rest-API: un Json - che useremo in Angular/react

passi creazione Progetto:
1. controller
2. server
3. html (fare fetch..)

usando spring non dobbiamo preoccuparci di creare il Json (partendo dai dati estrapolati dal DB), altrimenti da fare a mno con delle librerie che convertono in json

---
payload: modelli che non corrispondono a tabelle del DB - oggeti che vogliamo restituire al frontend hce non corrispondono al DB

---


creo package model, controller
-   parto da **`model`**
    -   creo Classi (fermata linea e preventivo)
        -   dichiaro variabili
        -   get e set
        -   costruttore completo
    -   manca la tabella fremata:linea
        -   la tabella relazionale (è particolare) diventa un arrayList
            -   a logica meglio un lista di fermate in Classe linea                     
            -   come gli ordini hanno elenco dei prodotti
    -   aggiungere in classe model Linea l'arrayList `fermate`
    -   creare Repository (o CRUD Repository)
        -   ovvero creare Classi Repository (una per tabella)
            -   sarebbe più opportuno mettere il Singleton
        file -> project structure -> librerie -> aggiungere "MySQL" -> mysql:mysql-connector java (ultimo)
            stiamo installando con java i driver jdbc per collegarsi al DB
            ora possiamo collegarci col DB
        per collegarci al db:
            copiano codice Prepare stantment in model FermataRepository
            +   metodo static (non dobbiamo iniziallizare, e non serve singleton)
            ```java
                public static List<fermate> get fermate(){
                    //copio codice restante
                    try{
                    //implemento creiamo oggetto fermata con parametri della query
                    }   // getInt/getString converte in int/string  -   da scrivere per ogni riga, così abbiamo una lista(elenco) di fermate
                    catch{..}
                    return..
                }
                ```
                -   creo classe Debug per (prova) stampare lista fermate
    -   Controller:
        -   creo 1 classe Controller:
            -   bisogna mettere annotazioni per far capire che sono code (Classe) si spring:  @RestController (fa un import)
            -   @RestController prima del costruttore..
                -   Metodo: anteporre @
                -   creiamo metodo   (tra parentesi cosa voglio inviare (il nome dell'atributo della tabella))

                --  Browser:    localhost:8080/fermate     -> esce json fermate
    -   Model:  elenco linee
        -   Class LineaRepositori
            -   copio incollo brutale dichiarazione variabili e metodo
                -   modifico metodo
                    -   iin particolare parametri della connessione di ciò che voglio
                -