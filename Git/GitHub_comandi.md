## Comandi Base:
https://git-scm.com/docs

`git --version`  
<details> <summary>Verifica se git sia installato e restituiesce la versione</summary>

```
#> git --version  
git version 2.34.1.windows.1
```
</details>

---
`git help comando`  
Visualizza, su browser, la guida sullo specidico comando

---
`git status`    

<details> <summary> Mostra lo stato dei file nell’indice rispetto alla directory di lavoro. Elenca i file non tracciati (solo nella directory di lavoro), modificati (tracciati ma non ancora aggiornati nell’indice) e messi in scena (aggiunti all’indice e pronti per il commit).</summary>

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
`git config`    -> Visualizza / Imposta i valori di configurazione
- nome utente
- e-mail
- chiave gpg
- algoritmo diff preferito
- formati di file e altro.
    - name ed email: 2 parametri indispensabili per creare un collegamento col Repository
    - l'opzione [--global] serve a rendere le credenziali/parametri disponibili in qualunque progetto sul dispositivo (chiunque esegua operazioni su un qualunque repository apporà "firma" con quelle credenziali)

Esempi: // configura solo per progetto corrente  
        git config  user.name "My Name"  
        git config  user.email "email@email.it"  
Esempi: // configura per TUTTI i progetti sulla macchina  
        git config --global user.name "My Name"  
        git config --global user.email "email@email.it"  
Esempio RIMOZIONE:   
        git config --unset email@email.it  

//    -- mostra tutti i parametri impostati
                git config < -l | --list >  [ --show-scope ] [ --local | --global ] [--show-origin ]
//    -- mostra specificatamente un parametro impostato
                git config --get [ --show-scope ] user.name
                git config --get-all  user.name
    -- rimuove il parametro user.name
                git config < --unset | --unset-all > < --local | --global > user.name
    -- sostituisce tutti i parametri user.name con 1 solo
                git config --replace-all < --local | --global > user.name "Your New Name"
    -- avvia l'editor e visualizza file config (per modifiche)
                git config --edit           //locale
                git config --edit --global  //globale

---
`git init`      -> Inizializza un repository git: crea la directory iniziale .git in un progetto nuovo o esistente.
                Esempio:    git init  -->  Initialized empty Git repository in /home/customer/GIT/.git/

---
`git add`       -> Aggiunge i file all'area di staging  
                   Aggiunge i file nella directory di lavoro all’indice.
                Esempio:    git add .

