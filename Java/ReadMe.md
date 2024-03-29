# Java

1. [La nascita di Java e sue caratteristiche](./Intro/Nascita_di_Java.md)
1. [il Codice Sorgente e JVM - JRE - JDK](./Intro/Codice_Sorgente_e_JVM.md)
1. [Installare Java su Linux](./Intro/Installare_Java.md)

## Concetti
1. [Termini - Nozioni - Concetti](./Concetti/Termini_Nozioni_Concetti.md)
1. [OOP - Peculiarità](./../OOP/ReadMe.md)
    - Ereditarietà, Polimorfismo, Incapsulamento, Astrazione
    - Firma, Modificatori, Parametri Formali ed Attuali
1. [Ereditarietà vs Associazione (Aggregazione/Composizione)](./Avanzato/EreditarietaVsAssociazione.md)
1. [Modificatori di accesso e non](./Concetti/Modificatori.md)
1. [Value e Reference Type](./Concetti/Value_e_Reference_Type.md)
1. [Heap e Stack](./Concetti/Heap_e_Stack.md)
1. [JavaDoc](./JavaDoc.md)
1. [Maggiori feature introddotte in Java](./JavaNews.md)
1. [JavaEE](./JavaEE.md)

## Le Basi
1. [Operatori](./Basi/Operatori.md)
1. [Tipi di Dati](./Basi/Tipi_di_Dati.md)
    - primitivo, reference, nulltype e void
    - Apparente ed Effetivo
