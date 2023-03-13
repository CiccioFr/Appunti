# Multi Thread in Java
## Processi e Thread
- Sono entrambe unità computazionali che consentono a un computer di eseguire task in parallelo (multi-tasking)
- I Processi hanno uno spazio di memoria dedicato
- I Thread ("sotto-processi") condividono lo stesso spazio di memoria (sono più leggeri da lanciare, da fermare e nel fare il context-switch)
- In un computer multi-cpu/multi-core Processi diversi possono essere allocati su core diversi (parallelismo reale)
- I Thread di un processo sono tutti eseguiti sul core che ha in carico il processo
- Una JVM è un processo, ma al suo interno possono essere eseguiti molti thread 
- JAVA fornisce un supporto molto potente e articolato per la gestione dei thread   


---
https://stackoverflow.com/questions/10763928/how-does-java-run-method-work

https://stackoverflow.com/questions/661561/how-do-i-update-the-gui-from-another-thread