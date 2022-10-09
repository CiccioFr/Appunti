# Linux - Gestione dei Permessi sui File

```
Ciccio@pc:~$ ls -l nomeFile
Ciccio@pc:~$ -rwxrw-r-- 1 Ciccio Gruppo 0 ago 21 13:22 nomeFile
```


## `chmod` modificare i permessi
`chmod -w nomeFile`  toglie permessi di scrittura a tutti  
`chmod u+x nomeFile`  aggiunge l'esecuzione all'utente proprietario  
`chmod g-r nomeFile`  toglie permessi di lettura al gruppo di appartenenza  
`chmod o-r nomeFile`  toglie permessi di lettura a tutti gli altri utenti a tutti  