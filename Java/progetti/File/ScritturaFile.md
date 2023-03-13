# Scrittura di File

```md
Interfaccia FileWriter
-----------------------
+ writeFile(filename: String, content: String): void

Classe FileWriterImpl implements FileWriter
--------------------------------------------
- file: File
+ FileWriterImpl(filename: String)
+ writeFile(filename: String, content: String): void

Classe BufferedWriterImpl implements FileWriter
--------------------------------------------------
- fileWriter: FileWriterImpl
- bufferedWriter: BufferedWriter
+ BufferedWriterImpl(filename: String)
+ writeFile(filename: String, content: String): void
```

L'interfaccia FileWriter definisce un metodo writeFile che scrive il contenuto di una stringa in un file dato il nome del file.  
La classe FileWriterImpl implementa questa interfaccia e scrive il file utilizzando la classe java.io.File.  
La classe BufferedWriterImpl estende FileWriterImpl e aggiunge un BufferedWriter che permette di scrivere il file in modo più efficiente.

Come per la lettura del file, l'utilizzo di questa gerarchia di classi e interfacce permette di separare l'implementazione della scrittura del file dalla logica del programma che lo utilizza, facilitando la manutenzione e il testing del codice.

---

### Classe File - Snippet per creare e salvare un nuovo file sul disco rigido:

```java
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class CreazioneFile {
    public static void main(String[] args) {
        try {
            // Creazione dell'oggetto File
            File file = new File("C:/Users/Utente/Documents/nomefile.txt");

            // Verifica se il file esiste già e lo elimina se necessario
            if (file.exists()) {
                file.delete();
            }

            // Creazione del nuovo file
            if (file.createNewFile()) {
                System.out.println("Il file è stato creato con successo.");
            } else {
                System.out.println("Il file non è stato creato.");
            }

            // Scrittura del contenuto nel file
            FileWriter writer = new FileWriter(file);
            writer.write("Questo è il contenuto del file.");
            writer.close();

        } catch (IOException e) {
            System.out.println("Si è verificato un errore durante la creazione del file.");
            e.printStackTrace();
        }
    }
}
```
In questo esempio, viene creato un nuovo oggetto File con il nome "nomefile.txt" nella directory "C:/Users/Utente/Documents/". Il file viene creato tramite il metodo "createNewFile()" della classe File, che restituisce true se il file è stato creato con successo, false altrimenti. Successivamente, viene scritto del testo all'interno del file utilizzando un oggetto FileWriter e il metodo "write()" per scrivere il contenuto.

