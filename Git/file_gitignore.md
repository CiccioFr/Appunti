# Il File `.gitignore`
[guida](https://noviello.it/come-ignorare-file-e-directory-in-git-con-gitignore/)  

`\` carattere di escape.  
`#` commenti e vengono ignorate  

- Se inizia con una slash, directory e file solo **nella root** del repository  
  `/DirectoryInRoot`  
  `/FileInRoot.txt`  
- Se **non** inizia con una slash, si riferisce a directory e file in **qualsiasi directory** o sottodirectory  
  `FileOvunque.txt`  
  `DirectoryOvunque`
- Se **termina** con una slash, corrisponde **solo** a directory  
  `SoloDirectory/`  
  (si consideri Linux ove i file possono non avere estensione)  

`foo/**/bar`	  
- => foo/bar  
- => foo/a/bar  
- => foo/a/b/c/bar  


`*.[oa]`	=> file.o / file.a  
`*.[!oa]`	=> file.s / file.1 / file.0  
`access.[0-2].log`	=> access.0.log / access.1.log / access.2.log

**`!`** annulla (re-include) qualsiasi file che viene ignorato dal modello precedente. L'eccezione a questa regola è quella di includere nuovamente un file se la sua directory padre è esclusa.  


---
`git rm --cached filename`

L'opzione `--cached` permette di non cancellare il file dall'albero di lavoro ma solo di rimuoverlo dall'indice.  
Se si desidera rimuovere il file sia dall'indice che dal filesystem locale, omettere l'opzione --cached.

---
`git rm -r -n directory`

Quando si eliminano i file in modo ricorsivo, utilizzare l'opzione -n che eseguirà un "ciclo di prova" e mostrerà quali file verranno eliminati

## "Untrack files in .gitignore"
```console
git rm --cached -r *.class
git rm --cached -r target/
git rm -r --cached .
git add .
```