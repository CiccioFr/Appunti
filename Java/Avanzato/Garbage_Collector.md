# Garbage Collector

Il `Garbage Collector` (GC) **è il componente responsabile della gestione automatica della memoria**, ovvero della rimozione degli oggetti non più utilizzati per liberare spazio nella memoria heap.  
Il Garbage Collector è un thread Daemon in esecuzione in background.

La `Garbage Collection` (GC) **è il processo** attraverso il quale il GC analizza la memoria heap per individuare gli oggetti non più utilizzati e marcati per la rimozione, e poi procede alla loro eliminazione **per liberare spazio nella memoria**.

### Più in dettaglio..
Solleva lo sviluppatore dall'aritmetica dei puntatori, ovvero dall'onere della gestione della memoria, affidando al **`Gargbage Collection`** l'automatismo di allocare e rilasciare memoria a seconda delle esigenze del programma.  

La JVM fornisce attualmente quattro diversi **Garbage Collector**, tutti generazionali, ciascuno progettato per soddisfare requisiti diversi. **Java SE seleziona il Garbage Collector più appropriato in base alla classe del computer su cui viene eseguita l'applicazione**.  

- `Serial GC`: utilizza un solo thread per eseguire le operazioni di garbage collection, quindi è adatto per applicazioni a basso carico.
- `Parallel GC`: utilizza più thread per eseguire le operazioni di garbage collection, migliorando le prestazioni rispetto al Serial GC.
- `CMS` (`Concurrent Mark and Sweep`) GC: esegue la maggior parte delle operazioni di garbage collection in modo concorrente, minimizzando il ritardo dell'applicazione.
- `G1` (`Garbage-First`) GC: utilizza una strategia di allocazione della memoria a blocchi e divide la memoria in regioni. In questo modo, può gestire grandi quantità di memoria e distribuire il lavoro di garbage collection su più thread in modo efficiente.
- `Z GC`: utilizza una tecnologia di accesso alla memoria diretto per migliorare le prestazioni e ridurre il ritardo durante la garbage collection.


---
Il **Garbage Collector** (**GC**) gestisce automaticamente le richieste di allocazione di memoria dinamica dell'applicazione. (è la tecnologia)  
La **Garbage Collection** automatica **è un processo** di osservazione della memoria Heap, che identifica o meglio “marchia” (si parla infatti di marking process) gli oggetti irraggiungibili li distrugge e compatta la memoria liberata per un uso successivo più efficiente.  
metodologia denominata Garbage Collection Generazionale.  
http://losviluppatore.it/java-la-garbage-collection/  
https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html  

## [UniSa](http://www.di-srv.unisa.it/~ads/corso-security/www/CORSO-9900/java/mirror/mokabyte/garbagecollector.htm)  
Il garbage collector è un meccanismo che tiene traccia delle locazioni di memoria utilizzate e le libera solo quando non sono effettivamente più necessarie. Java non permette a un programmatore di accedere ad una qualsiasi locazione di memoria come avviene in altri linguaggi.  In Java non esistono puntatori con le stesse caratteristiche di quelli del C/C++. I puntatori in Java sono solo dei riferimenti ad oggetti allocati dinamicamente su uno heap e distrutti attraverso un meccanismo automatico di garbage collection. Le specifiche della Java Virtual Machine (JVM) non danno informazioni particolareggiate sul procedimento di garbage collection che viene utilizzato. In questo articolo, pertanto, verranno analizzate le più comuni tecniche usate nelle fasi principali di determinazione degli oggetti da eliminare, e nella conseguente operazione di compattamento dell'heap.

### Cos'è il garbage collector  
Nei linguaggi object-oriented la creazione di un oggetto consiste di due fasi principali: allocazione ed inizializzazione della memoria. In Java esistono due categorie di tipi di dato e l'allocazione della memoria è gestita in modo diverso per ognuna di esse. Una classe è quella dei tipi primitivi come char, int, boolean, float, byte, short, long, double. Essi sono allocati direttamente sullo stack o in un'istanza. Tutti gli altri tipi di dati sono sottoclassi di java.lang.Object allocati dinamicamente all'interno del programma per mezzo dell'operatore new. Quando la JVM incontra un'istruzione new alloca la memoria e richiama il costruttore per inizializzarla. La zona di memoria che contiene gli oggetti si chiama Java heap e sarà il campo di azione del garbage collector.

Per costruzione Java non offre al programmatore la possibilità di deallocare gli oggetti in modo esplicito. Quando un oggetto non è più referenziato, ovvero quando non ci sono più oggetti che lo utilizzano, può essere distrutto. Il garbage collector è una speciale routine di sistema che scandisce il Java Heap liberando la memoria occupata dagli oggetti non più referenziati.

