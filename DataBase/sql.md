# SQL
## `Structured Query Language`  
Linguaggio standardizzato per DataBase basati sul modello relazionale (`RDBMS`), 

### Le 5 categorie di comandi SQL
1. **`DDL` - `Data Definition Language`**  
    permette di creare e cancellare database o di modificarne la struttura
1. **`QL` - `Query language`**  
    permette di interrogare il database, cioè di leggere i dati.
1. **`DML` - `Data Manipulation Language`**  
    permette di inserire, cancellare, modificare i dati
1. **`DCL` - `Data Control Language`**  
    permette di gestire gli utenti e i permessi
1. **`TCL` – `Transaction Control Language`**  
    permette di mantenere la coerenza del database e per la **gestione delle transazioni** effettuate dai comandi DML
- `DMCL` - `Device Media Control Language`  
    permette di controllare i supporti (memorie di massa) dove vengono memorizzati i dati. Supportato da pochi DBMS (Oralce e' uno di questi).

![SQLcommands](./SQLcommands.png)

```sql
SELECT [ ALL | DISTINCT | TOP ] lista_elementi_selezione
FROM tabella
[ WHERE espressione_condizionale ]
[ GROUP BY lista_colonne [HAVING Condizione] ]
[ ORDER BY lista_colonne ];
```
---

Tip
- MariaDB è più permissivo di MySQL per via dello strict mode sulla `Group by`

---
## Piattaforme Software
- `phpMyAdmin` - applicazione web scritta in PHP
- `PgAdmin` - GUI di amministrare database di PostgreSQL.

---
## Pacchetti SW
- ### [`XAMPP`](./xampp/ReadMe.md)
    - [Recuperare DB Danneggiato su XAMPP](./xampp/xampp_Recuperare_DB_danneggiato.md)
- ### `WAMP` - `LAMP` - `MAMP`
