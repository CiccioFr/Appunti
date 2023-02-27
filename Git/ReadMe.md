## Git e GitHub
sito : https://git-scm.com/
1. [Info: Git, GitHub, GitLab, GitBucket](./GitHub_info.md)
1. [Config e Credential](./Config.md)
1. [init, add, rm, commit - Comandi Base](./Comandi_Base.md)
1. [ `commit --amed` - Modificare Commit](./EditCommit.md)
1. [Clone vs Fork](./CloneFork.md)
1. [Branch, Checkout e Merge](./Branch_e_Merge.md)
1. [Push, Pull e Fetch](./PuchPullFetch.md)
1. [Remote](./Remote.md)

---
1. [Configurare un editor](./EditorPerGit.md)
1. [Status, Log, RefLog, Diff - Reportistica](./Reportistica.md)
1. [Tag](./Tag.md)
1. [Archive](./Archive.md)
1. [Reset vs Rebase - Modifica struttura del Repository](./ResetRebase.md)

---
1. [creare chiave SSH.txt](./creare_chiave_SSH.md) - File di Testo
1. [Creazione Token GitHub](./Creazione_Token_GitHub.md)
1. [il File `.gitignore`](./File_gitignore.md)

---
1. [Altri comandi](altroGit.md)
1. [appunti](./Appunti.md)

---
### Il Primo Passo:
1. `git --version`  
Verifica se git sia installato e restituiesce la versione
    <details> <summary> snippet</summary>

    ```dos
    #> git --version  
    git version 2.34.1.windows.1
    ```
    </details>

1. Creare repository su [github.com/](https://github.com/)
2. Da CLI, nella cartella ROOT del progetto:
```console
git init
git config user.name "My Name"
git config user.email "email@email.it"
git add .
git commit -m "Commento"
git remote add origin https://github.com/NomeAccount/Progetto.git
git branch -M main
git push -u origin main
```
\* `-u` è l'opzione sintetica di `--set-upstream`

---
## `git help comando`  
Visualizza, su browser, la guida sullo specidico comando

---
https://git-scm.com/docs
https://www.atlassian.com/it/git/tutorials/what-is-version-control  
[git - la guida tascabile](https://rogerdudler.github.io/git-guide/index.it.html) - webLink  
[Git la Guida di html.it](https://www.html.it/guide/git-la-guida/) - webLink  
