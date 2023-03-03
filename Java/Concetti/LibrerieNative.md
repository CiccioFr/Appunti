# Librerie Native di Java

Le librerie effettivamente native scritte in C o C++ che possono essere utilizzate tramite JNI sono molte e variano a seconda del sistema operativo e dell'hardware sottostante. Alcuni esempi includono:

- Libreria OpenGL per la grafica 3D
- Libreria OpenAL per l'audio
- Libreria libjpeg per la decodifica di immagini JPEG
- Libreria libcurl per il trasferimento di dati tramite HTTP, FTP, SMTP, ecc.
- Libreria libxml per la manipolazione di documenti XML

## Esempio con Java Native Interface (JNI),
Consente ai programmi Java di utilizzare codice scritto in C, C++ o altri linguaggi nativi.

Java Native Interface (JNI) è un framework di programmazione che consente ai programmi Java di interagire con librerie native scritte in altri linguaggi come C o C++. JNI consente di scrivere metodi in Java che chiamano metodi implementati in librerie native, permettendo quindi l'utilizzo di funzionalità e risorse specifiche del sistema operativo.

Per utilizzare JNI, è necessario definire una interfaccia tra il codice Java e quello nativo tramite file di header C che dichiarano le funzioni che saranno utilizzate. Questi file di header C sono poi utilizzati per generare il codice sorgente Java necessario a chiamare le funzioni native.

Per utilizzare JNI, è necessario anche scrivere del codice specifico per la piattaforma, in quanto i formati dei dati e le convenzioni di chiamata delle funzioni native possono variare a seconda del sistema operativo. Una volta scritto il codice nativo, viene compilato in una libreria condivisa, che viene caricata dal programma Java al momento dell'esecuzione.

In sintesi, JNI permette ai programmi Java di accedere alle librerie native e quindi di utilizzare funzionalità e risorse specifiche del sistema operativo, pur mantenendo la portabilità del codice Java. Tuttavia, l'utilizzo di JNI richiede una conoscenza approfondita sia di Java che di C o C++, e una corretta gestione della memoria e delle risorse.

La `Java Native Interface` (`JNI`) ha sia interfacce che classi concrete.  
- Le interfacce JNI sono utilizzate per definire le funzioni native e le firme dei metodi.
- Le classi concrete sono utilizzate per fornire implementazioni di supporto per la chiamata di funzioni native dal codice Java. La classe più comune utilizzata per questo scopo è la classe "Native" del package "sun.misc", che fornisce metodi di supporto per la conversione di tipi di dati Java in tipi di dati C e viceversa.

## Snippet di esempio che mostra come chiamare una funzione C da Java utilizzando JNI:

Supponiamo di avere la seguente funzione in C che prende due interi come input e restituisce la loro somma:

```c
#include <stdio.h>

int addNumbers(int num1, int num2) {
    return num1 + num2;
}
```

Per richiamare questa funzione da Java, dobbiamo definire un'interfaccia Java e implementare un metodo nativo che la utilizzi:

```java
public class ExampleJNI {
    static {
        System.loadLibrary("Example"); // caricamento della libreria nativa
    }
    
    // Dichiarazione del metodo nativo che richiama la funzione C
    public static native int addNumbers(int num1, int num2);

    // Metodo di test per la chiamata alla funzione C
    public static void main(String[] args) {
        int result = addNumbers(3, 5);
        System.out.println("Il risultato è: " + result);
    }
}
```

Infine, occorre compilare la funzione C come libreria con un nome specifico e invocarla dal programma Java:

```bash
gcc -shared -o libExample.so -fPIC Example.c
javac ExampleJNI.java
java ExampleJNI
```
---

