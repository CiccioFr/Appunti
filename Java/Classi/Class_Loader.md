# [Class Loader](http://www.di-srv.unisa.it/~ads/corso-security/www/CORSO-9900/java/mirror/mokabyte/clasload.htm)  
## Caricamento dinamico delle classi in Java

messo a disposizione da Java per personalizzare il caricamento dell classi a run time

Java permette di costruire applicazioni estendibili dinamicamente, nel senso che un'applicazione è in grado di caricare, a tempo di esecuzione, nuovo codice e di eseguirlo, incluso del codice che nemmeno esisteva quando l'applicazione è stata scritta.

Java infatti effettua il caricamento dinamico delle classi, cioè carica le informazioni relative alle classi durante l'esecuzione del programma. Di questo caricamento si occupa un oggetto ClassLoader, una classe messa a disposizione da Java. Un ClassLoader si occupa quindi di importare i dati binari che definiscono le classi (e le interfacce) di un programma in esecuzione. Ad esempio il metodo forName() di classe Class (si tratta di un metodo static) prende come parametro una stringa che specifica un nome di classe e carica tale classe nel programma in esecuzione, restituendo un oggetto Class relativo alla classe appena caricata. Se tale metodo non riesce a trovare la classe lancia un'eccezione ClassNotFoundException. Dell'oggetto Class così ottenuto si può richiamare il metodo newInstance() che creerà una nuova istanza di tale classe.

Ad esempio si potrebbe creare una nuova classe solo se è verificata una certa condizione; se tale condizione non verrà verificata, tale classe non sarà mai caricata in memoria:

```Java
if( cond ) {
    try {
            Class c = Class.forName( "myPack.myClass" ) ;
            Object o = c.newInstance() ;
            ...
    } catch ( ClassNotFoundException e ) {
            e.printStackTrace() ;
    }
}
```

Class loader personalizzato

Nella Java Virtual Machine è presente il cosi detto class loader primordiale che viene utilizzato per caricare le classi dal file system locale (comprese quelle delle API di Java). Tale class loader fa parte della Java Virtual Machine ed è quindi implementato in C. Il comportamento di questo class loader di default sarà quello di cercare un file .class relativo alla classe da caricare nel file system locale, nei path indicati nella variabile d'ambiente CLASSPATH.

Tramite il meccanismo del class loader un'applicazione Java, come già detto, viene estesa dinamicamente, cioè a run time; durante l'esecuzione un'applicazione può determinare di quali ulteriori classi ha bisogno e caricarle attraverso il class loader.

Un'applicazione Java può installare un class loader differente da quello primordiale, per caricare le classi in modo personalizzato (ad esempio scaricandole dalla rete).

Il metodo della classe ClassLoader utilizzato per caricare in memoria una classe è loadClass, passandogli il nome di tale classe come parametro. Tale metodo è astratto, quindi ne deve essere fornita un'implementazione nelle classi derivate (cioè nei class loader personalizzati). All'interno di tale metodo sarà richiamato il metodo defineClass, passandogli i dati binari della classe (un array di byte). Tali dati binari corrispondono al contenuto del file .class di tale classe. Al termine loadClass resituirà un oggetto di classe Class.

Esistono due versioni (in overloading) di questo metodo:
```Java
public Class loadClass(String className) 
    throws ClassNotFoundException {...}

public synchronized Class loadClass(String className, boolean resolveIt)
    throws ClassNotFoundException {...}
```

Il booleano resolveIt è un flag per indicare se le classi referenziate dalla classe che si sta caricando devono essere risolte (cioè se devono essere caricate a loro volta). Il valore di default è true, e viene settato a false solo durante le chiamate ricorsive interne.

Java permette anche di scrivere un ClassLoader personalizzato, derivando da questa classe. In questo modo si possono caricare le classi in modo personalizzato, ad esempio cercandole in una certa directory del file system, o da una archivio personalizzato, o ancora, cosa più interessante, scaricandole dalla rete.

È importante che un class loader si mantenga una tabella con le classi già caricate in quanto si deve sempre restituire lo stesso oggetto Class per le classi con lo stesso nome, altrimenti la JVM penserà che ci siano due classi diverse con lo stesso nome, e lancerà un'eccezione. Questo è fondamentale anche perchè loadClass sarà richiamato ricorsivamente durante la risoluzione di una classe.

