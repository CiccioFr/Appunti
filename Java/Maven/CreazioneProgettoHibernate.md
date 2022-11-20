# Creazione di un progetto con Maven
Strumento di gestione di progetti software basati su Java e build automation. Per funzionalità è similare ad Apache Ant, ma basato su concetti differenti. Può essere usato anche in progetti scritti in C#, Ruby, Scala e altri linguaggi.  
Dipendenze Maven da: [mvnrepository.com](https://mvnrepository.com)

---
Pre-Requisito: Aver già creato un DB !!!

## Aggiungere Dipendenze Maven nel file `pom.xml`
- [hibernate-core](https://mvnrepository.com/artifact/org.hibernate/hibernate-core)
- [hibernate-c3p0](https://mvnrepository.com/artifact/org.hibernate.orm/hibernate-c3p0)
- [hibernate-entitymanager](https://mvnrepository.com/artifact/org.hibernate/hibernate-entitymanager)
- [mariadb-java-client](https://mvnrepository.com/artifact/org.mariadb.jdbc/mariadb-java-client)
- [commons-beanutils](https://mvnrepository.com/artifact/commons-beanutils/commons-beanutils)


<details> <summary> spoiler file pom.xml </summary>

```xml
<!-- https://mvnrepository.com/artifact/org.hibernate/hibernate-core -->
<dependencies>  <!-- aggiunto manualmente -->   
    <dependency>
        <groupId>org.hibernate</groupId>
        <artifactId>hibernate-core</artifactId>
        <version>6.1.4.Final</version>
        <type>pom</type>
    </dependency>
    <dependency>
        <groupId>org.hibernate</groupId>
        <artifactId>hibernate-c3p0</artifactId>
        <version>6.1.4.Final</version>
    </dependency>
    <dependency>
        <groupId>org.hibernate</groupId>
        <artifactId>hibernate-entitymanager</artifactId>
        <version>5.6.12.Final</version>
    </dependency>
    <dependency>
        <groupId>org.mariadb.jdbc</groupId>
        <artifactId>mariadb-java-client</artifactId>
        <version>3.0.8</version>
    </dependency>
    <dependency>
        <groupId>commons-beanutils</groupId>
        <artifactId>commons-beanutils</artifactId>
        <version>1.9.4</version>
    </dependency>
</dependencies>

```
</details> 

---
## Creare le Classi di interfacciamento col DB

### `Persistence`: importare driver "DataBase Connection"
Connessioni database persistenti - Le connessioni persistenti sono collegamenti che non si chiudono al termine dell'esecuzione dello script. Quando viene richiesta una connessione persistente, PHP verifica se esiste già una connessione persistente identica (che è rimasta aperta da prima) e, se esiste, la utilizza. [Web Link](https://www.php.net/manual/en/features.persistent-connections.php)
- cercare e scaricare driver java  
    (es. [mariaDB](https://mariadb.com/kb/en/about-mariadb-connector-j) ->
    https://mariadb.com/downloads/connectors/connectors-data-access/java8-connector)
- click dx su package -> new -> other -> category: Persistence / File Types: Entity Clases from DataBase
su google: MariaDB Connector/J
- importa automaticamente nel pom le dipendenze

<details> <summary> spoiler file pom.xml </summary>

```xml
<dependencies>
    <dependency>
        <groupId>org.eclipse.persistence</groupId>
        <artifactId>org.eclipse.persistence.core</artifactId>
        <version>2.7.10</version>
    </dependency>
    <dependency>
        <groupId>org.eclipse.persistence</groupId>
        <artifactId>org.eclipse.persistence.asm</artifactId>
        <version>9.2.0</version>
    </dependency>
    <dependency>
        <groupId>org.eclipse.persistence</groupId>
        <artifactId>org.eclipse.persistence.antlr</artifactId>
        <version>2.7.10</version>
    </dependency>
    <dependency>
        <groupId>org.eclipse.persistence</groupId>
        <artifactId>org.eclipse.persistence.jpa</artifactId>
        <version>2.7.10</version>
    </dependency>
    <dependency>
        <groupId>org.eclipse.persistence</groupId>
        <artifactId>org.eclipse.persistence.jpa.jpql</artifactId>
        <version>2.7.10</version>
    </dependency>
    <dependency>
        <groupId>org.eclipse.persistence</groupId>
        <artifactId>org.eclipse.persistence.moxy</artifactId>
        <version>2.7.10</version>
    </dependency>
    <dependency>
        <groupId>org.eclipse.persistence</groupId>
        <artifactId>jakarta.persistence</artifactId>
        <version>2.2.3</version>
    </dependency>
    <dependency>
        <groupId>org.eclipse.persistence</groupId>
        <artifactId>org.eclipse.persistence.jpa.modelgen.processor</artifactId>
        <version>2.7.10</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```
</details> 

### Modificare il nome della persistenza
- in "Orther Sources\scr\main\resources\META-INF\\`persistence.xml`"
```xml
<persistence-unit name="dare_Nome_Alla_Persistenza" transaction-type="....
```
- **va inserito nela classe db() sotto main**
```java
public static EntityManager db() {
    return Persistence.createEntityManagerFactory("dare_Nome_Alla_Persistenza").createEntityManager(); // createEntityManager è la connessione al DB
}
```

---
## Creare le Classi per la connessione ad ogni tabella del DB
1. Creando una classe di connessione per ogni tabella
2. Creando una unica classe `CRUD` in cui astraggo la tabella del caso in una variabile 