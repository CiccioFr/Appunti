## Git e GitHub
sito : https://git-scm.com/
1. [Vademecum](./GitHub%20Vademecum.txt) - File di Testo
1. [GitHub info](./GitHub_info.md)
2. [appunti](./Appunti.md)
3. [creare chiave SSH.txt](./creare_chiave_SSH.txt) - File di Testo
4. [Creazione Token GitHub](./Creazione_Token_GitHub.md)
5. [GitHub comandi](./GitHub_comandi.md)
6. [Branch e Merge](./Branch_e_Merge.md)
6. [il file `.gitignore`](./file_gitignore.md)
7. [Spostare dei commit su un nuovo ramo in Git](https://devdev.it/spostare-dei-commit-su-un-nuovo-ramo-in-git-703/) - webLink  

[git - la guida tascabile](https://rogerdudler.github.io/git-guide/index.it.html)  
[Git la Guida di html.it](https://www.html.it/guide/git-la-guida/)  

[**`git add .`**  vs **`git add *`**](https://www.yocker.com/42992/git-add-asterisco-vs-git-add-periodo.html) con funzione chiamata file-globbing   


`add *` significa aggiungi tutti i file nella directory corrente, ad eccezione dei file, il cui nome inizia con un punto. Questa è la tua funzionalità di shell e Git riceve sempre e solo una lista di file.  
`*` non fa parte di git – è un jolly interpretato dalla shell.  
Quando si utilizza l’asterisco `*` su una shell viene utilizzata una funzione chiamata file-globbing . Ad esempio su bash la funzione `glob()` 

**`add .`** non ha alcun significato speciale nella tua shell, e quindi Git aggiunge l’intera directory in modo ricorsivo, che è quasi la stessa, ma include i file i cui nomi iniziano con un punto.

[altra particolarità](https://it.coderbridge.com/questions/1c07bcf648a142a4a938aa7d48f960a8)  

---
In Sintesi:

1. Creare repository su [github.com/](https://github.com/)
2. a terminale, nella cartella:
```console
git init
git config user.name "My Name"
git config user.email "email@email.it"
git add .
git commit -m "Commento"
git branch -M main
git remote add origin https://github.com/NomeAccount/Progetto.git
git push -u origin main
```

git add .  ==alternativa=> git add *

git push -u master ==alternativa=> git push --set-upstream origin master