Una conseguenza immediata del continuo processo di allocazione e deallocazione è la frammentazione della memoria. Un buon garbage collector, quindi, adotterà efficaci contromisure. Esso risparmia ai programmatori la fatica di gestire in modo manuale la memoria ed elimina in partenza numerosi possibili errori di programmazione. Un potenziale svantaggio è rappresentato dalla diminuzione delle prestazioni dovuta al lavoro extra che il calcolatore effettua. In Java il garbage collector è un vero e proprio thread in esecuzione parallelamente al programma e, anche se la sua priorità è la minima (in Java le priorità vanno da 1 a 10) e quindi si avvia solo quando non ci sono altri thread attivi, è un processo da considerare in termini di tempo CPU. Esso è considerato un processo Demon in quanto non è gestito dal programmatore ed è sempre presente in background.

Ogni algoritmo di garbage collection deve fare tre cose:

Determinare l'oggetto che deve essere eliminato (garbage detection);

Liberare la corrispondente zona di memoria e renderla disponibile al programma;

Combattere la frammentazione dello heap.

Vediamo per ciascun compito le possibili implementazioni.

Garbage detection
La garbage detection, ovvero la determinazione degli oggetti da eliminare, è la prima operazione svolta dal garbage collector. Esso deve determinare quali oggetti sullo heap possono essere ancora utilizzati e quali no. Deve determinare, in poche parole, di quali oggetti possiede un riferimento. A tale scopo si definiscono le root (radici) che sono gli oggetti persistenti dell'applicazione ovvero quelli sempre presenti durante l'esecuzione del programma. Nel caso di un'applicazione Java una root è rappresentata dall'oggetto a cui appartiene il main(). Nel caso degli applet avviene lo stesso e la main() è eseguita dal browser che crea una istanza della JVM. Quali altri oggetti siano considerati root dipende dalla implementazione del garbage collector: usualmente si considerano root anche quegli oggetti il cui scope coincide con il corpo della main.

Ad ogni altro oggetto si assegna la proprietà di reachability (raggiungibilità) dalla root. Un oggetto si dice raggiungibile se esiste un percorso di riferimenti dalla root, che permette di indirizzare l'oggetto stesso. È evidente a questo punto che gli oggetti raggiungibili sono quelli referenziabili e quindi vivi, mentre gli altri sono quelli da eliminare. Inoltre, oggetti raggiungibili da oggetti vivi sono pure vivi e quindi da conservare.

Le root non contengono solamente i riferimenti ad oggetti sullo heap, ma spesso anche riferimenti alle variabili interne di tipo primitivo che sono allocate sullo stack (ogni thread ne possiede uno).

Alcune implementazioni di garbage collector non fanno distinzione tra i riferimenti dalla root ad oggetti e riferimenti a variabili di tipo primitivo. Questo tipo di garbage collector è detto conservativo e, ad una maggiore semplicità di implementazione, contrappone una minore efficienza dovuta alla non eliminazione di quegli oggetti che potrebbero essere riferimenti a variabili di tipo primitivo.

Come detto un oggetto deve essere eliminato (garbage collected) se non è più raggiungibile a partire da una root. Serve quindi un algoritmo che permetta di determinare la proprietà di raggiungibilità di un oggetto. Le tecniche più comuni sono reference counting e tracing.

Reference Counting
Quella del reference counting è stata una delle prime tecniche utilizzate per la determinazione di raggiungibilità di un oggetto da una root. Ad ogni nuovo oggetto creato, viene associato un contatore inizializzato ad 1. Il contatore memorizza, in ogni istante, il numero di riferimenti all'oggetto corrispondente. Se viene creato un nuovo riferimento ad un oggetto, il relativo contatore viene incrementato, mentre se l'oggetto esce dal suo scope oppure al riferimento è associato un nuovo valore, il contatore viene decrementato. Per determinare se un oggetto debba essere eliminato oppure no, il garbage collector dovrà semplicemente verificare se il contatore relativo all'oggetto è nullo. Se il contatore è nullo, l'oggetto non possiede riferimenti e dunque può essere eliminato. L'eliminazione di un oggetto comporta il decremento di tutti i contatori ad esso relativi. Il vantaggio di questo algoritmo sta principalmente nella sua semplicità e compattezza. Uno svantaggio, invece, è l'impossibilità di determinare riferimenti ciclici. Per ciclo di riferimenti intendiamo due o più oggetti che si referenziano l'uno con l'altro (Figura 1). Ad esempio, gli oggetti di una lista concatenata in cui ogni oggetto mantiene solamente un riferimento al precedente e al successivo. Per questi oggetti il contatore non sarà mai a 0 e la catena delle eliminazioni non avrà mai inizio, persino se gli oggetti non sono raggiungibili dalla root. Inoltre c'è da considerare l'overhead dovuto all'incremento ed al decremento di un contatore e lo spazio per la memorizzazione. Per questi motivi il reference counting non è molto utilizzato.

