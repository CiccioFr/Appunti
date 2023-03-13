# Externalizable - Interfaccia

## Interfaccia che estende Serializable.
L'interfaccia Externalizable fornisce un controllo più granulare sulla serializzazione rispetto alla normale serializzazione Serializable.

Quando una classe implementa Externalizable, deve fornire la propria implementazione per i metodi readExternal() e writeExternal(). Questi metodi consentono di controllare in modo più preciso la serializzazione e la deserializzazione degli oggetti della classe.

In particolare, la classe Externalizable permette di controllare la scrittura e la lettura di campi di istanza non serializzabili, di gestire la versione delle classi, di ignorare i campi di istanza durante la serializzazione e di eseguire altre operazioni personalizzate sulla serializzazione e deserializzazione.

Tuttavia, è importante notare che l'implementazione di Externalizable richiede più lavoro rispetto a Serializable e richiede una maggiore attenzione alla gestione dei dati durante la serializzazione e la deserializzazione. Inoltre, l'interfaccia Externalizable è meno utilizzata rispetto a Serializable in quanto richiede più codice e attenzione da parte dello sviluppatore.

## Gestione della versione delle classi in Java,
Ci si riferisce alla capacità di controllare le modifiche apportate alle classi durante il processo di sviluppo dell'applicazione e garantire che la serializzazione e la deserializzazione degli oggetti avvenga in modo coerente e corretto anche in presenza di queste modifiche.

In particolare, quando si utilizza la serializzazione in Java, le classi vengono associate a un numero di versione che identifica la loro struttura. Quando un oggetto viene serializzato, viene incluso anche il numero di versione della classe corrispondente. Durante la deserializzazione, Java controlla se la versione della classe associata all'oggetto corrisponde alla versione della classe presente nel sistema. Se le versioni non corrispondono, può verificarsi un errore di deserializzazione.

La gestione della versione delle classi in Java può essere gestita in diversi modi. Ad esempio, è possibile utilizzare l'annotazione @SerialVersionUID per specificare in modo esplicito il numero di versione di una classe, o implementare l'interfaccia Externalizable e gestire manualmente la serializzazione e la deserializzazione degli oggetti.

In generale, la gestione della versione delle classi è importante per garantire la compatibilità tra le diverse versioni dell'applicazione e consentire la corretta lettura e scrittura degli oggetti serializzati.