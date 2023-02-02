# Java

1. [La nascita di Java e sue caratteristiche](./Intro/Nascita_di_Java.md)
1. [il Codice Sorgente e JVM - JRE - JDK](./Intro/Codice_Sorgente_e_JVM.md)
1. [Installare Java su Linux](./Intro/Installare_Java.md)

## Concetti
1. [Termini - Nozioni - Concetti](./Concetti/Termini_Nozioni_Concetti.md)
1. [OOP - Peculiarità](./../OOP/ReadMe.md)
1. [Ereditarietà vs Associazione (Aggregazione/Composizione)](./Avanzato/EreditarietaVsAssociazione.md)
1. [Modificatori / Qualificatori di accesso e non](./Concetti/Qualificatori.md)
1. [Value e Reference Tipe](./Concetti/Value_e_Reference_Tipe.md)
1. [Heap e Stack](./Concetti/Heap_e_Stack.md)

## Le Basi
1. [Operatori](./Basi/Operatori.md)
1. [Tipi di Dati](./Basi/Tipi_di_Dati.md)
1. [Array e Arrays](./Basi/ArrayArrays.md)
1. [Costrutti Condizionali e Iterativi](./Basi/CostruttiCondizionaliIterativi.md)
---
5. [Metodi](./Classi/Metodi.md)
1. [Signature - La Firma del metodo](./Signature.md)
1. [Parametro Formale / Attuale](./Basi/Parametri.md)
1. [VarArgs - Variable Arguments](Varargs-Variable_Arguments.md)
---
9. [Classi in Java](./Classi/Classi.md)
1. [il Costruttore](./Classi/Costruttore.md)
1. [Oggetti - Getter e Setter](./Classi/Oggetti.md)
---
12. [Classi Predefinite di Java](./Classi/ClassiPredefinite.md)
1. [Eccezioni](./Avanzato/Eccezioni.md)
1. [Collection Framework](./CollectionMap/RedMe.md)

## Avanzato
1. [Espressioni Lambda](./Lambda.md)
1. [Stream e Lambda Expression](./Stream.md)
1. [Pojo vs Bean](./PojoVsBean.md) - Tutti i JavaBean sono POJO, ma non viceversa
1. [Librerie Predefinite in Java](./Concetti/Librerie.md)
1. [JavaDoc - Documentare il codice](./Concetti/JavaDoc.md)
---
6. [Asserzioni](./Avanzato/Asserzioni.md)
1. [Multi Thread](./MultiThread.md)
1. [Reflection](./Avanzato/Reflection.md)
1. [`:: ` Method References](./MethodReferences.md)
1. static final boolean COMPACT_STRINGS => [Compact Strings in Java 9](https://www.baeldung.com/java-9-compact-string)

---
11. [Class Loader](./Classi/Class_Loader.md)
1. [Sicurezza](./../Java/Avanzato/Sicurezza.md)
1. [Iterator](./Avanzato/Iterator.md)
1. [Garbage Collector](./../Java/Avanzato/Garbage_Collector.md)  
[Garbage Collector Link losviluppatore.it](http://losviluppatore.it/java-la-garbage-collection)

---
## Web
1. [Wicket](./Wicket.md)

---
## FrameWork
0. [Maven](./Maven/Maven.md)
1. [Spring ed i suoi moduli](./Framework/Spring.md)
1. [JPA (Java Persistence API)](./Maven/JPA.md) (MySQL / MariaDB)
1. [Hibernate](./Maven/FilePOM.xml.md) - ORM
1. [Connessioni a DB](./DBJava/ReadMe.md)

[Streaming API](http://losviluppatore.it/java-8-la-streaming-api/) - Web Link

---
## Librerie
1. [`Lombok`](./Librerie/Lombok.md) - Libreria di tipo `APT` (`Annotation Processing Tool`)  

---
## Pattern in Java
1. [MVC in Java](./Pattern/MVC_in_Java.md)

---

## Comandistica da CLI
1. [Java da CLI](./Java_CLI.md)

---
## L'inizio del Codice
1. [Progetto MVC](./Prog_MVC_Java.md)
1. [Progetto Hibernate](./Maven/ProgettoHibernate.md)
1. [Build System](./Intro/Build_System.md)
1. [Jar](./jar.md)
1. [Hash](./Hash.md)


### Connessioni con Angular
1. [Connessione Java-Angular](./Connessione_Java_Angular.md)

### [Tutorial](./Tutorial.md)
- [Spring Boot + Spring MVC + Spring Security + MySQL](https://medium.com/@gustavo.ponce.ch/spring-boot-spring-mvc-spring-security-mysql-a5d8545d837d)

### Termini..
- `Applet`
    piccoli programmi scritti in Java che si eseguono all'interno del browser dell'utente client (elaborazione lato client). 
- `Apache Tomcat`  
    server web (nella forma di contenitore servlet) 
- `Servlet`  
    rappresentano delle classi Java, impiegate per ampliare la grandezza dei server, i quali ospitano varie applicazioni a cui è possibile accedere mediante un modello, che è in grado di elaborare le risposte in funzione delle domande.  
    oggetti scritti in linguaggio Java che operano all'interno di un server web (es. Tomcat, Jetty) oppure un server per applicazioni (application server) (es. WildFly, GlassFish) permettendo la **creazione di applicazioni web** (elaborazione lato server). Il nome deriva in contrapposizione alle `Java Applet`.  
- `JSP` (`JavaServer Pages`)  
    tecnologia di programmazione web in Java per lo **sviluppo della logica di presentazione** (tipicamente secondo il pattern MVC) di applicazioni web, fornendo contenuti dinamici in formato HTML o XML.
    La tecnologia JSP è correlata con quella delle servlet: all'atto della prima invocazione, le pagine JSP vengono infatti tradotte automaticamente da un compilatore JSP in servlet.  
    Una pagina JSP può essere vista come una rappresentazione ad alto livello di un servlet.  
    JSP è una tecnologia alternativa rispetto a numerosi altri approcci alla generazione di pagine web dinamiche, per esempio PHP, o ASP, o CGI.
- DAO vs Repository https://stackoverflow.com/questions/8550124/what-is-the-difference-between-dao-and-repository-patterns
- http://gochev.blogspot.com/2009/08/hibernate-generic-dao.html
### Esempi
1. [Esempi](./Esempi/Esempi.md)

### Dal Web
- [Guide del web](./JavaWebLink.md)
- https://docs.oracle.com/en/java/javase/index.html  