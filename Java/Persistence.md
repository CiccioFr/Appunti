# Persistence

[MariaDB Connector/J](https://mariadb.com/kb/en/about-mariadb-connector-j/)

## Il File `Persistence.xml`
Per eseguire l'autoincremento dell'attributo "id" della relazione (tabella), nel file `Persistence.xml` aggiungere la proprietà:  
`<property name="eclipselink.target-database" value="MySQL"/>`
<details> <summary> Spoiler stralcio file Persistence.xml </summary>

```xml
<properties>
    <property name="javax.persistence.jdbc.url" value="jdbc:mariadb://localhost:3306/nomeDataBase"/>
    <property name="javax.persistence.jdbc.user" value="account"/>
    <property name="javax.persistence.jdbc.driver" value="org.mariadb.jdbc.Driver"/>
    <property name="javax.persistence.jdbc.password" value="password"/>
    <property name="eclipselink.target-database" value="MySQL"/> <!-- senza da problemi per l'autoincremento -->
</properties>
```
</details>