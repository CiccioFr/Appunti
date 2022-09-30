## Generali
### `metadati`
dati che abbiano una relazione logica con il contenuto principale, senza però far parte del contenuto stesso

### `URL` - Uniform Resource Locator

### `HTTP` - Hyper Text Transfer Protocol
Protocollo di trasferimento degli ipertesti

### `URL-encoding`
Lista di caratteri ASCII in formato "URL-encoding" (formato esadecimale).  
I valori esadecimali possono essere utilizzati per visualizzare, all'interno di Browser o Plug-in, le lettere e i caratteri non standard.  
[WebLink](https://www.bettiolo.com/custom/1/tools/Utilit%C3%A0%20per%20il%20programmatore%20Web/URL%20Encoding%20-%20Lista%20caratteri.asp)  

### [Google Search Console](https://www.google.com/webmasters/tools/home)
Tool di Google per verificare se è presente qualche errore 404 nel blog

### `Visual content` - contenuto visuale
Scritti e immagini sono uno strumento di comunicazione potente ed efficace

### `content marketing` 
L’insieme di tutte le attività incentrate alla creazione, pubblicazione e distribuzione di qualsiasi contenuto destinato alle persone e orientato agli obiettivi di business

### `.htaccess`  -> [link](https://www.mrw.it/apache/file-htaccess_8143.html)
- file di Apache, per siti web ospitati su web server Linux.
- comune file di testo inserito all'interno di una specifica directory di un dato sito web al fine di fornire alcune direttive ad Apache sul modo in cui gestire quella specifica cartella e/o i file al suo interno  

Grazie al file `.htaccess` è possibile:
- impostare la pagina di default del sito  
- impostare pagine di errore personalizzate  
- gestire i permessi di accesso alla cartella  
- proteggere le immagini dall'hot-linking  
- gestire il rewriting delle URL  
- gestire redirect  

è necessario **verificare che la configurazione di Apache** ammetta l'override delle dirtettive centrali. Per il dominio utilizzato, la direttiva del web-server non deve diventare:
> `AllowOverride None` -> `AllowOverride All`

---
## `Docker`
Piattaforma software open-source per eseguire processi informatici in ambienti isolabili, minimali e facilmente distribuibili chiamati `Container Linux` (o anche soltanto container), con l'obiettivo di semplificare i processi di deployment di applicazioni software.  
[Link amazon](https://aws.amazon.com/it/docker/)  
[Link ibm](https://www.ibm.com/it-it/cloud/learn/docker)  
[Link microsoft](https://learn.microsoft.com/it-it/dotnet/architecture/microservices/container-docker-introduction/docker-defined)  
- Installazione Windows -> 
    [Guida 1](https://www.ictpower.it/sistemi-operativi/installazione-e-gestione-dei-container-windows-e-linux-con-docker-desktop-in-windows-10-versione-1909.htm) / 
    [Guida 2](https://thesolving.com/it/containerizzazione/come-installare-docker-mini-guida-pratica/) / 
    [Download](https://hub.docker.com/editions/community/docker-ce-desktop-windows ) 
### Container
Pacchetti di software che contengono tutti gli elementi necessari (librerie, strumenti di sistema, codice e runtime) per l'esecuzione in qualsiasi ambiente. In questo modo, i container virtualizzano il sistema operativo e sono eseguibili ovunque, da un data center privato al cloud pubblico o anche sul laptop di uno sviluppatore.  
[Link google](https://cloud.google.com/learn/what-are-containers?hl=it#section-3)
- Creazione del Container:  
    Da un'immagine (eseguendo il comando docker run) Docker eseguirà il download dell'immagine dal docker hub ed eseguirà un'istanza di redis.  
    [Link thesolving](https://thesolving.com/it/containerizzazione/come-creare-un-container-con-docker/)
- Immagini Docker:  
    Raccolta di software da eseguire come container che contiene un set di istruzioni per la creazione di un container da eseguire sulla piattaforma Docker. Le immagini sono immutabili e le modifiche apportate a un'immagine richiedono la creazione di una nuova immagine.  
    [Link oracle](https://www.oracle.com/it/cloud/cloud-native/container-registry/what-is-docker/)  
- volumi in Docker  
    Un volume di Docker permette di scambiare dati tra questi container o rendere persistenti dati provenienti da un container Docker.  
    [Link ionos](https://www.ionos.it/digitalguide/server/know-how/volumi-dei-container-docker/)  
- rimuovere contenitori, immagini, volumi e reti docker
    tilizzare il comando docker container rm seguito dall'ID dei contenitori che si desidera rimuovere.  
    [Link joecomp](https://it.joecomp.com/how-remove-docker-containers)  

[YouTube](https://www.youtube.com/watch?v=0TBvInxREIk)  
[Containerizzazione](https://thesolving.com/it/containerizzazione/)  
Kubernetes?  

---
### [`Transpilazione`](https://it.quora.com/Qual-%C3%A8-la-differenza-tra-la-transpilazione-e-la-compilazione-nella-programmazione-per-computer)  

Nella transpilazione un linguaggio di programmazione di alto livello viene tradotto automaticamente da un transpiler (che è un programma) in un altro linguaggio di programmazione di alto livello. Quest’ultimo poi può essere compilato o interpretato per essere eseguito come al solito.

---
### Scripting
Deve essere ospitato in un ambiente di esecuzione  
Linguaggio di programmazione interpretato destinato in genere a compiti di automazione del sistema operativo (batch) o delle applicazioni (macro), o a essere usato nella programmazione web all'interno delle pagine web.

### **`Pattern`**: soluzione a un problema ricorrente  
Un **design pattern** descrive una soluzione generale a un problema di progettazione ricorrente, gli attribuisce un nome, astrae e identifica gli aspetti principali della struttura utilizzata per la soluzione del problema, identifica le classi e le istanze partecipanti e la distribuzione delle responsabilità, descrive quando e come può essere applicato. In breve definisce un problema, i contesti tipici in cui si trova e la soluzione ottimale allo stato dell'arte.  
**design pattern** (schema progettuale, schema di progettazione, o schema architetturale), in informatica e specialmente nell'ambito dell'ingegneria del software, è un concetto che può essere definito "una soluzione progettuale generale ad un problema ricorrente  

## **CORS** (Cross-Origin Resource Sharing)
Sistema di sicurezza che consente di richiedere delle risorse da una pagina web ad un altro dominio esterno rispetto al richiedente  
I browser moderni utilizzano la stessa politica di origine (**SOP**) per impostazione predefinita. Questo significa che il recupero di risorse da altre origini non è consentito. Tuttavia, in alcuni casi, tali operazioni sono necessarie.  
CORS è stato progettato per affrontare simili circostanze utilizzando le intestazioni di risposta HTTP, che includono Access-Control-Allow-Origin [link](https://www.coretech.it/it/service/articoli/articoli.php?ID=1425)

### `composer.json`  
Il funzionamento di Composer è basato sulla presenza di un file di configurazione, denominato composer.json  
Questo file viene utilizzato per impostare le dipendenze con librerie di terze parti da utilizzare nel progetto.

NPM gestore di dipendenze

payloads
- unione di un model che non rispecchia interamente quello che andiamo a prendere (model parziale)


---

Intestazione della funzione  
Corpo della funzione  

---

La variabile è un PUNTATORE
variabili dello stato interno (variabili della classe)

nella cpu ci sono i registri (contenitori di dati per le variavili da elaborare/confrontare) ->
    -> dopo la cache dove salvo i valori dell'elaborazione -> ram -> HD/pen driver/cd/ecc

indirizzo di memoria:

Linguaggio di programmazione: Linguaggio formale (perche bisogna essere precisi)
codice sorgente: codice scritto dal programmatore
Linguaggio di programmazione ad alto livello .. C# Java
Linguaggio a basso livello: assembly / chi: ingegneri di processori
linguaggio macchina: 0 1

//ordini di precedenza: not end or

UML: linguaggio visuale nato per modellare sistemi orientati agli oggetti

-----  Definizioni  -----
 -- Oggetto
L'oggetto è l'istanza della classe, può contenere elementi concreti, ma anche entità come processi (pensiamo a
quelli in una filiera manifatturiera) o concetti teorici e astratti (un modello 3D nella modellazione solida,
o cose intangibili come folla, etc.).
Essi sono identificati dall’avere:
- stato, l’insieme delle variabili interne che ne definiscono le caratteristiche in un certo istante dell’esecuzione;
- “comportamento“, le modalità di azione o di reazione di un oggetto, in termini di come il suo stato cambia e come i messaggi passano.
con l'istruzione new INIZIALIZZIAMO una classe (non static):  Persona p1 = new Persona();




`en dash`   (–)  alt 0150         
`em dash`   (—)  alt 0151  
il trattino ancora più stretto (-)  Hyphen

---
google dns dig tool
cdn
https://tools.pingdom.com/


### **`Plesk`** (Parallels Plesk Panel): Plugin di Server
software commerciale proprietario per la gestione di spazi di web hosting. [Wikipedia](https://it.wikipedia.org/wiki/Plesk)

---
