# Modificare la struttura del Repository

# Reset
## Spostare ultimi commit su altro branch

```dos
git branch nuovoramo
git reset --hard HEAD~2  // ~n sposta il "puntatore" di nr commit a ritroso
git checkout nuovoramo
```
```dos
git branch nuovoramo
git reset --hard 0bc5544
git checkout nuovoramo
```

```dos
git checkout ramoesistente
git merge master
git checkout master
git reset --hard HEAD~2
git checkout ramoesistente
```

`git reset`     -> Reimposta l’indice e la directory di lavoro sullo stato dell’ultimo commit.
                Esempio:    git reset --hard HEAD

---

## Revocare l’ultimo commit generato

`git reset --soft HEAD~1`

Con questo comando viene revocato l’ultimo commit inserito nell’HEAD. I file in esso contenuti sono quindi reimpostati allo stato “modifiche pianificate per il prossimo commit”. Se invece i dati di lavoro devono essere completamente eliminati utilizzate il seguente comando al posto del precedente:

git reset --hard HEAD~1



reference: [Spostare dei commit su un nuovo ramo in Git](https://devdev.it/spostare-dei-commit-su-un-nuovo-ramo-in-git-703/) - webLink  

# Rebase
https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase