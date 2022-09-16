[link](https://devdev.it/guida-git-versioning/fusione-branch-merge/)

> `git checkout master`
- attivazione del Branch: lavorare sul ramo master;
- I file saranno riportati all’ultimo stadio di quel ramo;
- tutti i futuri comandi che eseguiremo saranno relativi proprio a quel ramo

---

> `git branch`
- visualizza la lista dei branch esistenti

> `git branch --no-merged`
- visualizza branch non fusi nel ramo attuale
  
> `git branch nomeBranch`
- creazione nuovo Branch

> `git branch -d nomeBranch`
- cancella il ramo nomeBranch  

---

> `git checkout master`  
- Switched to branch 'master'

> `git checkout -b nomeBranch`
- crea e si sposta sul nuovo Branch (Per default baserà il nuovo branch sull'attuale HEAD)

> `git checkout -b nomeBranch branchEsistente`
- crea e si sposta sul nuovo Branch **basando il nuovo ramo su quello esistente** branchEsistente anziché sull'attuale HEAD

---

> `git merge nomeBranch`    
- Eseguendo questo comando, nella storia del repository, questa fusione non ci sarà  

> `git merge --no-ff nomeBranch`  
- l’opzione –no-ff permete di avere una traccia di questa unione. Git creerà un commit relativo a questo merge  
N.B.: il Branch verrà unito al **ramo attuale**
