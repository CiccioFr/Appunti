# File - Classe concreta

### `File pathname = new File(nomeFile);`
Crea un oggetto di tipo File a partire dal nome del file specificato nella variabile "nomeFile".

In particolare, il costruttore della classe File accetta come parametro una stringa che rappresenta il percorso del file nel file system. Il percorso può essere specificato come un percorso assoluto (ad esempio "C:/Users/username/Desktop/file.txt") o come un percorso relativo (ad esempio "file.txt" per un file che si trova nella stessa directory del file Java in esecuzione).

L'oggetto File rappresenta un file o una directory nel file system e fornisce metodi per accedere alle informazioni sul file o sulla directory (ad esempio il nome, il percorso, la dimensione, la data di creazione e l'ultima data di modifica) e per eseguire operazioni come la lettura, la scrittura o l'eliminazione del file o della directory.

In sintesi, la linea di codice "File pathname = new File(nomeFile);" crea un oggetto File a partire dal nome del file specificato, che può essere utilizzato per accedere alle informazioni sul file o eseguire operazioni sul file stesso.

il file non è necessario che esista quando viene creato l'oggetto File.

Il costruttore della classe File non esegue alcuna operazione di I/O per verificare l'esistenza del file nel file system, ma semplicemente crea un'istanza dell'oggetto File a partire dal nome del file specificato.

Inoltre, se il file specificato nel costruttore non esiste, è comunque possibile utilizzare l'oggetto File per creare il file o per verificare se il file esiste o meno tramite i metodi forniti dalla classe File, come ad esempio i metodi "createNewFile()" o "exists()".

## Il costruttore "File()"

In particolare, la sintassi del costruttore senza argomenti è la seguente:

```java
File file = new File();
```

Questo costruttore crea un oggetto File vuoto, che non rappresenta nessun file o directory nel file system.

In generale, questo costruttore viene utilizzato per creare un'istanza della classe File quando non si conosce ancora il nome del file o della directory che si desidera rappresentare, ma si vuole comunque creare l'oggetto File per poter accedere ai metodi della classe e utilizzarli successivamente per creare o rappresentare un file o una directory specifica.

la classe File fornisce diversi costruttori che accettano parametri per creare un oggetto File a partire da un percorso, un URI o un altro oggetto File. Di seguito sono riportati alcuni esempi:

Costruttore con parametro stringa:
```java
File file = new File("percorso/del/file");
```

Costruttore con parametro URI:
```java
URI uri = new URI("file:///percorso/del/file");
File file = new File(uri);
```

Costruttore con parametro oggetto File:
```java
File file1 = new File("percorso/della/directory");
File file2 = new File(file1, "nomefile.txt");
```

In generale, i parametri accettati dai costruttori della classe File dipendono dal tipo di percorso o di oggetto che si desidera utilizzare per creare l'oggetto File.

---
