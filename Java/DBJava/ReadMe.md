# Connessioni a DB

https://www.tutorialspoint.com/index.htm
https://www.tutorialspoint.com/jdbc/index.htm

JDBC è un API per connettersi ad un database
perché le interfacce e non le classi per collegarci a DB:
    con interfaccia riciclo codice e non cambio a seconda del tipo di DB

## `API` (`Application Programming Interface`) (interfaccia di programmazione delle applicazioni)
Un'API è un **intermediario software grazie al quale due applicazioni possono comunicare** tra loro.

occorre scaricare un driver per ogni tipo DBMS a cui collegarsi

Interfaccia di cui conoscere i componenti sono:
- DriverManager
- Driver
- Connection
- Statement − sta per query
- ResultSet
- SQLException

> importare da file -> project structure -> Libraries -> + ..
equivalente di Js "npm install...." // vedere.. ricordo MVN

1. [JDBC](./JDBC.md)