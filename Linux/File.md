# Linux - Creazione di File

```
Ciccio@pc:~$ touch nomeFile
Ciccio@pc:~$ ls -l nomeFile
Ciccio@pc:~$ -rw-r--r-- 1 Ciccio Gruppo 0 ago 21 13:22 nomeFile
```


## `ls` - comando
`Ciccio@pc:~$ ls -l -a nomeFile`  
i parametri:  
`-l` elenca i dettagli del file  
`-a` - all - visualizzazione dei file nascosti (`.nomeFile`)  

---
`-rw-r--r--` permessi di default
- 1° bit  
    `-` file  
    `d` directory
    `l` link  
    `s` [socket](https://geekitbase.info/content/4863)  
- 3 gruppi di 3 bit  
1° gruppo -> `u` utente proprietario  
2° gruppo -> `g` gruppo proprietario  
3° gruppo -> `o` other (altri utenti)  
`r` -> lettura  
`w` -> scrittura  
`x` -> esecuzione  
    il permesso di esecuzione su una cartella significa poterci entrare (attraversarla)

NOTA: L'utente `root` sarà sempre in grado di leggere qualunque file indipendentemente dai permessi  

`1` i collegamenti che puntano al file  

`Ciccio` utente proprietario  

`Gruppo` gruppo proprietario

`0` dimensione  

`ago 21 13:22` data di ultima modifica  



----

### socket
[link web](https://geekitbase.info/content/4863)
[link wikipedia](https://it.wikipedia.org/wiki/Socket_(reti))