Il tracing
La tecnica del tracing è concettualmente molto semplice e si basa sulla definizione stessa di raggiungibilità. Essa consiste nel prendere come riferimento gli oggetti root e, partendo da essi, marcare tutti gli oggetti collegati tra loro da un riferimento. Per marcare gli oggetti si può utilizzare un bit oppure una mappa distinta. Al termine di questa operazione, gli oggetti raggiungibili saranno quelli marcati, mentre gli altri non sono più referenziati e quindi dovranno essere eliminati. L'algoritmo di tracing più comune si chiama mark and sweep (marca e butta via). Il nome si riferisce alle due fasi con cui il garbage collector agisce. Nella prima fase (mark) il GC percorre l'albero dei riferimenti e segna ciascun oggetto che incontra. Nella fase di sweep gli oggetti non marcati vengono eliminati e la memoria messa a disposizione del programma.

A differenza della tecnica del reference counting in cui il costo dell'algoritmo è proporzionale all'ammontare del lavoro eseguito dal programma (ogni volta che si alloca/dealloca un oggetto bisogna creare-incrementare/decrementare il contatore), la tecnica del tracing è proporzionale alla dimensione della memoria ed è sicuramente più efficiente.

Tecniche di deframmentazione
Altro compito del garbage collector è quello di combattere la frammentazione dell'heap. Essa è conseguenza del continuo susseguirsi delle operazioni di allocazione e deallocazione di memoria, che si verificano durante l'esecuzione di un programma. Quando un oggetto viene rimosso la relativa memoria sull'heap viene liberata lasciando un "buco". E non sempre questi spazi possono essere completamente riempiti da nuovi oggetti.

Se il garbage collector non prendesse adeguate contromisure un oggetto potrebbe non essere allocato perché manca una serie di locazioni successive che lo contengano. Ciò avverrebbe anche se il totale della memoria libera fosse più che sufficiente a contenerlo.

Le tecniche di deframmentazione più comunemente utilizzate sono il compacting (compattazione) ed il copying (copia). Entrambe consistono fondamentalmente nello spostamento degli oggetti.

Compacting
Il metodo di compacting (Figura 2) sposta tutti gli oggetti validi verso un estremo dello heap in modo tale che l'altra parte dello heap venga ad essere costituita da memoria valida per l'allocazione degli oggetti. Tutti i riferimenti all'oggetto spostato devono poi essere aggiornati alla nuova locazione. Quest'ultimo passo può costituire un problema di efficienza per cui si rende il procedimento più semplice aggiungendo un livello di indirizzamento indiretto. Invece di fare riferimento direttamente agli oggetti sullo heap, si utilizza una tabella dei riferimenti. I valori in essa contenuti, fanno riferimento agli oggetti sullo heap. Quando un oggetto è spostato dalla sua posizione iniziale, basterà modificare il relativo valore sulla tabella. Tutti i riferimenti all'oggetto nel programma in esecuzione saranno relativi al valore sulla tabella, che sarà sempre lo stesso. Questo procedimento semplifica il lavoro di deframmentazione, ma aggiunge un overhead ad ogni accesso.
 

Copying
La tecnica del copying consiste nel copiare tutti gli oggetti in una nuova area di memoria. Quando gli oggetti sono spostati nella nuova area, vengono posizionati l'uno di seguito all'altro. A questo punto la vecchia area di memoria è libera. Il vantaggio di questa tecnica consiste nella sua perfetta integrazione con il metodo di tracing in quando non appena un oggetto viene marcato, può essere copiato nella nuova area. Gli oggetti che non vengono marcati resteranno nell'area vecchia e quindi automaticamente eliminati. Con l'utilizzo di questa tecnica le fasi di mark e sweep avvengono contemporaneamente. Durante la fase di mark i nuovi oggetti sono copiati nella nuova area, ma viene mantenuto un riferimento ad essi nell'area vecchia. In questo modo gli oggetti incontrati successivamente nella fase di tracing, dispongono del riferimento al nuovo oggetto.

Una comune tecnica di copying si chiama stop and copy. Essa consiste nel dividere l'heap in due parti di cui solamente una è utilizzata in un determinato istante. Gli oggetti sono allocati in una regione fino a che non vi è più spazio a disposizione. A questo punto l'esecuzione del programma si ferma e l'heap è copiato nell'altra regione. Gli oggetti validi sono copiati nell'altra regione non appena li si incontra nella fase di mark. Il copying richiede una quantità di memoria doppia.
 