Si tenga presente che la JVM considera trusted (fidate) le classi caricate attraverso il class loader primordiale, e non applica loro restrizioni di sicurezza; all'interno di loadClass si dovrebbe quindi sempre tentare di caricare la classe col class loader primordiale, e solo se questo tentativo fallisce, caricare la classe in modo personalizzato.

Un'importante proprietà del meccanismo dei class loader è: le varie classi riescono a ``vedere'' (cioè ad accedere) solo alle classi caricate col loro stesso class loader. Java permette quindi di creare name space multipli. Per ogni class loader la JVM mantiene un name space diverso, contenente i nomi delle classi caricate con quel class loader.

Un'ulteriore proprietà che verrà sfruttata è: quando una classe A (già caricata in memoria) si riferisce ad un'altra classe B, non ancora caricata in memoria, la JVM cercherà di caricare la classe B con lo stesso class loader con cui era stata caricata la classe A.

Quindi un class loader personalizzato ottiene la possibilità di caricare una certa classe prima del class loader primordiale.

Passi da eseguire per caricare una classe

Ogni volta che un'applicazione carica una classe attraverso un class loader personalizzato, si espone a dei rischi: Java fornisce alle classi appartenenti allo stesso pacchetto particolari privilegi di accesso, non concessi alle classi esterne al package; caricare quindi una classe che si dichiara appartenente al package java è rischiosissimo in quanto tale classe, in base ai suddetti privilegi, potrà violare diverse restrizioni di sicurezza. Infatti le classi appartenenti al package java, essendo le classi definite da Java, possono praticamente accedere a tutte le risorse del sistema.

I passi che dovrebbero essere eseguiti all'interno del metodo loadClass sono i seguenti:

- Controllare se la classe richiesta è già stata caricata, ed in tal caso restituire l'oggetto memorizzato nella tabella delle classi caricate.
- Cercare di caricare la classe dal file system locale, tramite il class loader primordiale.
- Cercare di caricare la classe dal proprio repository (una tabella, scaricando i dati dalla rete, ecc...).
- Richiamare defineClass coi dati binari ottenuti.
    Eventualmente risolvere la classe tramite il metodo resolveClass.
- Restituire l'oggetto classe al chiamante.

La chiamata del metodo resolveClass provoca anche la verifica del byte code della classe (in cerca di possibili sequenze di azioni non permesse).

Una volta ottenuto l'oggetto Class da loadClass è possibile utilizzare il metodo di Class, newInstance, per creare un'istanza (cioè un oggetto) di tale classe. Tipicamente le azioni che saranno svolte sono:

```Java
MyClassLoader cl = new MyClassLoader(...) ;
Class c = cl.loadClass( ``MyClass'' ) ;
Object o = c.newInstance() ;
```

newInstance restituisce un Object, quindi, per poter utilizzare tale istanza come oggetto di classe MyClass, si dovrà effettuare un cast esplicito:

```Java
( ( MyClass )o ).myMethod() ;
```

Purtroppo questo provocherà una ClassCastException, Questo avviene perchè:

solo il class loader cl è a conoscenza della nuova classe appena creata (caricata)
due classi sono considerate castable solo se hanno una classe in comune
per quanto già detto classi caricate con class loader diversi appartengono a name space diversi.

