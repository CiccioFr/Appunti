# Maven - Dipendenze

Strumento di gestione di progetti software basati su Java e build automation. Per funzionalità è similare ad Apache Ant, ma basato su concetti differenti. Può essere usato anche in progetti scritti in C#, Ruby, Scala e altri linguaggi.  
Dipendenze Maven da: [mvnrepository.com](https://mvnrepository.com)

---
### Posizione di Maven su IntelliJ
C:\Program Files\NetBeans-15\netbeans\java\maven\lib

---
Aggiungere la giusta dipendenza nel pom.xml

---
## [MySQL Connector Java](https://mvnrepository.com/artifact/mysql/mysql-connector-java)
```xml
<!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.29</version>
</dependency>
```
- Intellij: click dx -> maven -> reload project (anche download project, ma il primo fixa ache....)

    ---

## Errore nel riconoscere versione della **Dipendenza**
```xml
<!-- opzionale: inserire in caso di errore, non riconosce la versione -->
<version>${project.parent.version}</version>
```