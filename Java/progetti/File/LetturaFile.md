# Lettura di File

## Classi e Interfacce tra le più comuni che possono essere utilizzate per la lettura di file in Java.
### Qui verranno trattate a titolo esemplificativo solo:
- [java.io.BufferedReader](../../CodicePredefinito/BufferedReader.md)
- [java.io.FileReader](../../CodicePredefinito/FileReader.md) (estende [java.util.Reader](../../CodicePredefinito/Reader.md))
- `java.util.Scanner`
- `java.io.File`
### ed anche
- `java.nio.file.Path`
- `java.nio.file.Paths`
- `java.nio.file.Files`
- `java.nio.charset.StandardCharsets`

L'utilizzo di questa gerarchia di classi e interfacce permette di separare l'implementazione della lettura del file dalla logica del programma che lo utilizza, facilitando la manutenzione e il testing del codice.

---

## Le alternative per la lettura di file in Java:

------------------------------------------------

## Classi `FileReader` e `BufferedReader`:
<details><summary> Snippet </summary>

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileReadingExample {
    public static void main(String[] args) {
        String filePath = "path/to/file.txt";
        try {
            Reader fileReader = new FileReader(filePath);
            BufferedReader reader = new BufferedReader(fileReader);
            String linea = reader.readLine();
            while (linea != null) {
                System.out.println(linea);
                linea = reader.readLine();
            }
            reader.close();     // Chiusura
        } catch (IOException e) {
            System.out.println("Si è verificato un errore durante la lettura del file.");
            e.printStackTrace();
        }
    }
}

```
---
</details>

### Le istruzioni:
- La classe `FileReader` apre il file e restituire un oggetto.  
    (`FileReader` estende InputStreamReader che estende Reader)  
- La classe `BufferedReader` legge il contenuto del file.  
    (Il Costruttore `BufferedReader` accetta oggetto Reader, quindi anche FileReader stesso)  
- Il metodo `readLine()` legge una riga alla volta finché non raggiunge la fine del file.  
(il valore restituito sarà null)

In caso di eventuali errori durante la lettura del file, viene gestita l'eccezione di tipo `IOException`, stampando l'output dello [`stack trace`](../../../Termini_e_Concetti/Programmazione.md#stack-trace) sull'output standard di errore. (Ma dubito che chiuda il file, difatti dopo...)

### Con un `blocco finally`
<details><summary> Snippet </summary>

```java
// in alteernativa alla chiusura nel try { .. 
        try { // come sopra
            // senza reader.close(); 
        } catch (IOException e) {
            // Gestione dell'eccezione
            e.printStackTrace();
        } finally {
            try {
                // Chiudiamo il reader
                if (reader != null) {
                    reader.close();
                }
            } catch (IOException e) {
                // Gestione dell'eccezione
                e.printStackTrace();
            }
        }
```
utilizziamo un blocco finally per chiudere il reader, in modo da rilasciare le risorse utilizzate dal nostro programma e garantire che il file sia correttamente chiuso anche in caso di eccezioni.

---
</details>

### Con costrutto `try-with-resources`:
<details><summary> Snippet </summary>

```java
    String filePath = "path/to/file.txt";
    try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
        String line;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
    } catch (IOException e) {
        System.err.format("IOException: %s%n", e);
    }
