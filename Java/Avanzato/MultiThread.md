# Multi Thread in Java
## Processi e Thread
- Sono entrambe unità computazionali che consentono a un computer di eseguire task in parallelo (multi-tasking)
- I Processi hanno uno spazio di memoria dedicato
- I Thread ("sotto-processi") condividono lo stesso spazio di memoria (sono più leggeri da lanciare, da fermare e nel fare il context-switch)
- In un computer multi-cpu/multi-core Processi diversi possono essere allocati su core diversi (parallelismo reale)
- I Thread di un processo sono tutti eseguiti sul core che ha in carico il processo
- Una JVM è un processo, ma al suo interno possono essere eseguiti molti thread 
- JAVA fornisce un supporto molto potente e articolato per la gestione dei thread   

[`Test-and-set`](https://it.wikipedia.org/wiki/Test-and-set)  
In informatica l'istruzione test-and-set viene usata per scrivere in una locazione di memoria e restituire il suo vecchio valore come una singola operazione atomica (non interrompibile). Se diversi processi possono accedere alla stessa area di memoria, e se un processo sta eseguendo una test-and-set, nessun altro processo può iniziare un'altra test-and-set finché il primo processo non ha terminato la propria.

`mutua esclusione`
Tecnica utilizzata nella programmazione concorrente per garantire che solo un processo alla volta possa accedere a una risorsa condivisa. In pratica, significa che se un processo sta attualmente utilizzando una risorsa, nessun altro processo può accedere alla stessa risorsa fino a quando il primo processo non ha completato il suo lavoro e ha rilasciato la risorsa.

---
https://stackoverflow.com/questions/10763928/how-does-java-run-method-work

https://stackoverflow.com/questions/661561/how-do-i-update-the-gui-from-another-thread