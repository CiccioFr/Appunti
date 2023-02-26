# Branch
  
`git branch nomeBranch`
- **creazione** nuovo Branch

`git branch -d nomeBranch`
- **cancella** il ramo nomeBranch  

`git branch`
- visualizza la lista dei branch esistenti

`git branch --no-merged`
- visualizza branch non fusi nel ramo attuale

---
# Checkout

`git checkout`
- mostra file tracked (tracciati e modificati rispetto all'ultimo commit)

`git checkout nomeBranch`
- Switched al Branch: lavorare sul ramo nomeBranch;
    * nomeBranch deve esistere
- I file saranno riportati all’ultimo stadio di quel ramo;
- tutti i futuri comandi che eseguiremo saranno relativi proprio a quel ramo

`git checkout -b nomeBranch`
- crea e si sposta sul nuovo Branch (Per default baserà il nuovo branch sull'attuale HEAD)

`git checkout -b nomeBranch branchEsistente`
- crea e si sposta sul nuovo Branch nomeBranch **basando il nuovo ramo su branchEsistente** anziché sull'attuale HEAD

---
# Merge
## Fusione di Branch

`git merge nomeBranch`    
- Eseguendo questo comando, nella storia del repository, questa fusione non ci sarà  

`git merge --no-ff nomeBranch`  
- l’opzione –no-ff permete di avere una traccia di questa unione. Git creerà un commit relativo a questo merge  
N.B.: il Branch verrà unito al **ramo attuale**

---
### Per trasformare qualsiasi riferimento a un oggetto esteso in un hash
- `git rev-parse HEAD`
- `git rev-parse --verify HEAD`
### To retrieve the short hash:
`git rev-parse --short HEAD`

---
[Fusione tra rami (branch merge](https://devdev.it/guida-git-versioning/fusione-branch-merge/) - web link


---
---
`git checkout`  -> Ripristina i file (all'ultimo commit (prima del push) ) --/--  switchare tra branch
                Esempio A:  git checkout -- fileDaRipristinate.txt
                Esempio B:  git checkout nuovoBranch

---
`git branch`    -> Elenca le filiali esistenti, comprese le filiali remote, se viene fornito “-a”. Crea un nuovo branch se viene fornito un nome di ramo.
                Esempi:     git branch -a   --> * master remotes/origin/master
                            git branch nuovoBranch

---
`git merge`     -> Unisce uno o più rami nel ramo corrente e crea automaticamente un nuovo commit in assenza di conflitti.
                Esempio:    git merge newbranchversion