```
Il costrutto [`try-with-resources`](../../Avanzato/Try-with-resources.md) viene utilizzato per gestire automaticamente la chiusura del BufferedReader alla fine del blocco try, anche in caso di eccezione.

---
</details>

------------------------------------------------

## Classi `File` e `FileReader`:
un'alternativa comune per la lettura di file in Java è l'utilizzo della classe `FileReader`. Ma:
- legge il contenuto di un file carattere per carattere.  
- a differenza di `Scanner` e `BufferedReader`, la classe `FileReader` **non dispone di metodi di lettura avanzati**, come la lettura di una linea intera o di un'intera sequenza di caratteri.

<details><summary> Snippet </summary>

```java
try {
    File file = new File("path/to/file.txt");
    FileReader reader = new FileReader(file);

    int character;
    while ((character = reader.read()) != -1) {
        System.out.print((char) character);
    }

    reader.close();
} catch (IOException e) {
    System.out.println("Si è verificato un errore durante la lettura del file.");
    e.printStackTrace();
}
```
Viene creato un oggetto di tipo `File` che rappresenta il file.  
La lettura del file avviene attraverso un ciclo while che ne legge carattere per carattere il contenuto. La lettura del file si interrompe quando il metodo read() restituisce -1, che indica la fine del file.

---
</details>

------------------------------------------------

## Classi `File` e `Scanner`:
<details><summary> Snippet </summary>

```java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class LeggiFile {
    public static void main(String[] args) {
        try {
            // Creazione dell'oggetto File
            File file = new File("C:/Users/Utente/Documents/file.txt");

            // Lettura del contenuto del file
            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                System.out.println(line);
            }
            scanner.close();
        } catch (FileNotFoundException e) {
            System.out.println("File non trovato.");
            e.printStackTrace();
        }
    }
}
```
Viene creato un oggetto di tipo `File` che rappresenta il file.  
Viene istanziato `Scanner` per la lettura del file.  
Il metodo `hasNextLine()` restituisce true se c'è ancora una riga da leggere, nel qual caso si utilizza il metodo `nextLine()`, posiziona il cursore sulla nuova riga e la restituisce come stringa.  
L'oggetto scanner viene chiuso dopo aver letto tutto il contenuto del file.  
In caso di errore, viene gestita l'eccezione di tipo `FileNotFoundException`, stampando l'output dello [`stack trace`](../../../Termini_e_Concetti/Programmazione.md#stack-trace) sull'output standard di errore (viene stampato un messaggio di errore con la traccia dello stack).

---
</details>

### Snippet con costrutto `try-with-resources`:
<details><summary> Snippet </summary>

```java
    File file = new File("C:/Users/Utente/Documents/file.txt");

    try (Scanner scanner = new Scanner(file)) {
        while (scanner.hasNextLine()) {
            String line = scanner.nextLine();
            System.out.println(line);
        }
    } catch (FileNotFoundException e) {
        System.out.println("File non trovato.");
        e.printStackTrace();
    }
```
Utilizzando il costrutto [`try-with-resources`](../../Avanzato/Try-with-resources.md), è possibile evitare di dover chiudere manualmente le risorse utilizzate e garantire che vengano chiuse correttamente anche in caso di eccezioni.

---
</details>

------------------------------------------------

## Classi `Path` e `Files` con `List`:
<details><summary> Snippet </summary>

```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

public class LetturaFile {
    public static void main(String[] args) {
        Path path = Path.of("path/to/file.txt");
        try {
            List<String> lines = Files.readAllLines(path);
            for (String line : lines) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```
---
</details>

------------------------------------------------

## Classi `Paths` e `Files` e `Charset` / `StandardCharsets` con `List`:
<details><summary> Snippet </summary>

```java
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

public class LetturaFile {
    public static void main(String[] args) {
        try {
            // Leggiamo tutte le righe del file in una lista di stringhe
            Path path = Paths.get("file.txt");
            List<String> lines = Files.readAllLines(path, StandardCharsets.UTF_8);

            // alternativa a sopra con la classe Charset
            // List<String> lines = Files.readAllLines(Paths.get("file.txt"), Charset.defaultCharset());

            // Iteriamo sulla lista di righe lette
            for (String line : lines) {
                // Eseguiamo le operazioni necessarie sulla riga letta
                System.out.println(line);
            }
        } catch (IOException e) {
            // Gestione dell'eccezione
            e.printStackTrace();
        }
    }
}
```
Utilizzo del metodo statico `readAllLines()` della classe `Files` per leggere tutte le righe del file in una lista di stringhe.  
Questo metodo accetta come parametri il percorso del file ed opzionalmente l'encoding da utilizzare per la lettura (nel caso, StandardCharsets.UTF_8). Se il secondo parametro non viene fornito, viene utilizzato l'encoding di default del sistema operativo.  
Una volta ottenuta la lista di righe lette, possiamo iterarla..

---
</details>

------------------------------------------------
