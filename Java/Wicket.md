# Programmazione Wep

con java si pensa ad una API

modus - altra tecnologia per web, oggi obsoleto, in uso solo su siti esistenti  
altri progetti:
--- Struz: Libreria enorme pensata piu simile a php piu vecchio di 1-2 anni di spring, in Java, non molta astrazione come witcket, gestione della ... rete, più flessibile, ma piu complesso, deve generare una pagina html
--- Apache Tapestry: alternativo a Witcket

# [Apache Wicket](https://wicket.apache.org)

### Framework di applicazioni Web basato su componenti per il linguaggio di programmazione Java
ver 9 al 16/11/2022

È uno dei framework nato nel 2004 dopo i grandi del web di oggi (Angular)
È uno dei pochi progetti che continua ad essere aggiornato e con una cerca community alle spalle
Libreria grafica per interfacciarsi con l'utente (La View)
orientato ai componenti
da una astrazione della pagina
non si risponde a richiesta http, ma si scrivono classi che rispondono a richiesta http

---
## `QuickStar`: Creare applicazione Wicket
- https://wicket.apache.org/start/quickstart.html  
Genera uno scheletro di progetto

- Server to deploy on  
  Node non serve server, ne ha uno suo sw server interno
  Java necessita si sw che gli faccia da server: contenitore dell'applicazione
  qualunque libreria da per scontata che ci sia una applicazione server che la contenga e la gestisca
  - Tomcat: è community driver
    Wild Fly: NO - ha qualcosa di incompatibile.. ha delle configurazioni particolari da impostare

il server usato è descritto in WEB-INF\web.xml (Tomcat)

Come si programma una app web
- avvio:
  - CONFIGURARE SERVER: indicare dove si trova Tomcat
  - -> menu Tool-> servers -> .. -> C:\xampp\tomcat
  - andare nella configurazione di Tomcat al file tomcat-users.xml
  - \<!--  <user username="tomcat" password="<must-be-changed>" roles="tomcat"/> diventa: -->
  \<user username="tomcat" password="<password>" roles="tomcat, manager-gui, manager-script"/>
  - in scheda startUp: spunta pu selezionare file "catalina_start.bat"
    - https://www.exefiles.com/it/bat/catalina-start-bat/

---
## wicket repeatingview

## È in html
- entity html
  - &egrave
  - https://unicode-table.com/en/html-entities/



## prima lettera maiuscola


## panel corrisponde a div

---
Semantic versioning è su 3 numeri
- major relise: se salto da una all'atra mi aspetto che non siano compatibili
- Minor relise: il mio codice non deve esere modificato, ma possono eserci nuove funzionalità
- Patch per le correzioni  
[SemVer.org](https://semver.org/lang/it)

Machine Readable - in modo che anche un computer capisca la versione