Per risolvere il problema si deve fare in modo che la classe caricata derivi da una classe (o implementi un'interfaccia) caricata dal file system locale (il trusted repository).

Il meccanismo di utilizzare un class loader personalizzato è utilizzato dai browser per gestire le applet (applicazioni grafiche scritte in Java, inserite all'interno di pagine web). Quando viene aperta una pagina web contenente un'applet Java, tale applicazione viene mandata in esecuzione, e al momento che è necessaria una classe (che non sia una classe standard di Java), il class loader personalizzato scaricherà tale classe dalla rete (chiedendola all'host da cui è stata scaricata la applet).

IMPORTANTE: Siccome caricare codice dalla rete può portare problemi di sicurezza, le applet non possono utilizzare un class loader personalizzato.

Caricamento di una classe

L'approcio di caricare una classe in memoria solo quando serve ottimizza l'utilizzo della memoria, in quanto solo le classi effettivamente utilizzate da un'applicazione saranno caricate in memoria. È bene precisare che la dichiarazione di una variabile senza istanziamento

```Java
myClass myVar;
```

non provoca il caricamento della classe myClass in memoria: questo avverrà solo quando un oggetto di tale classe sarà creato (cioè quando la variabile sarà istanziata):

```Java
myVar = new myClass();
```

oppure quando si fa riferimento ad un metodo o ad un membro statico di tale classe (se ce ne sono).
Questa tecnica è simile alla gestione della memoria col metodo copy-on-write utilizzata nei sistemi operativi moderni (come ad esempio Linux). Tuttavia questa tecnica si rivela molto inefficiente, nel caso si carichino le classi dalla rete, a causa dei numerosi accessi alla rete: sarebbe meglio scaricare, con un solo accesso, tutte le classi dell'applicazione. Probabilmente qualcuna di queste classi non verrà mai utilizzata (e quindi ci sarà un piccolo spreco di memoria), ma si risparmierà molto tempo.

Del resto questa soluzione è stata adottata anche dalla Sun: è possibile inserire tutti i file .class di una certa applet in un unico file compresso (un file .jar) e quando un browser dovrà eseguire tale applet scaricherà l'intero file e via via che necessiterà di caricare una classe, la estrarrà da tale file (caricato in memoria).

Esempio di Class Loader (MyClassLoader)
In questo esempio vedremo l'implementazione di un semplice class loader che permetterà di caricare le classi da una certa directory, specificata nel costruttore del class loader. I files potranno avere un'estensione diversa da .class (ovviamente il contenuto dovrà comunque essere quello di un file .class Java), anche questa sarà specificata al costruttore. Il path specificato potrà essere relativo, ed in tal caso verrà inteso relativo al CLASSPATH.

L'idea è quella di sfruttare questo class loader per caricare classi contenute in file con estesione diverse da quella standard (per un motivo o per un altro), e/o contenute in una directory non specificata nel CLASSPATH. L'esempio è puramente dimostrativo, in quanto non vi è uno vero e proprio scopo di utlizzo pratico. E comunque il class loader presentato è semplice da modificare, e senz'altro dovrebbe aiutare a capire il funzionamento del caricamento delle classi in Java.

Vediamo il codice del class loader, in particolare vediamo subito il metodo loadClass:

```Java
public synchronized Class loadClass(String className, boolean resolveIt)
    throws ClassNotFoundException {
    Class result;
    byte  classData[];

    System.out.println("Caricamento della classe : "+className);

    /* Prima si controlla la cache */
    result = (Class)classes.get(className);
    if (result != null) {
        System.out.println("Utilizzata la copia nella cache.");
        return result;
    }
```

Per prima cosa si controlla se la classe richiesta è già stata caricata (se è presente nella tabella delle classi caricate da questo class loader), ed eventualmente si restituisce tale copia.

```Java
/* Prima si prova col primordial class loader */
try {
    result = super.findSystemClass(className);
    System.out.println("Classe di sistema (CLASSPATH)");
    return result;
} catch (ClassNotFoundException e) {
    System.out.println("Non e' una classe di sistema.");
    if ( className.startsWith( "java.") ) {
        System.out.println("Classe pericolosa : " + className ) ;
        System.out.println( "Caricamento abortito" ) ;
        throw new ClassNotFoundException();
    }
}
```

Prima si cerca di caricare la classe col class loader primordiale; se il tentativo fallisce, prima di andare avanti si controlla che la classe non si dichiari appartenente al pacchetto java, per i problemi di sicurezza sopra esposti.

```Java
        /* poi si prova a caricare la classe dal path specificato */
        classData = getClassBytes(className);
        if (classData == null) {
            throw new ClassNotFoundException();
        }

        /* viene eseguito il parsing, e costruito l'oggetto class  */
        result = defineClass(className,classData, 0, classData.length);
        if (result == null) {
            throw new ClassFormatError();
        }

        if (resolveIt) {
            resolveClass(result);
        }

        /* Si aggiorna la cache */
        classes.put(className, result);
        System.out.println("Classe caricata : " +className);
        return result;
    }
}
```

Se non ci sono problemi si provvede a caricare la classe dal file con l'estensione specificata, e nel path specificato, tramite la funzione getClassBytes (illustrata successivamente); i byte caricati vengono passati a defineClass che provvede a effettuare il parsing, e a creare l'oggetto Class. Eventualmente la classe viene risolta, se il valore del booleano è true.  Come si vedrà in realtà non viene chiamato il metodo loadClass sopra illustrato, ma la seguente versione:

```Java
/* Questa e' la versione chiamata */
public Class loadClass(String className) throws ClassNotFoundException {
    return (loadClass(className, true));
}
```

che richiama la prima versione di loadClass col booleano resolveIt a true. Nelle chiamate ricorsive tale booleano sarà gestito automaticamente.

Il metodo getClassBytes provvede a caricare il contenuto del file .class (che come si è detto può avere un'estensione diversa) cercandolo nel path specificato.

```Java
/* Carica il contenuto di un file .class */
private byte getClassBytes(String className)[] {
    System.out.println("Lettura dati da file per la classe "+className);
    byte result[];
    try {
        result = loadClassBytes( className ) ;
        return result;
    } catch (Exception e) {
        return null;
    }
}

protected byte[] loadClassBytes( String className )
    throws IOException {
    String fileSeparator = System.getProperty( "file.separator" ) ;
    className = className.replace( '.', fileSeparator.charAt(0) ) +
        "." + extension ;
    System.out.println( "Nome file : "" + className ) ;
    String classpath = System.getProperty( "java.class.path" ) ;
    StringTokenizer st = new StringTokenizer( 
        classpath, System.getProperty("path.separator") ) ;
    File classFile = null ;
    File dir = null ;
    while( st.hasMoreTokens() ) {
        dir = new File( st.nextToken() + fileSeparator + path ) ;
        System.out.println( "directory : "" + dir ) ;
        classFile = new File( dir, className ) ;
        if ( classFile.exists() )
        break ;
    }       
    
    FileInputStream fi = new FileInputStream( classFile ) ;
    byte result[] = new byte[ fi.available() ] ;
    fi.read( result ) ;
    return result ;
}
```

Il file viene cercato nella directory specificata, che sarà considerata relativa al CLASSPATH; verrà cioè effettuata una ricerca di tale file concatenando ogni directory specificata nel CLASSPATH, con quella specificata al class loader. Per ottenere la lista di tutte queste directory si utilizza uno StreamTokenizer specificando come token proprio il separatore dei vari path; per non dipendere da un particolare sistema operativo si ottiene il separatore del sistema corrente tramite la classe System ed il metodo getProperty specificando come proprietà "path.separathor"; lo stesso metodo viene utilizzato per ottenere il contenuto della variabile CLASSPATH, specificando come proprietà "java.class.path". Inoltre se la classe specificata fa parte di un package, si provvede a tradurre i punti separatori nel separatore di directory del sistema operativo corrente, in modo che, ad esempio il nome di classe "mypack.myclass" provochi la ricerca del file "mypack/myclass.ext", dove ext è l'estensione specificata al class loader. Ancora una volta il separatore del sistema viene ottenuto tramite il metodo getProperty con chiave "file.separator".

Vediamo adesso il file che utilizza questo class loader personalizzato (Test):

```Java
public class Test {
        public static void main( String args[] ) {
                myClassLoader classLoader = new myClassLoader( "arch", "lor" ) ;
                Object o ;
                String tst = "TestClass" ;
                // String tst = "java.Virus" ;

                System.out.println( "Utilizzo di myClassLoader." ) ;

                if ( args.length != 0 )
                        tst = args[0] ;

                try {
                        o = (classLoader.loadClass(tst)).newInstance() ;
                        ((myInterface) o).start("niente") ;
                } catch (Exception e ) {
                        e.printStackTrace() ;
                }
        }
}
```

Quello che fa questa semplice applicazione è istanziare un class loader di classe myClassLoader, specificando che la directory dove si andranno a cercare i files contenenti le classi (con estensione .lor) è "arch". Con tale class loader si caricherà poi la classe TestClass. Per quanto detto sopra non si può effettuare direttamente la conversione a TestClass, ma si può effettuare il cast ad una classe (o interfaccia) comune, in tal caso l'interfaccia è myInterface, che semplicemente è:

```Java
public interface myInterface {
        void start( String s ) ;
}
```

Come si può notare nel listato di Test è commentata l'istruzione che cerca di caricare la classe java.Virus; in questo modo si potrà notare che il class loader effettivamente rifiuta il caricamento di una classe con tale nome, proprio per motivi di sicurezza, in quanto dichiara di appartenere al package java. Se si vuole avere conferma, basta togliere il commento a tale istruzione.

La classe TestClass, a parte il fatto che non compie nessuna particolare operazione, può essere utilie per capire il momento del caricamento delle classi a run time di Java:

```Java
import java.util.* ;

public class TestClass implements myInterface {
    // viene caricata la classe Vector
    Vector v = new Vector() ;

    // Fa parte dell'interfaccia myInterface
    public void start( String opt )  {
        // Ancora non viene caricata la classe
        Hashtable ht ;

        System.out.println("TestClass "+ opt);
        System.out.println( "Istanzio una hashtable" ) ;

        // adesso viene caricata la classe Hashtable
        ht = new Hashtable() ;

        for (int i=0 ; i < 5; i++ )
                v.addElement( new Integer( i ) );

        // Non viene ricaricata la classe
        ht = new Hashtable() ;

        for( int i = 0 ; i < v.size() ; i++ ) {
                Integer z = (Integer) v.elementAt(i) ;
                System.out.println( i + ": "" + z ) ;
        }
    }
}
```

I commenti spiegano il momento del caricamento della classe relativa.

Per testare l'esempio si dovrà avere nella stessa directory del file Test.class, o comunque in una directory specificata nel CLASSPATH, i files myInterface.class, myClassLoader.class. Il file TestClass.class dovrebbe essere rinominato in TestClass.lor e spostato nella directory arch che potrà essere creata nella stessa directory dei file suddetti, oppure in una directory del CLASSPATH. In questo modo si è sicuri che il class loader primordiale non riesca a trovare la classe.

L'output del comando java Test è il seguente:

    Utilizzo di myClassLoader.
    Caricamento della classe : TestClass
    Non e' una classe di sistema.
    Lettura dati da file per la classe TestClass
    Nome file : TestClass.lor
    directory : .\arch
    Caricamento della classe : java.lang.Object
    Classe di sistema (CLASSPATH)
    Caricamento della classe : myInterface
    Classe di sistema (CLASSPATH)
    Classe caricata : TestClass
    Caricamento della classe : java.util.Vector
    Classe di sistema (CLASSPATH)
    Caricamento della classe : java.lang.System
    Classe di sistema (CLASSPATH)
    Caricamento della classe : java.lang.StringBuffer
    Classe di sistema (CLASSPATH)
    Caricamento della classe : java.io.PrintStream
    Classe di sistema (CLASSPATH)
    TestClass niente
    Istanzio una hashtable
    Caricamento della classe : java.util.Hashtable
    Classe di sistema (CLASSPATH)
    0: 0
    1: 1
    2: 2
    3: 3
    4: 4

Come si può notare la classe Hashtable non è caricata immediatamente, in quanto è stata solo dichiarata una variabile di tale tipo, ma non è stata creata subito un'istanza; infatti il caricamento avviene al momento dell'istanziamento. La parte in neretto mostra il caricamento della classe TestClass; come si può notare prima che effettivamente venga caricata, è necesssario caricare anche Object (classe base comune ad ogni classe Java), e miInterface (implementata da TestClass); la classe viene quindi anche risolta. La class Vector viene subito caricata in quanto la dichiarazione della variabile include anche l'istanziamento di tale classe. Al momento della stampa sullo schermo sono caricate le classi System, StringBuffer e PrintStream. Notare che queste classi erano già state caricate in memoria, in quanto si era stampato sullo schermo con System.out.println, ma per quanto detto le classi Test e TestClass appartengono a name space diversi, in quanto caricati con class loader diversi. Infine la classe Hashtable viene caricata al momento dell'istanziamento della variabile. Tutte le classi utilizzate da Test saranno caricate, per quanto detto con lo stesso class loader con cui è stata caricata Test.

Si possono fare altre prove, caricando altre classi (ricordatevi la classe base comune, o un'interfaccia comune), oppure specificando altri parametri al costruttore del class loader.
L'esempio illustrato è semplice e di poca utilità, ma dovrebbe essere sufficiente per mostrare il funzionamento di un class loader.
Il prossimo mese vedremo un esempio più complesso: un class loader che caricherà le classi dalla rete.

A presto :-) 