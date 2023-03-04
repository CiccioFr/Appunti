# Web Scraping - Estrarre dati da pagine web
Utilizzare una libreria per effettuare richieste HTTP e quindi analizzare il codice HTML restituito per estrarre le informazioni desiderate.

---
## La libreria `Jsoup`
Fornisce una serie di metodi per l'analisi del documento HTML e l'estrazione dei dati dalle pagine web.  
Utilizzare le funzionalità della libreria JSoup per selezionare e manipolare specifici elementi HTML presenti nella pagina web.  
`JSoup` è una libreria specificamente progettata per manipolare documenti HTML, ed è quindi molto più semplice e intuitiva da utilizzare per le operazioni di parsing e scraping HTML rispetto ad [`HttpClient`](#la-libreria-apache-httpclient) (sotto)

## Esempio Semplicistico
Il seguente codice Java scarica l'intero contenuto di una pagina web (tutto il codice HTML della pagina web, inclusi i tag HTML e il testo in essi contenuto).  
Succesivamente estra il testo presente nel documento HTML.

```java
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public class WebScraper {
   public static void main(String[] args) {
      try {
         // Scarica l'intero contenuto della pagina web
         Document doc = Jsoup.connect("https://it.wikipedia.org/wiki/Meccanica_quantistica").get();

         // Estrapola il testo dal documento HTML
         String text = doc.text();

         // Visualizza il testo estratto
         System.out.println(text);
      } catch (Exception e) {
         e.printStackTrace();
      }
   }
}
```
---
## Selezionare gli elementi HTML che contengono il testo del corpo dell'articolo.  

```java
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class WikipediaTextScraper {
    public static void main(String[] args) throws Exception {
        String url = "https://it.wikipedia.org/wiki/Meccanica_quantistica";

        // Ottiene l'intero codice HTML della pagina web (tutto il codice HTML della pagina web, inclusi i tag HTML e il testo in essi contenuto)
        Document doc = Jsoup.connect(url).get();

        // Seleziona gli elementi HTML che contengono il testo del corpo dell'articolo
        Elements articleElements = doc.select("#mw-content-text > div.mw-parser-output > p");

        // Estrae il testo da ciascun elemento HTML e lo stampa sulla console
        for (Element articleElement : articleElements) {
            String articleText = articleElement.text();
            System.out.println(articleText);
        }
    }
}
```
JSoup analizza il codice HTML restituito e quindi seleziona gli elementi HTML che contengono il testo desiderato.  

Il selettore CSS `"#mw-content-text > div.mw-parser-output > p"` viene utilizzato per selezionare gli elementi HTML `<p>` che sono discendenti diretti di un elemento `<div>` con classe `mw-parser-output`, che a sua volta è discendente diretto di un elemento con ID `mw-content-text`.

Infine, il codice estrae il testo da ciascun elemento HTML selezionato utilizzando il metodo text() di JSoup e lo stampa sulla console. 

---
## Snippet per estrarre i link presenti nella pagina web
```java
Elements links = doc.select("a[href]");
for (Element link : links) {
   System.out.println(link.attr("href"));
}
```
Questo snippet utilizza la funzionalità di JSoup per selezionare tutti i tag `<a>` che contengono l'attributo `href`, e quindi stampa sulla console il valore di questo attributo per ciascuno di questi tag.  

Utilizzare questa stessa tecnica per estrarre altri elementi HTML dalla pagina web, selezionandoli con il selettore CSS appropriato.

---
## La libreria `Apache HttpClient`
Per effettuare richieste HTTP

Utilizzo di `Apache HttpClient` per effettuare una richiesta `GET` all'indirizzo web fornito e quindi analisi del codice HTML restituito utilizzando la libreria `JSoup` per estrarre il titolo della pagina

```java
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public class WikipediaScraper {
   public static void main(String[] args) throws Exception {
      String url = "https://it.wikipedia.org/wiki/Meccanica_quantistica";

      // Crea un client HTTP e una richiesta GET per l'URL fornito
      try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
         HttpGet request = new HttpGet(url);

         // Esegue la richiesta GET e ottiene il codice HTML della risposta
         try (CloseableHttpResponse response = httpClient.execute(request)) {
               String html = EntityUtils.toString(response.getEntity());

               // Analizza il codice HTML utilizzando JSoup e ottiene il titolo della pagina
               Document doc = Jsoup.parse(html);
               String title = doc.title();
               System.out.println(title);
         }
      }
   }
}
```

---
## In sintesi, la scelta tra `HttpClient` e `JSoup` dipende dalle esigenze specifiche.
- Se occorrono funzionalità avanzate per effettuare richieste HTTP, gestire gli errori di connessione, definire specifici parametri della richiesta, ecc., allora `HttpClient` può essere la scelta migliore.  
- Se occorrono semplici operazioni di parsing e scraping HTML, `JSoup` è sicuramente più adatto e intuitivo da utilizzare.