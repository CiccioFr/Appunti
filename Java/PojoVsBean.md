# Difference between a JavaBean and a POJO

Ogni JavaBean è un POJO, perché segue le convenzioni di progettazione e struttura standard dei POJO, ma non tutti i POJO sono JavaBean, perché non tutti i POJO seguono le specifiche convenzioni di progettazione dei JavaBean.

## `Bean` o `JavaBean`
è un oggetto Java che segue determinate convenzioni di progettazione e struttura. In particolare, un JavaBean deve avere:
- una classe pubblica
- costruttori pubblici senza argomenti
- proprietà accessibili tramite metodi getter e setter (noti anche come accessori)
- supportare l'interfaccia Serializable (utilizzato principalmente nell'ambito dello sviluppo di applicazioni desktop o web standard).

## `EE JavaBean` (Enterprise Edition JavaBean)
è un tipo specifico di JavaBean utilizzato per sviluppare applicazioni distribuite e scalabili per l'Enterprise Computing.  
Consente di creare applicazioni distribuite con funzionalità avanzate come la gestione delle transazioni, la sicurezza, la persistenza dei dati e la scalabilità.  
Gli Enterprise JavaBean sono eseguiti all'interno di un contenitore EJB, che offre servizi di runtime, sicurezza e transazioni per l'esecuzione degli EJB. Gli EJB possono essere di tre tipi: Session Bean, Entity Bean e Message-Driven Bean.
gli EE JavaBean presentano alcune caratteristiche e convenzioni aggiuntive, tra cui:
- Devono implementare un'interfaccia specifica (ad esempio, javax.ejb.SessionBean, javax.ejb.MessageDrivenBean, etc.) che consente loro di partecipare ai cicli di vita delle componenti Java EE e di utilizzare le funzionalità messe a disposizione dal container Java EE.
- Possono utilizzare annotazioni Java specifiche (come ad esempio @Stateless, @Stateful, @MessageDriven) per definire il loro comportamento e le loro proprietà all'interno dell'architettura Java EE.
- Possono sfruttare la persistenza dei dati offerta dai servizi di Java Persistence API (JPA) per salvare e recuperare i dati da un database.

## `POJO` (acronimo di `Plain Old Java Object`)
che significa "semplice vecchio oggetto Java".  
Un POJO è un'istanza di una classe Java che segue un modello di progettazione semplice, leggero e standard.  
In particolare, un POJO è una classe Java che non richiede l'implementazione di alcuna interfaccia Java specifica o l'uso di annotazioni Java particolari. Questo significa che un POJO è una classe Java standard che segue le convenzioni di progettazione del linguaggio, ma che non richiede l'uso di framework o tecnologie specifiche.  
Un POJO può avere proprietà (campi) e metodi pubblici per accedere e manipolare i suoi dati, ma non fornisce funzionalità avanzate come la gestione delle transazioni, la sicurezza o la persistenza dei dati. Per questo motivo, i POJO sono utilizzati principalmente come oggetti semplici e leggeri per la memorizzazione e la manipolazione dei dati nell'ambito di applicazioni Java standard.  
In sintesi, un POJO è una classe Java semplice e leggera che segue le convenzioni di progettazione del linguaggio senza richiedere l'implementazione di interfacce Java specifiche o l'uso di annotazioni particolari. Essi sono utilizzati principalmente per la memorizzazione e la manipolazione dei dati nell'ambito di applicazioni Java standard.

java bean:                   |       Pojo:
-- | --
deve estendere Serializable o Externalizable.       |      no need to extends or implement.
must have public class .          |      must have public class
must have private instance variables. |     can have any access specifier variables.
must have public setter and getter method. |  may or may not have setter or getter method.
must have no-arg constructor.        | can have constructor with agruments.



Externalizable


---

## `POJO` vs JavaBeans
- https://www.geeksforgeeks.org/pojo-vs-java-beans/
- https://stackoverflow.com/questions/1394265/what-is-the-difference-between-a-javabean-and-a-pojo