---
`git rm`  
Rimuove i file dall’indice e dalla directory di lavoro in modo che non vengano tracciati (inverso dell'add).
```dos
git rm --cached filename
git rm filename
```

---
`git commit`  
Accetta tutte le modifiche (staus) scritte nell’indice, crea un nuovo oggetto commit
```dos
git commit -m 'committing added changes'
git commit -a -m 'committing all changes, equals to git add and git commit'
```
// ------       in caso di editor cli 
                    tasto   i
                    tasto   esc     //  q
                            :wq   (a fondo pagina)         ------ //

---
`git clone`     -> Crea una copia in locale del repository GIT da un’origine remota. Aggiunge anche la posizione originale come comando in modo da poterla recuperare nuovamente e spingerla verso di essa se si dispone di autorizzazioni. Da terminale, collocarsi nella directiry destinazione ed eseguire il comando, non servono impostazioni..
                Esempio:    git clone git@github.com:user/test.git
                            git clone https://github.com/cristiancarrino/bootstrap-lesson.git

---
`Fork`: Il processo di copia del codice altrui, dal suo repository al nostro.

---
`git pull`      -> Scaricare nuovi dati dal repository remoto e li unisce a quello locale. (allinea con la versione remota)
                Esempio:    git pull origin

---
`git fetch`     -> Scaricare nuovi dati dal repository remoto MA NON li unisce a quello locale. (non cambia alcuno dei branch locali posti sotto “refs/heads”)
                Esempio:    git pull fetch      //da verificare

---
`git checkout`  -> Ripristina i file (all'ultimo commit (prima del push) ) --/--  switchare tra branch
                Esempio A:  git checkout -- fileDaRipristinate.txt
                Esempio B:  git checkout nuovoBranch

---
`git push`      -> Spinge tutti gli oggetti locali modificati nel repository remoto e fa avanzare i suoi rami.
                Esempio:    git push origin master
                            git push --set-upstream origin main

---
`git branch`    -> Elenca le filiali esistenti, comprese le filiali remote, se viene fornito “-a”. Crea un nuovo branch se viene fornito un nome di ramo.
                Esempi:     git branch -a   --> * master remotes/origin/master
                            git branch nuovoBranch

---
`git merge`     -> Unisce uno o più rami nel ramo corrente e crea automaticamente un nuovo commit in assenza di conflitti.
                Esempio:    git merge newbranchversion

---
`git reset`     -> Reimposta l’indice e la directory di lavoro sullo stato dell’ultimo commit.
                Esempio:    git reset --hard HEAD

---
`git remote`   -> Mostra tutte le versioni remote del repository. ("origin" forse origin non è un comando, non appare con -? Credo sia nome dato all'url di GitHub)
                Esempi:     git remote                              --> origin 
                            git remote add origin "incolla_url"     // impostare il Repository su GitHub per primo upload
                            git remote -v                           // mostra percorsi url del Repository
                            git remote show origin                  // mostra percorsi url del Repository ed altri dettagli
                            git remote remove origin                // rimuove percorso remoto del Repository
                            git remote set-url origin "incolla_url"    // modifica l'attuale percorso remoto dal Repository in..

---
`git tag`       -> Contrassegna un commit specifico con un handle semplice e leggibile che non si sposta mai.
                Esempio:    git tag -a v1.0 -m 'this is version 1.0 tag'

---
`git diff`      -> Genera file patch o statistiche delle differenze tra percorsi o file nel tuo repository git, o nel tuo indice o nella tua directory di lavoro.
                Esempio:    git diff

---
`git archive`   -> Crea un file tar o zip incluso il contenuto di un singolo albero dal tuo repository.
                Esempio:    git archive --format=zip master^ README >file.zip

---
`git gc`        -> Pulizia (Garbage Collector) per il tuo repository. Ottimizza il tuo repository. Dovrebbe essere eseguito di tanto in tanto.
                Esempio:    git gc
                                Counting objects: 7, done.
                                Delta compression using up to 2 threads.
                                Compressing objects: 100% (5/5), done.
                                Writing objects: 100% (7/7), done.
                                Total 7 (delta 1), reused 0 (delta 0)

---
`git fsck`      -> Esegue un controllo di integrità del file system Git, identificando oggetti danneggiati.
                Esempio:    git fsck

---
`git prune`     -> Rimuove gli oggetti che non sono più indicati da alcun oggetto in alcun ramo raggiungibile.
                Esempio:    git prune

Come configurare un editor per lavorare con Git:
git config core.editor notepad | git config --global core.editor "\"c:\Program Files\Notepad++\notepad++.exe\"" | git config --global core.editor "\"c:\Program Files\Notepad++\notepad++.exe\" %*"         --> https://qastack.it/programming/10564/how-can-i-set-up-an-editor-to-work-with-git-on-windows





cat .git/config
git credential 
git config --global credential.helper store
git config --global credential.helper 'cache --timeout=3600'
- store significa salvale sul pc
- si può definire iol metodo che deve usare git per salvare le credenziali, per default è un cache per 3600 secondi

(in windows cercare "credential" si vedono tutte le credenziali salvate)

-----------
git push --set-upstream ciccio1 master

---
## Modificare i commit generati o annullarli

`git commit --amend` modifica il commit più recente. Consente di unire le modifiche preparate per il commit al commit precedente. La correzione non altera solo il commit più recente, ma lo sostituisce completamente. Git lo interpreterà come un commit nuovo

`git commit --amend -m "an updated commit message"` modifica il messaggio di commit precedente senza modificarne la `snapshot`

Se desiderate invece revocare l’ultimo commit generato, potete farlo con il seguente comando Git:

git reset --soft HEAD~1

Con questo comando viene revocato l’ultimo commit inserito nell’HEAD. I file in esso contenuti sono quindi reimpostati allo stato “modifiche pianificate per il prossimo commit”. Se invece i dati di lavoro devono essere completamente eliminati utilizzate il seguente comando al posto del precedente:

git reset --hard HEAD~1