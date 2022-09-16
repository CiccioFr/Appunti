## Git e GitHub
0. [Vademecum](./GitHub%20Vademecum.txt) - File di Testo
1. [GitHub info](./GitHub_info.md)
2. [appunti](Appunti.md)
3. [creare chiave SSH.txt](creare_chiave_SSH.txt) - File di Testo
4. [Creazione Token GitHub](Creazione_Token_GitHub.md)
5. [GitHub comandi](GitHub_comandi.md)
6. [Branch e Merge](Branch_e_Merge.md)
7. [Spostare dei commit su un nuovo ramo in Git](https://devdev.it/spostare-dei-commit-su-un-nuovo-ramo-in-git-703/) - webLink  

---
In Sintesi:

1. Creare repository su [github.com/](https://github.com/)
2. a terminale, nella cartella:
```console
git init
git config user.name "My Name"
git config user.email "email@email.it"
git remote add origin https://github.com/NomeAccount/Progetto.git
git add .
git commit -m "Commento"
git push -u master
```

git add .  ==alternativa=> git add *

git push -u master ==alternativa=> git push --set-upstream origin master