# Progetto Hibernate con Maven

1. Pre-Requisito: Aver già creato un DB !!!

1. ## creaz Prog con Maven

1. ## Aggiungere Dipendenze nel file `pom.xml`
- [mvnrepository.com](https://mvnrepository.com)
    - [hibernate-core](https://mvnrepository.com/artifact/org.hibernate/hibernate-core)
    - [hibernate-c3p0](https://mvnrepository.com/artifact/org.hibernate.orm/hibernate-c3p0)
    - [hibernate-entitymanager](https://mvnrepository.com/artifact/org.hibernate/hibernate-entitymanager)
    - [mariadb-java-client](https://mvnrepository.com/artifact/org.mariadb.jdbc/mariadb-java-client)
    - [commons-beanutils](https://mvnrepository.com/artifact/commons-beanutils/commons-beanutils)

### file `pom.xml`
<details> <summary> spoiler Sintesi file pom.xml </summary>

- org.hibernate
    - hibernate-core
    - hibernate-c3p0
    - hibernate-entitymanager
- org.mariadb.jdbc
    - mariadb-java-client
- commons-beanutils
    - commons-beanutils
- org.eclipse.persistence
    - org.eclipse.persistence.core
    - org.eclipse.persistence.asm
    - org.eclipse.persistence.antlr
    - org.eclipse.persistence.jpa
    - org.eclipse.persistence.jpa.jpql
    - org.eclipse.persistence.moxy
    - jakarta.persistence
    - org.eclipse.persistence.jpa.modelgen.processor
</details> 

<details> <summary> spoiler Dettagli file pom.xml </summary>

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
4. ## Creare le Classi di interfacciamento col DB

### `Persistence`: importare driver "DataBase Connection"
Connessioni database persistenti
- Le connessioni persistenti sono collegamenti che non si chiudono al termine dell'esecuzione dello script. Quando viene richiesta una connessione persistente, PHP verifica se esiste già una connessione persistente identica (che è rimasta aperta da prima) e, se esiste, la utilizza. [Web Link](https://www.php.net/manual/en/features.persistent-connections.php)
- cercare e scaricare driver java  
    (es. [mariaDB](https://mariadb.com/kb/en/about-mariadb-connector-j) ->
    https://mariadb.com/downloads/connectors/connectors-data-access/java8-connector)  
    su google: MariaDB Connector/J
- click dx su package -> new -> other -> category: Persistence / File Types: Entity Clases from DataBase
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

---
## Introduction to Hibernate framework
http://javainsimpleway.com/introduction-to-hibernate-framework/