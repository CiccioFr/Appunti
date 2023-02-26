# Comandi Base: init, add, rm, commit

## `git init`
Inizializza un repository git: (crea la directory iniziale .git)

---
## `git add .`  
Aggiunge i file all'area di staging  

<details><summary> . vs *</summary>
`add *` significa aggiungi tutti i file nella directory corrente, ad eccezione dei file il cui nome inizia con un punto. Questa è la tua funzionalità di shell e Git riceve sempre e solo una lista di file.  
alternativa=> `git add *` // da capire
`*` non fa parte di git – è un jolly interpretato dalla shell.  
Quando si utilizza l’asterisco `*` su una shell viene utilizzata una funzione chiamata `file-globbing`. Ad esempio su bash la funzione `glob()` 

**`add .`** non ha alcun significato speciale nella shell, e quindi Git aggiunge l’intera directory in modo ricorsivo, che è quasi la stessa, ma include i file i cui nomi iniziano con un punto.  

[altra particolarità](https://it.coderbridge.com/questions/1c07bcf648a142a4a938aa7d48f960a8)  
[**`git add .`**  vs **`git add *`**](https://www.yocker.com/42992/git-add-asterisco-vs-git-add-periodo.html) con funzione chiamata file-globbing   
</details>

---
## `git rm`  
Rimuove i file dall’indice e dalla directory di lavoro in modo che non vengano tracciati (inverso dell'add).
```dos
git rm --cached filename
git rm filename
```

---
## `git commit`  
Accetta tutte le modifiche (staus) scritte nell’indice, crea un nuovo oggetto commit
```dos
git commit -m 'committing added changes'
git commit -a -m 'committing all changes, equals to git add and git commit'
```
In caso di editor cli 
tasto   i  
tasto   q     //  esc  
:wq   (a fondo pagina)

## hash del commit, codice univoco del commit

---
