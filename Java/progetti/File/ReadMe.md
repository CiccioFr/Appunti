# Gestione di File

Le classi e le interfacce per input e output sono parte della piattaforma Java SE, collocate nel modulo `java.base`, all'interno del package `java.io`.

Richiamabili con la declaration `import java.io.*`

Fornisce input e output di sistema tramite flussi di dati, serializzazione e file system.  

Elenco completo di classi ed interfacce del java.io in
[Documentazione ufficiale Oracle ver.17](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/package-summary.html)

---

## Lettura e scrittura di file
I dati possono essere memorizzati in un file in formato:
- **testo** (sequenza di caratteri, leggibile da esseri umani)
    - es. FileReader | FileWriter
- **binario** (sequenza di byte)
    - es. FileInputStream | FileOutputStream

---

## Classi per Lettura **di testo** da file

Per la lettura di un file di testo, si può utilizzare la classe `FileReader` per ottenere un flusso di input di caratteri (letti uno ad uno) dal file, e poi avvolgerlo con un oggetto `BufferedReader` per leggere le linee di testo in modo efficiente. - Link -> [Difference Between Scanner and BufferedReader Class](https://www.geeksforgeeks.org/difference-between-scanner-and-bufferreader-class-in-java/)

- ### [`java.io.File`](../../CodicePredefinito/File.md) - Importanti caratteristiche ! !
La classe File è una rappresentazione astratta di un file o di una directory. Permette di lavorare a livello più alto, come ad esempio creare un file vuoto, eliminarlo, ricercarlo o rinominarlo.

- ### [`java.util.Reader`](../../CodicePredefinito/Reader.md)

- ### [`java.io.FileReader`](../../CodicePredefinito/FileReader.md)
La classe FileReader permette di leggere, uno alla volta, i caratteri contenuti in un file di testo.

- ### [`java.io.BufferedReader`](../../CodicePredefinito/BufferedReader.md)
La classe BufferedReader è simile alla classe FileReader ma **permette di leggere i caratteri presenti nel file in blocchi**.  
I caratteri letti vengono memorizzati in un buffer temporaneo. Quando i dati vengono richiesti, vengono letti dal buffer, quindi le prestazioni migliorano notevolmente non dovendo ogni volta avere l'ok del sistema operativo per accedere al file system.

- ### `java.util.Scanner`
Alternativa alla classe BufferedReader

### Note
sia la classe `BufferedReader` che la classe `Scanner` possono essere utilizzate per leggere il contenuto di un file in Java. Tuttavia, ci sono alcune differenze tra le due classi:
- `java.io.BufferedReader` è ottimizzata per leggere grandi quantità di dati da un file e utilizza un buffer interno per migliorare le prestazioni di lettura. Inoltre, la classe `BufferedReader` fornisce metodi per leggere il contenuto del file riga per riga.  
Consigliata se si deve leggere il contenuto di un file riga per riga (grandi dimensioni)
- `java.util.Scanner`, d'altra parte, è più flessibile e può essere utilizzata per leggere diversi tipi di dati da un file, come ad esempio interi, float e stringhe. Tuttavia, la classe `Scanner` non è ottimizzata per la lettura di grandi quantità di dati da un file e potrebbe avere prestazioni inferiori rispetto alla classe `BufferedReader`.  
Consigliata si devono leggere diversi tipi di dati da un file.

### ed anche
- `java.nio.file.Path`
- `java.nio.file.Paths`
- `java.nio.file.Files`
- `java.nio.charset.StandardCharsets`

### Vedi esempi di codice per [Lettura File](./LetturaFile.md)

---

## Classi per scrittura **di testo** da file

- ### `java.io.FileWriter`
La classe FileWriter permette di scrivere i caratteri in un file di testo uno alla volta.

- ### `java.io.BufferedWriter`
La classe BufferedWriter è simile alla classe FileWriter ma permette di scrivere i caratteri nel file in blocchi. I caratteri vengono memorizzati temporaneamente in un buffer temporaneo. Periodicamente i caratteri vengono letti dal buffer e scritti fisicamente sul file, quindi, anche in questo caso, le prestazioni migliorano notevolmente.

- ### `Java.io.PrintWriter`
La classe PrintWriter è simile alla classe BufferedWriter ma permette di scrivere nel file stringhe formattate.

### Vedi esempi di codice per [Scrittura File](./ScritturaFile.md)

---

## Classi per Lettura **binaria** (sequenza di byte) 
- FileInputStream

---

## Classi per Scrittura **binaria** (sequenza di byte) 
- FileOutputStream

---

## DA SISTEMARE

- [InputStream](../../CodicePredefinito/InputStream.md)
- InputStreamReader
- [FileLoader](../../CodicePredefinito/FileLoader.md)


un possibile schema alternativo per la lettura di un file in Java:
- `java.io.InputStream`: l'interfaccia di base per tutte le classi di input stream. Fornisce i metodi per leggere byte dallo stream.
- `java.io.Reader`: l'interfaccia di base per tutte le classi di reader. Fornisce i metodi per leggere caratteri dallo stream.
- `java.io.InputStreamReader`: una classe che converte un input stream di byte in un reader di caratteri. Viene utilizzata per leggere file di testo.
- `java.nio.file.Path`: una classe che rappresenta un percorso di file o di directory. Fornisce metodi per accedere alle informazioni sul file e per manipolare il percorso.
- `java.nio.file.Files`: una classe che fornisce metodi statici per la lettura e la scrittura di file. In particolare, il metodo readAllLines(Path path) restituisce tutte le righe di un file di testo come una lista di stringhe.
- `java.util.List`: l'interfaccia per una lista ordinata di elementi. Viene utilizzata per rappresentare le righe di un file di testo lette con il metodo readAllLines() di Files.




public class FileReader extends InputStreamReader
public class InputStreamReader extends Reader
public abstract class Reader implements Readable, Closeable
(public interface Closeable extends AutoCloseable)

public class BufferedReader extends Reader
public abstract class Reader implements Readable, Closeable

public class File implements Serializable, Comparable<File>

---

- http://pages.di.unipi.it/corradini/Didattica/LIP-07/JavaIO/IOfiles/main.html
- https://www.html.it/articoli/creazione-eliminazione-lettura-e-scrittura-di-file-di-testo/