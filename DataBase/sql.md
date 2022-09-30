# SQL
### Structured Query Language  
Linguaggio standardizzato per DataBase basati sul modello relazionale (RDBMS), 

- **`Query language`** (QL)  
    permette di interrogare il database, cioè di leggere i dati.
- **`Data Manipulation Language`** (DML)  
    permette di inserire, cancellare, modificare i dati
- **`Data Definition Language`** (DDL)  
    permette di creare e cancellare database o di modificarne la struttura
- **`Data Control Language`** (DCL)  
    permette di gestire gli utenti e i permessi
- `Device Media Control Language` (DMCL)  
    permette di controllare i supporti (memorie di massa) dove vengono memorizzati i dati.

```sql
SELECT [ ALL | DISTINCT | TOP ] lista_elementi_selezione
FROM tabella
[ WHERE espressione_condizionale ]
[ GROUP BY lista_colonne [HAVING Condizione] ]
[ ORDER BY lista_colonne ];
```
