# Libreria `JSoup`

Suto: https://jsoup.org

## `pom.xml`
```xml
<!-- https://mvnrepository.com/artifact/org.jsoup/jsoup -->
<dependency>
    <groupId>org.jsoup</groupId>
    <artifactId>jsoup</artifactId>
    <version>1.15.3</version>
</dependency>
```

## `Declaration`
```java
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
```

## Il metodo `.parse();`

Il metodo `parse()` è un metodo statico della classe JSoup che viene utilizzato per analizzare una stringa di codice HTML e crearne un'istanza della classe Document di JSoup. Il Document rappresenta il documento HTML come un albero di nodi, rendendolo facile da navigare e manipolare.

Il metodo `parse()` accetta come parametro una stringa di codice HTML e restituisce un oggetto Document. Ad esempio, se si vuole analizzare il codice HTML di una pagina web, si può utilizzare il metodo `parse()` di JSoup per creare un Document che rappresenti il codice HTML della pagina.

Ecco un esempio di come utilizzare il metodo `parse()` di JSoup:

```java
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public class HtmlParser {
    public static void main(String[] args) throws Exception {
        String html = "<html><head><title>Titolo della pagina</title></head><body><p>Contenuto del paragrafo.</p></body></html>";

        // Analizza il codice HTML utilizzando JSoup
        Document doc = Jsoup.parse(html);

        // Ottiene il titolo della pagina
        String title = doc.title();
        System.out.println("Titolo della pagina: " + title);

        // Ottiene il contenuto del primo paragrafo
        String firstParagraph = doc.select("p").first().text();
        System.out.println("Contenuto del primo paragrafo: " + firstParagraph);
    }
}
```

In questo esempio, il codice HTML viene memorizzato come una stringa, poi viene analizzato utilizzando il metodo `parse()` di JSoup per creare un oggetto Document. Successivamente, il titolo della pagina e il contenuto del primo paragrafo vengono estratti dal Document.

Il metodo `parse()` di JSoup è molto utile per estrarre informazioni da una pagina web, perché rende il codice HTML facilmente navigabile e manipolabile. Si può utilizzare in combinazione con altri metodi di JSoup, come ad esempio select() per selezionare elementi specifici del codice HTML.