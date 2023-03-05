# Apache HttpClient

## HttpClient è incluso nella JDK a partire dalla versione 11! è possibile utilizzarlo senza dover importare librerie esterne

Sito: https://hc.apache.org/httpcomponents-client-5.2.x/

## `pom.xml`
```xml
<!-- https://mvnrepository.com/artifact/org.apache.httpcomponents/httpclient -->
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpclient</artifactId>
    <version>4.5.13</version>
</dependency>
```

## `Declaration`
```java
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.client.methods.CloseableHttpResponse;
```

Libreria predefinita di Java per inviare richieste HTTP e ricevere le relative risposte. Fornisce un'implementazione completa del protocollo HTTP/1.1 e supporta anche HTTP/2.  
La classe principale in questa libreria è HttpClient, che viene utilizzata per inviare richieste HTTP e ottenere risposte.

HttpClient fornisce diverse opzioni di configurazione per personalizzare il comportamento delle richieste HTTP, come ad esempio la gestione dei timeout, il supporto di autenticazione e l'uso di proxy. Inoltre, la libreria supporta anche la gestione dei cookie e la compressione delle risposte.

HttpClient è stata introdotta in Java 11, sostituendo la vecchia classe HttpURLConnection e offrendo una API più moderna e semplice da utilizzare. Grazie alle sue funzionalità avanzate e alla sua facilità d'uso, HttpClient è diventata una delle librerie più utilizzate per gestire le richieste HTTP in Java.


## Librerie strettamente correlate:
- `Apache HttpComponents`:  
    Include sia `HttpClient` che `HttpCore`  
    Fornisce un set completo di componenti HTTP client/server per Java. `HttpClient` si basa su `Apache HttpComponents` e fornisce una facile integrazione con esso.
- `Jackson`:  
    Libreria per la gestione di JSON, può essere utilizzata insieme ad `HttpClient` per la deserializzazione di JSON restituito dalle richieste HTTP.
- `Gson`:  
    Libreria Java sviluppata da Google per la conversione di oggetti Java in formato JSON e viceversa. È leggermente più facile da usare rispetto a `Jackson`, ma può essere meno performante in alcune situazioni.
- `Log4j`:  
    Libreria di logging che può essere utilizzata per la gestione dei log di `HttpClient` e di altre librerie collegate.
- `JUnit`:  
    Libreria di testing che può essere utilizzata per testare le chiamate HTTP effettuate con `HttpClient`.
- `HttpCore`  
    Fornisce le funzionalità di basso livello per l'implementazione dei protocolli HTTP e le funzionalità di rete necessarie per supportarli. È utilizzata come componente fondamentale di `HttpClient` per fornire funzionalità di rete robuste e affidabili. `HttpCore` offre un insieme di API per la gestione delle connessioni, la gestione delle richieste e delle risposte, la codifica e decodifica dei messaggi HTTP e altre funzionalità utili per lo sviluppo di applicazioni HTTP.