# `JPA` (`Java Persistence API`)

Framework per il linguaggio di programmazione Java che si occupa della **gestione della persistenza dei dati di un DBMS relazionale**

## Driver
[MariaDB Connector/J](https://mariadb.com/kb/en/about-mariadb-connector-j/)  
Utilizzato per connettere applicazioni sviluppate in Java a database MariaDB e MySQL utilizzando l'API JDBC standard  
È un driver JDBC di tipo 4.

## Il File `Persistence.xml`
Per eseguire l'autoincremento dell'attributo "id" della relazione (tabella), nel file `Persistence.xml` aggiungere la proprietà:  
`<property name="eclipselink.target-database" value="MySQL"/>`
<details> <summary> Spoiler stralcio file Persistence.xml </summary>

```xml
<properties>
    <property name="javax.persistence.jdbc.url" value="jdbc:mariadb://localhost:3306/nomeDataBase"/>
    <property name="javax.persistence.jdbc.user" value="account"/>
    <property name="javax.persistence.jdbc.driver" value="org.mariadb.jdbc.Driver"/>
    <property name="eclipselink.target-database" value="MySQL"/> <!-- senza da problemi per l'autoincremento -->
    <property name="javax.persistence.jdbc.password" value="password"/>
</properties>
```
</details>