Strumenti di Java
Fin qui abbiamo visto le tecniche utilizzabili dal garbage collector. Nessuna di queste viene espressamente consigliata dalle specifiche della JVM. È ovvio, però, che implementando una JVM qualche scelta deve essere fatta. Le implementazioni fornite dalla Sun utilizzano una tecnica di garbage collection di tipo mark and sweep conservativo (solamente per oggetti locali). La conoscenza del tipo di tecnica non deve comunque interessare al programmatore in quanto la portabilità di Java implica l'indipendenza dalla implementazione della JVM e quindi dalla tecnica di garbage collection utilizzata. Vediamo comunque che possibilità ha il programmatore di interagire con il processo di garbage collection. Java è stato, per motivi di sicurezza, progettato in modo da non fornire gli strumenti necessari alla deallocazione esplicita della memoria. Esso permette però, di invocare direttamente l'esecuzione del garbage collector attraverso i metodi static System.gc() e Runtime.gc(). L'utilità di queste istruzioni è quella di assicurare che il garbage collector venga eseguito nell'istante giudicato migliore dal programmatore piuttosto che secondo regole legate al sistema in cui la JVM è presente. Per esempio, si potrebbe desiderare di eseguire il garbage collector prima di entrare in una sezione di codice in cui si fa un elevato utilizzo della memoria, oppure quando si è in una fase di pausa in cui si attende, per esempio, il verificarsi di un qualche evento. Si consideri comunque che l'esecuzione del metodo gc() richiede un certo tempo e dipende da fattori quali la dimensione dell'heap e la velocità del processore. Se a un oggetto sono associate altre risorse oltre alla memoria, per esempio file aperti o connessioni socket di cui si è perso l'ultimo riferimento, Java fornisce al programmatore un modo per liberarle. La tecnica si chiama finalization.

In ogni classe si definisce un metodo finalize, privo di argomenti e simile al distruttore del C++. Un istante prima che l'oggetto venga eliminato dal garbage collector, la JVM lo richiamerà per eliminare qualsiasi risorsa rimanente. Se la tecnica utilizzata è quella di mark and sweep, il metodo finalize() viene richiamato nella fase di sweep prima di liberare la memoria relativa all'oggetto.
 

Garbage Collection di oggetti remoti
Dalla versione 1.1, Java dispone della Remote Method Invocation API che permette di realizzare applicazioni distribuite attraverso l'invocazione di metodi remoti. Anche in un sistema distribuito è utile un meccanismo che permetta di liberare la memoria dagli oggetti client non più referenziati. In questo contesto, l'oggetto client è quello che invoca il metodo sull'oggetto server. La tecnica utilizzata dal garbage collector di RMI è quella con reference counting. Un oggetto sarà eliminato se non è più referenziato né da oggetti locali né da oggetti client su JVM remote. Il runtime di RMI manterrà un contatore per ogni oggetto client remoto incrementandolo per ogni nuovo riferimento e diminuendolo se necessario. Il garbage collector del RMI prevede anche l'esecuzione di particolari metodi, sia nella parte server che client, in corrispondenza della cancellazione del riferimento (una cosa simile a finalize).

Conclusioni
Le specifiche della JVM non danno indicazioni sul tipo di garbage collector da utilizzare, ma dicono solamente che ciascun oggetto Java deve essere allocato su una memoria che si chiama Java heap e che deve essere sottoposto periodicamente alla operazione di garbage collection. Si afferma anche che il programmatore Java non può in nessun modo decidere di deallocare una particolare zona di memoria.
In questo articolo abbiamo descritto le principali tecniche utilizzabili dal garbage collector per liberare la memoria occupata da oggetti non più referenziati, sia in sistemi locali che distribuiti. Infine abbiamo visto come in genere viene affrontato il problema della frammentazione dello heap e come da programma si possa interagire con il garbage collector.
 
 

Bibliografia

[1] "The Java Virtual Machine Specification", JavaSoft Sept 97.
[2] "Java in a NutShell", 2nd Edition David Flanagan, O'Reilly.
[3] "Java Garbage Collected Heap", JavaWorld (http://www.javaworld.com), Luglio 1996.
[4] "The Impact of Garbage Collection on Java Programs", JavaCat Gennaio 91.
[5] "The Electric Communities Distributed Garbage Collector", http://www.communities.com.
[6] "Mark-sweep vs. copying collection and asymptotic complexity", (ftp://parcftp.xeros.com).
[7] "Hacking Java", Mark Wutka, QUE 1996.
[8] "Java per esempi", J.R.Jackson, A.McClellan, 1997, Mondadori Informatica.
[9] "Java Threads", S.Oaks, H.Wong, 1997 O'Reilly.
[10] "Java for C/C++ Programmers", M.C.Daconta, 1996 Wiley.