1. [Classi Wrapper](./CodicePredefinito/ClassiWrapper.md#classi-wrapper)
1. [Array e Arrays](./Basi/ArrayArrays.md)
1. [Costrutti Condizionali e Iterativi](./Basi/CostruttiCondizionaliIterativi.md)
---
6. [Metodi](./Classi/Metodi.md)
1. [Signature - La Firma del metodo](./Signature.md)
1. [Parametro Formale / Attuale](./Basi/Parametri.md)
1. [VarArgs - Variable Arguments](Varargs-Variable_Arguments.md)
11. [Classi e Interfaccie in Java](./Classi/Classi.md)
1. [il Costruttore](./Classi/Costruttore.md)
---
12. [Oggetti - Getter e Setter](./Classi/Oggetti.md)
1. [equals](./Basi/equals.md)
1. [Comparable.compareTo();](./Basi/Comparable_compareTo.md)
1. [Comparator.compare();](./Basi/Comparator_compare.md)
---
16. [Eccezioni](./Avanzato/Eccezioni.md)
1. [Pojo vs Bean](./PojoVsBean.md) - Tutti i JavaBean sono POJO, ma non viceversa
1. [Collection Framework](./CollectionFramework/ReadMe.md)
1. [JavaDoc - Documentare il codice](./Concetti/JavaDoc.md)

## Avanzato
1. [Librerie Predefinite Java](./Concetti/LibreriePredefinite.md)
1. [Interfacce e Classi Predefinite](./CodicePredefinito/ReadMe.md)
1. [Blocchi di istruzioni](./Avanzato/Blocchi.md)
1. [Altri Costrutti](./Avanzato/CostruttiAvanzati.md)
1. [Lambda Expression](./LambdaExpression.md)
1. [Stream e Lambda Expression](./Stream.md)
---
7. [Asserzioni](./Avanzato/Asserzioni.md)
1. [Multi Thread](./Avanzato/MultiThread.md)
1. [Generics](./Avanzato/Generics.md)
1. [Reflection](./Avanzato/Reflection.md)
1. [`:: ` Method References](./MethodReferences.md)
1. static final boolean COMPACT_STRINGS => [Compact Strings in Java 9](https://www.baeldung.com/java-9-compact-string)

---
12. [Class Loader](./Classi/Class_Loader.md)
1. [Socket](./Avanzato/Socket.md)
1. [Sicurezza](./Avanzato/Sicurezza.md)
1. [Garbage Collector](./Avanzato/Garbage_Collector.md)  
[Garbage Collector Link losviluppatore.it](http://losviluppatore.it/java-la-garbage-collection)

---
## Web
1. [Wicket](./Wicket.md)

---
## FrameWork 
0. [Maven ed il file pom.xml](./Maven/ReadMe.md) - Strumento di gestione
1. [JEE 7: EJB 3 e JPA](https://www.html.it/pag/57277/jee-7-panoramica-delle-funzionalita-2/) - web link
1. [Spring ed i suoi moduli](./Framework/Spring.md) - Framework
1. [Spring ver. 3.0.2](./Framework/Spring_Ver3.md)
1. [Spring Security](./Framework/Spring_Security.md)
1. [JPA (Java Persistence API)](./Maven/JPA.md) - FrameWork
    - [JPA Annotation](./Maven/JPA_Annotation.md)
1. [Hibernate](./Maven/FilePOM.xml.md) - ORM
    - [Hibernate Annotation](./Maven/Hibernate_Annotation.md)
1. [Connessioni a DB](./DBJava/ReadMe.md)

## Librerie / Dipendenze (Maven) / Funzionalità
1. [Auth0 JWT (Json Web Token)](./Librerie-Dipendenze/JWT.md)
1. [Lombok](./Librerie-Dipendenze/Lombok.md) - Libreria di tipo `APT` (`Annotation Processing Tool`)
    - [Lombok Annotation](./Librerie-Dipendenze/Lombok_Annotation.md)
1. [Resilience4j](./Librerie-Dipendenze/Resilience4j.md) - Libreria di tolleranza ai guasti
    - [CircuitBreaker](./Librerie-Dipendenze/Resilience4j_CircuitBreaker.md)
1. [Actuator](./Librerie-Dipendenze/Actuator.md) - stato di salute del MicroServ
1. [Logging](./Application.md#logging)
1. [Zipkin & Sleuth](./Librerie-Dipendenze/Zipkin_Sleuth.md)
1. [Eureka](./Librerie-Dipendenze/Eureka.md)
1. [Swagger UI](./Librerie-Dipendenze/Swagger_UI.md) - Pg web Test API
1. [LoadBalancer](./Librerie-Dipendenze/LoadBalancer.md)
1. [OpenCSV](./Librerie-Dipendenze/OpenCSV.md)
1. [PDF](./Librerie-Dipendenze/pdf)
1. [Excel](./Librerie-Dipendenze/Excel.md)
1. [Mail](./Librerie-Dipendenze/Mail.md)
1. [Schedulazione](./Librerie-Dipendenze/Schedulazione.md)
1. [Apache HttpClient](./Librerie-Dipendenze/HttpClient.md) - incluso da ver.11
1. [JSoup](./Librerie-Dipendenze/JSoup.md)
1. [Web Scraping - `Apache HttpClient` e `JSoup`](./Librerie-Dipendenze/WebScraping.md)

---
## Pattern in Java
1. [MVC in Java](./PatternJava/MVC_in_Java.md)
1. [Singleton in Java](./PatternJava/Singleton_in_Java.md)

---

## Comandistica da CLI
1. [Java da CLI](./Java_CLI.md)

---
## L'inizio del Codice
1. [Build System](./Intro/Build_System.md) - Sistemi per l'automazione del processo di build
1. [Gestione di File](./progetti/File/ReadMe.md)
1. [Progetto Spring](./progetti/ProgettoSpring.md)
1. [Progetto MVC](./Prog_MVC_Java.md)
1. [Progetto Hibernate](./Maven/ProgettoHibernate.md)
1. [Application.yaml & Application.properties](./Application.md)
    - server.port
1. [Questione di EndPoint](./Questione_di_EndPoint.md)

---
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

---
### Esempi
1. [Esempi](./Esempi/Esempi.md)

---

---
### Dal Web
- [Guide del web](./JavaWebLink.md)
- https://docs.oracle.com/en/java/javase/index.html  