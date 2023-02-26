# Reportistica

`git status`  
Mostra lo stato dei file nell’indice rispetto alla directory di lavoro.  
Elenca i file non tracciati (solo nella directory di lavoro), modificati (tracciati ma non ancora aggiornati nell’indice) e messi in scena (aggiunti all’indice e pronti per il commit).
<details> <summary> Snippet </summary>

```js
#> git status
On branch master

No commits yet
        // oppure
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   ReadMe.md
        modified:   info.txt
        deleted:    fileCancellato.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        altroFile.txt
```
[Link guida](https://git-scm.com/docs/git-status)
</details>

---
`git log`  
<details> <summary> Mostra un elenco dettagliato di commit </summary>

```dos
#> git log
commit 20aa2ea9908aaa6b8693fef611260f63eee3e300 (HEAD -> master, origin/master)
Merge: ba44230 5cebe19
Author: nome <email@email.it>
Date:   Tue Dec 6 11:48:15 2022 +0100

     // messaggio automatico del commit di merge:
     Merge branch 'master' of https://github.com/accountGitHub/nomeProgetto

commit ba44230e6dd77e9038d051adee99bc226af6f773
Author: nome <email@email.it>
Date:   Tue Dec 6 11:42:09 2022 +0100

    commento del commit
```
</details>

---
`git reflog`  
<details> <summary> Mostra elenco sintetico dei commit con commento </summary>
```dos
#> git reflog
e0c7356 (HEAD -> master) HEAD@{0}: commit: messaggio del commit
3fe236f HEAD@{1}: commit: messaggio del commit
20aa2ea (origin/master) HEAD@{2}: pull --tags origin master: Merge made by the 'ort' strategy.
ba44230 HEAD@{3}: commit (amend): messaggio del commit
5cebe19 HEAD@{4}: commit (amend): messaggio del commit
3d1fba4 HEAD@{5}: commit: messaggio del commit
f4e37f5 HEAD@{6}: commit (initial): Creazione Progetto
```
</details>

---
`git diff`      -> Genera file patch o statistiche delle differenze tra percorsi o file nel tuo repository git, o nel tuo indice o nella tua directory di lavoro.
                Esempio:    git diff

---
