# Termini Concetti e Definizioni in Programmazione

## Case Styles:
- `camelCase`  
    usato come convenzione nella dichiarazione di variabili in molte lingue
- `PascalCase`  
    convenzione per dichiarare le classi in molte lingue
- `snake_case`  
    usato convenzionalmente per dichiarare i nomi dei campi del database
- `kebab-case`  
    utilizzato negli URL

## `Funzione Lambda` o funzione anonima
funzione definita, e possibilmente chiamata, senza essere legata ad un identificatore.  
Da usare nei casi in cui serve definire una breve funzione che ha poche linee di codice e che verrà utilizzata una sola volta (non può essere richiamata essendo priva di identificatore)  
Esempio in Js:  
1. `function(a, b) { return a + b; }`
2. `(a, b) => a + b;` *
    - \* wrappare con le graffe { } per eseguire più istruzioni

In Java le funzioni anonime sono state inserite nella versione 8 (rilasciata nel 2014)

## `Serializzazione` -> persistenza del dato
**La serializzazione è il processo che rende persistente lo stato dell'oggetto**, ovvero trasformazione di un oggetto Java in un formato che possa essere memorizzato su un supporto di memorizzazione o trasmesso attraverso una rete.  
Ciò significa che <u>***lo stato dell'oggetto viene convertito in un flusso di byte (formato binario)***</u> da utilizzare per la persistenza (ad esempio la memorizzazione di byte in un file) o il trasferimento (ad esempio l'invio di byte attraverso una rete).  
Questo è uno dei concetti importanti nella programmazione Java perché la serializzazione è utilizzata principalmente nella programmazione di rete.  
Gli oggetti che devono essere trasmessi attraverso la rete devono essere convertiti in byte.  
- in Java la serializzazione è implementata attraverso l'utilizzo dell'interfaccia Serializable  
    A tale scopo, ogni classe o interfaccia deve implementare l'interfaccia `Serializable`. È un'interfaccia marker senza alcun metodo.  
    Quando un oggetto Serializable viene serializzato, tutti i suoi campi dati e i campi dati dei suoi oggetti contenuti vengono trasformati in una rappresentazione binaria e scritti su un supporto di memorizzazione.  
    Per impostazione predefinita, tutte le variabili dell'oggetto vengono convertite in uno **stato persistente**.  
    `transient` indica che un campo deve essere escluso dal **processo di serializzazione**.  

Allo stesso modo, possiamo usare la **deserializzazione** per riportare lo stato dell'oggetto dai byte.  
Ciò viene fatto attraverso la lettura dei dati serializzati dal supporto di memorizzazione e la ricostruzione dell'oggetto originale utilizzando le informazioni contenute nella rappresentazione binaria.

## `Persistenza`
Si riferisce alla capacità di mantenere i dati al di là della durata di una singola esecuzione di un programma. In altre parole, i dati devono essere salvati in modo permanente in un supporto di memoria non volatile, come un disco rigido o una memoria flash.  
In **`Java`**, la `persistenza` viene comunemente implementata attraverso l'utilizzo di un framework `ORM` (`Object-Relational Mapping`) come ad esempio `Hibernate` o `JPA` (`Java Persistence API`). Questi framework consentono di mappare le classi Java ad una struttura di database relazionale, in modo che gli oggetti Java possano essere salvati e recuperati dal database.

## `Code Smell` (letteralmente "odore di codice")
Espressione usata per indicare una serie di caratteristiche che il codice sorgente può avere e che sono generalmente riconosciute come probabili indicazioni di un difetto di programmazione.  
I code smells possono essere causati da diverse ragioni, tra cui:
- Design improprio: un code smell può essere causato da un design improprio, come ad esempio una classe che ha troppe responsabilità, una dipendenza circolare tra classi, o una scarsa coesione tra le classi.
- Ripetizione del codice: il code smell può essere causato dalla ripetizione del codice in più parti dell'applicazione. Questo può aumentare la complessità del codice e rendere difficile la manutenzione.
- Violazione dei principi di progettazione: un code smell può essere causato dalla violazione dei principi di progettazione, come il principio di singola responsabilità, il principio di apertura/chiusura, il principio di sostituzione di Liskov, il principio di segregazione delle interfacce, e il principio di inversione delle dipendenze.

