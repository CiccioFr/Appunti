# Modificare Commit
## Modificare i commit generati o annullarli

L'opzione `--amend` modifica l'ultimo commit generato

`git commit --amend` modifica il commit più recente. Consente di unire le modifiche preparate per il commit al commit precedente. La correzione non altera solo il commit più recente, ma lo sostituisce completamente. In LOCALE Git lo interpreterà come un commit nuovo

`git commit --amend -m "an updated commit message"` modifica il messaggio di commit precedente senza modificarne la `snapshot`

Se desiderate invece revocare l’ultimo commit generato, potete farlo con il seguente comando Git:

git reset --soft HEAD~1

Con questo comando viene revocato l’ultimo commit inserito nell’HEAD. I file in esso contenuti sono quindi reimpostati allo stato “modifiche pianificate per il prossimo commit”. Se invece i dati di lavoro devono essere completamente eliminati utilizzate il seguente comando al posto del precedente:

git reset --hard HEAD~1

reference: [Spostare dei commit su un nuovo ramo in Git](https://devdev.it/spostare-dei-commit-su-un-nuovo-ramo-in-git-703/) - webLink  
