# Librerie Java

## Librerie Native
Con "librerie native" si intendono le librerie che sono scritte in un linguaggio diverso da Java, ma che sono utilizzate da Java attraverso interfacce native.  
Le "librerie native di Java" sono in realtà dei framework (scritti in Java) che permettono l'accesso a funzionalità del sistema operativo e dell'hardware sottostante che non sono disponibili nell'ambiente virtuale di Java.  
Forniti come parte della distribuzione standard di Java, spesso sono implementate in codice nativo (ad esempio, in C o C++) e dipendono dal sistema operativo sottostante.   
Le Librerie Native sono fornite dal sistema operativo e non sono incluse nella distribuzione standard di Java; utilizzano codice nativo scritto in [C / C++](../../C_e_C++/ReadMe.md), Assembly o altri linguaggi che utilizzano l'Application Binary Interface (ABI) del sistema operativo.  
Quando occorre accedere a dette funzionalità, ovvero un programma Java richiede l'uso di una libreria nativa, la JVM carica il codice nativo appropriato dal sistema operativo in cui il programma viene eseguito, utilizzando questi framework.

Esempi di framework java per interfacciamento con librerie native:
- `JNI` (Java Native Interface)  
    libreria per la creazione di interfacce tra codice Java e codice nativo;
- `JNA` (Java Native Access)  
    libreria simile a JNI ma con una sintassi più semplice;
- `JavaFX`  
    libreria per lo sviluppo di interfacce grafiche (GUI) basata su tecnologie native;
- `AWT` (Abstract Window Toolkit)  
    libreria legacy per lo sviluppo di interfacce grafiche (GUI) basata su tecnologie native;
- `Java Sound API`  
    libreria per la gestione del suono basata su tecnologie native.

[Approfondimento](./LibrerieNative.md)

---
## Librerie Predefinite
Le "librerie predefinite" o "librerie standard" si riferiscono alle librerie Java fornite come parte della Java Development Kit (JDK).  
Sono scritte interamente in Java, contengono classi e metodi.

### **`java.lang`**  
- libreria principale di Java
- Fornisce i fondamenti del linguaggio Java, tra cui classi per tipi primitivi (wrapper), eccezioni e oggetti di base come String e System, e molti altri. 
### **`java.util`**
- Fornisce varie utility generali come la gestione delle collezioni e classi di utilità
- es. ArrayList, HashMap
- es. Date, Calendar, Random e altre ancora.
- java.util.logging: sistema di logging per la registrazione di messaggi di log.
- java.util.concurrent: un insieme di strutture dati e strumenti per la programmazione concorrente
### **`java.io`**
- per l'input/output (io) di dati, compresa la lettura e la scrittura di file, la comunicazione con reti e stream di dati. 
- es. InputStream, OutputStream, Reader e Writer, BufferedReader, BufferedWriter, File, FileInputStream, FileOutputStream, e altre ancora.
### **`java.nio`**  
- per operazioni buffer
- Fornisce un nuovo sistema di I/O non bloccante e ad alte prestazioni, utilizzabile per gestire grandi quantità di dati con efficienza.
### **`java.sql`**
- Fornisce classi per l'accesso ai database, come il caricamento di driver JDBC, la gestione di connessioni al database e la manipolazione dei dati.
### **`java.net`**  
- Fornisce classi per la comunicazione di rete, inclusi socket, protocolli di rete, URL e altro ancora.  
- es. URL, HttpURLConnection, Socket, ServerSocket e altre ancora.
### **`java.security`**
- Fornisce servizi di sicurezza per applicazioni Java, come crittografia, autenticazione, autorizzazione e altro ancora
### **`java.beans`**  
- per lavorare con i bean  
### **`java.math`**  
- funzioni matematiche.  
- manipolazione di numeri di grandi dimensioni e la precisione aritmetica,
- es. BigInteger e BigDecimal.
### **`java.awt`**  
- per la creazione di interfacce grafiche (GUI) per applicazioni desktop, come finestre, pulsanti, campi di testo e altro ancora.
- es. Frame, Button, Label, TextField, e altre ancora.
### **`javax.swing`**
- Estensione di java.awt che fornisce componenti aggiuntivi per la creazione di interfacce utente avanzate, come tabelle, alberi, menu a discesa, schede e altro ancora.
### **`javax.xml`**
- fornisce classi per la manipolazione di dati XML, come SAXParser, DOMParser e Transformer.
### **`java.applet`**  
- per sviluppare applet  



---
Le Librerie permettono di organizzare le classi in gruppi logici
https://www.nextre.it/funzionano-le-librerie-java/