Per individuare i code smells nel codice, gli sviluppatori possono utilizzare strumenti di analisi statica del codice, eseguire code review, o utilizzare tecniche di refactoring.

## `Refactoring`
Processo che mira a migliorare la qualità del codice eliminando i code smells e migliorando il design del software. Le tecniche di refactoring possono includere la creazione di classi e metodi più piccoli e più coesi, l'estrazione di metodi duplicati in metodi comuni, o la rimozione di dipendenze circolari. L'obiettivo del refactoring è di migliorare la qualità del codice, rendendolo più facile da mantenere, estendere e testare.

## `KISS` (principio)
Acronimo usato in progettazione, che sta per `Keep It Simple, Stupid`, ossia "`rimani sul semplice, stupido`". In riferimento al codice sorgente di un programma significa non occuparsi delle ottimizzazioni fin dall'inizio, ma cercare invece di mantenere uno stile di programmazione semplice e lineare, demandando le ottimizzazioni al compilatore o a successive fasi dello sviluppo.  
Altre varianti dello stesso acronimo includono: `Keep It Sweet and Simple`, `Keep It Short and Simple` e `Keep It Simply Smart`. 
[link wiki](https://it.wikipedia.org/wiki/KISS_(principio))

## `Stack Trace`
Letteralmente "traccia dello stack", è un resoconto di tutti i metodi o le funzioni attualmente in esecuzione nel programma, a partire dal metodo che ha generato l'eccezione e risalendo fino al metodo che ha invocato il metodo che ha generato l'eccezione.  
- Viene utilizzato principalmente per il debug di un programma e viene generato automaticamente dal sistema operativo o dall'ambiente di sviluppo quando si verifica un'eccezione durante l'esecuzione del codice.  
- Fornisce una traccia dettagliata degli errori di runtime e può essere utilizzato per identificare la causa dell'errore, individuare il punto esatto del codice che ha generato l'eccezione e quindi correggere il bug.  
- Solitamente è stampato sull'output standard di errore (stderr) insieme al messaggio di errore dell'eccezione, in modo che possa essere letto dagli sviluppatori o dagli amministratori di sistema per la risoluzione dei problemi.

## `Overhead`
Utilizzato per definire le risorse accessorie, richieste in sovrappiù rispetto a quelle strettamente necessarie per ottenere un determinato scopo in seguito all'introduzione di un metodo o di un processo più evoluto o più generale.  
Si riferisce al costo aggiuntivo di risorse, come tempo di elaborazione, memoria e larghezza di banda, necessario per eseguire un'operazione specifica. L'overhead può essere causato da diverse attività, come la gestione della memoria, la sincronizzazione tra thread o la gestione delle eccezioni.  
Nel contesto di Java, l'overhead si verifica spesso a causa dell'ambiente di runtime e delle strutture dati utilizzate. Ad esempio, l'uso di un garbage collector per gestire la memoria in Java può comportare un overhead in termini di tempo di esecuzione, poiché il sistema deve continuamente verificare e liberare la memoria inutilizzata.  
L'overhead può anche essere causato da una eccessiva astrazione dei concetti o dalla complessità dell'architettura del software. Ad esempio, l'uso di molte interfacce e classi astratte può aumentare l'overhead in quanto richiede più risorse per la gestione dei metodi e dei riferimenti.  
Per minimizzare l'overhead, è importante progettare e scrivere il codice in modo efficiente, utilizzando solo le risorse necessarie per l'esecuzione delle operazioni richieste. Inoltre, l'uso di tecniche di caching e la riduzione della complessità dell'architettura possono aiutare a minimizzare l'overhead e migliorare le prestazioni del software.

## `Tecniche di Caching`
Sono tecniche utilizzate per migliorare le prestazioni del software memorizzando temporaneamente i dati frequentemente utilizzati in una memoria cache ad accesso rapido. Quando un'applicazione richiede i dati, invece di accedere alla fonte originale dei dati, l'applicazione accede alla copia memorizzata nella cache. Ciò riduce il tempo necessario per accedere ai dati, migliorando le prestazioni complessive dell'applicazione.  
In Java, ci sono diverse tecniche di caching disponibili, tra cui:
- `Cache di oggetti`: questa tecnica memorizza oggetti Java in una cache, utilizzando come chiave di accesso un valore univoco associato all'oggetto. Ad esempio, è possibile utilizzare una cache di oggetti per memorizzare le informazioni di connessione al database o le informazioni di autenticazione dell'utente.
- `Cache di risultati`: questa tecnica memorizza i risultati delle operazioni costose in una cache, in modo che possano essere riutilizzati senza dover eseguire nuovamente l'operazione.
- `Cache di byte-code`: questa tecnica memorizza il byte-code generato dalla compilazione di codice Java in una cache, in modo che possa essere riutilizzato senza dover ricompilare il codice. Questo tipo di cache è utilizzato in particolare nei server di applicazione Java per migliorare le prestazioni.

Per utilizzare le tecniche di caching in modo efficace, è importante selezionare la giusta tecnica di caching per il tipo di dati che si desidera memorizzare e configurare la cache in modo appropriato, tenendo conto della dimensione della cache, del tempo di conservazione dei dati e della politica di gestione della cache.

## `Extreme programming`
Metodologia di sviluppo del software che enfatizza la scrittura di codice di qualità e la rapidità di risposta ai cambiamenti di requisiti.  
Appartiene alla famiglia delle metodologie agili, e come tale prescrive lo sviluppo iterativo e incrementale strutturato in brevi cicli di sviluppo. Altri elementi chiave dell'XP sono il pair programming, l'uso sistematico di unit testing e refactoring, il divieto ai programmatori di sviluppare codice non strettamente necessario, l'enfasi sulla chiarezza e la semplicità del codice, la preferenza per strutture gestionali non gerarchiche, e l'importanza data alla comunicazione diretta e frequente fra sviluppatori e cliente e fra gli sviluppatori stessi.  
[link wiki](https://it.wikipedia.org/wiki/Extreme_programming)

## `ReGex` - `Regular Expression` (Espressione Regolare)
Sequenza di simboli scritta con sintassi specifica che identifica un insieme di stringhe  
[link google](https://support.google.com/a/answer/1371415?hl=it)

## `Snippet`  
frammento di codice sorgente

## `Short Code` - Tipici di WordPress  
Codici brevi o brevi sequenze di numeri, utilizzati per indirizzare i messaggi nel sistema di messaggistica multimediale e i sistemi di servizi  
Tipi:  
- Self-closing Shortcodes  
- Enclosing Shortcode  
[link su wordpress](../CMS/WordPress/ShortCode/ShortCode.md)

## `Boilerplate`
Codice ripetuto in molte parti di un’applicazione con poche modifiche

## `Run-time system` (o runtime system)
Software che fornisce i servizi necessari all'esecuzione di un programma, pur non facendo parte in senso stretto del sistema operativo.  
Esempi di runtime system sono:
- il **software generato dal compilatore** per la gestione dello stack
- la libreria software per la gestione della memoria (es. malloc)
- il codice che gestisce il caricamento dinamico e il linking
- il codice di debugging generato in compilazione o in esecuzione
- il codice di gestione dei thread di livello applicativo

Anche gli interpreti di codice e le macchine virtuali possono essere considerati runtime system, mentre servizi attivi in processi concorrenti sono considerati come middleware.  
[Wikipedia](https://it.wikipedia.org/wiki/Run-time_system)

## `Data Binding`
Meccanismo che consente di associare e sincronizzare una fonte dati agli elementi dell'interfaccia utente.  
In fase di design, grazie a XAML, possiamo descrivere in maniera dichiarativa le relazioni di Binding senza preoccuparci di collegare la fonte dati: senza scrivere codice procedurale ma descrivendo relazioni che legano una casella di testo con un campo di una tabella di un bd o di una sorgente dati qualunque, poi l'aggiornamento bidirezzionale avverrà in automatico

## [Costrutti di Controllo](http://www.dacrema.com/Informatica/Costrutti_controllo.htm)  
I costrutti di controllo di un linguaggio di programmazione strutturata sono quei dispositivi sintattici che permettono di combinare tra loro istruzioni elementari creando cosi istruzioni complesse o blocchi di istruzioni, controllando il flusso della loro esecuzione. I costrutti di controllo fondamentali si possono classificare in:  
![](asset/Costrutti_mini.png)
- **Esecuzione in Sequenza**  
    Il modo più semplice per combinare istruzioni tra di loro consiste nell'eseguirle una dopo l'altra, in sequenza. In C, C++ e Java è possibile creare una sequenza o blocco di istruzioni semplicemente scrivendo le istruzioni una di seguito all' altra e racchiudendo questa sequenza tra parentesi graffe.
- **Costrutti Iterativi**  
    I costrutti iterativi servono per eseguire dei cicli, cioè per ripetere un determinato blocco di istruzioni in modo controllato.
    `while`, `do-while`, `for`
- **Costrutti di Selezione**  
    Costrutti di selezione in C, C++ e Java sono rappresentativi di quelli generalmente disponibili in qualsiasi linguaggio di programmazione di alto livello. Possiamo distinguere due tipi fondamentali di costrutto di selezione: 
    `if-else`, `switch`

## `Algoritmo di ordinamento`
Algoritmo utilizzato per ordinare una sequenza di elementi in una determinata disposizione. L'obiettivo dell'algoritmo di ordinamento è di organizzare gli elementi in modo che siano più facili da cercare, accedere e gestire.  
Per citarne alcuni:
- `Bubble Sort`: questo è un algoritmo di ordinamento semplice che funziona confrontando gli elementi adiacenti della lista e scambiandoli se non sono in ordine. L'algoritmo ripete questo processo fino a quando non viene eseguito un passaggio completo senza scambi.
- `Selection Sort`: questo algoritmo di ordinamento seleziona l'elemento più piccolo dalla lista e lo sposta in prima posizione. Successivamente, cerca l'elemento più piccolo nella lista rimanente e lo sposta in seconda posizione, e così via fino a quando l'intera lista non è ordinata.
#### Migliorare:
- `Insertion Sort`: algoritmo di ordinamento che lavora "costruendo" una lista ordinata una elemento alla volta, inserendo ciascun elemento nella giusta posizione. Inizia con una lista vuota e inserisce ciascun elemento nella posizione corretta rispetto agli elementi già presenti nella lista.  
L'Insertion Sort è efficiente per liste di dimensioni relativamente piccole, ma diventa molto lento quando la lista diventa molto grande.  
Il caso peggiore si verifica quando la lista è ordinata al contrario, e il tempo di esecuzione è quadratico, ovvero proporzionale al quadrato del numero di elementi nella lista.
- `Merge Sort`: questo è un algoritmo di ordinamento divide-et-impera che divide la lista in due parti, ordina le due parti separatamente, e quindi le unisce in una lista ordinata. Il processo di suddivisione e ordinamento continua fino a quando ogni parte della lista contiene un solo elemento. A quel punto, le parti ordinate vengono unite utilizzando un algoritmo di "merge", che fonde le due parti ordinate in una singola lista ordinata.
- `Quick Sort`: questo è un altro algoritmo di ordinamento divide-et-impera che sceglie un elemento, chiamato pivot, e divide la lista in due parti, una con elementi minori del pivot e l'altra con elementi maggiori del pivot. L'algoritmo ordina le due parti separatamente e poi le unisce in una lista ordinata.
- `Heap Sort`: questo algoritmo di ordinamento utilizza un heap binario, una struttura dati simile ad un albero binario, per ordinare gli elementi. L'heap binario organizza gli elementi in modo che l'elemento radice sia il più grande, e poi lo sposta alla fine della lista. L'algoritmo ripete questo processo fino a quando tutti gli elementi sono ordinati.