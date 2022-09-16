Comandi Base:
- git --version -> Verifica che git sia installato e restituiesce la versione.  
                Esempi:     git --version   --> git --version 2.19.0

- git status    -> Mostra lo stato dei file nell’indice rispetto alla directory di lavoro. Elenca i file non tracciati (solo nella directory di lavoro), modificati (tracciati ma non ancora aggiornati nell’indice) e messi in scena (aggiunti all’indice e pronti per il commit).
                Esempio:    git status  --> On branch master
                                            No commits yet
                                            Untracked files:  ....

- git log       -> Mostra un elenco di commit, inclusi i dettagli corrispondenti.
                Esempio:    git log
                                84f241e8a0d768fb37ff7ad40e294b61a99a0abe
                                Author: User <user@domain.com>
                                Date: Mon May 3 09:24:05 2010 +0300 first commit
                                    messaggio del commit
                                
- git reflog    -> Mostra elenco dettagliato di ogni modifica (sintetico dei commit con commento)
                Esempio:    git reflog
                                36610ef HEAD@{16}: commit: messaggio del commit

- git config    -> Imposta i valori di configurazione: nome utente, e-mail, chiave gpg, algoritmo diff preferito, formati di file e altro.
    - name ed email sembra siano i 2 parametri indispensabili per creare un collegamento col Repository
    - l'opzione [--global] serve a rendere le credenziali/parametri disponibili in qualunque progetto sul dispositivo, ovvero chiunque esegua operazioni su un qualunque repository apporà "firma" con quelle credenziali

        Esempi: // configura solo per progetto corrente
                git config  user.name "My Name"
                git config  user.email "email@email.it"
        Esempi: // configura per TUTTI i progetti sulla macchina
                git config --global user.name "My Name"
                git config --global user.email "email@email.it"
        Esempio RIMOZIONE: 
                git config --unset email@email.it

//    -- mostra tutti i parametri impostati
                git config < -l | --list >  [ --show-scope ] [ --local | --global ]   [--show-origin ]
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

- git init      -> Inizializza un repository git: crea la directory iniziale .git in un progetto nuovo o esistente.
                Esempio:    git init  -->  Initialized empty Git repository in /home/customer/GIT/.git/

- git add       -> Aggiunge le modifiche ai file nella directory di lavoro all’indice.
                Esempio:    git add .

- git rm        -> Rimuove i file dall’indice e dalla directory di lavoro in modo che non vengano tracciati (inverso dell'add).
                Esempio:    git rm --cached filename
                Esempio:    git rm filename

- git commit    -> Accetta tutte le modifiche scritte nell’indice, crea un nuovo oggetto commit che lo punta e imposta il ramo in modo che punti a quel nuovo commit.
                Esempi:     git commit -m 'committing added changes'
                            git commit -a -m ‘committing all changes, equals to git add and git commit’
// ------       in caso di editor cli 
                    tasto   i
                    tasto   esc     //  q
                            :wq   (a fondo pagina)         ------ //
_________________________________________________________________________________________
|   Per il primo commit (su GitHub), loggarsi sul sito e creare una nuova Repository!!  |
|   git remote add origin https://github.com/Nome/progetto.git                          |
|   git push -u origin master (o nome del brach)                                        |
-----------------------------------------------------------------------------------------

- git clone     -> Crea una copia in locale del repository GIT da un’origine remota. Aggiunge anche la posizione originale come comando in modo da poterla recuperare nuovamente e spingerla verso di essa se si dispone di autorizzazioni. Da terminale, collocarsi nella directiry destinazione ed eseguire il comando, non servono impostazioni..
                Esempio:    git clone git@github.com:user/test.git
                            git clone https://github.com/cristiancarrino/bootstrap-lesson.git

|||- Fork: Il processo di copia del codice altrui dal suo repository al proprio.

- git pull      -> Scaricare nuovi dati dal repository remoto e li unisce a quello locale. (allinea con la versione remota)
                Esempio:    git pull origin

- git fetch     -> Scaricare nuovi dati dal repository remoto MA NON li unisce a quello locale. (non cambia alcuno dei branch locali posti sotto “refs/heads”)
                Esempio:    git pull fetch      //da verificare

- git checkout  -> Ripristina i file (all'ultimo commit (prima del push) ) --/--  switchare tra branch
                Esempio A:  git checkout -- fileDaRipristinate.txt
                Esempio B:  git checkout nuovoBranch

- git push      -> Spinge tutti gli oggetti locali modificati nel repository remoto e fa avanzare i suoi rami.
                Esempio:    git push origin master
                            git push --set-upstream origin main

- git branch    -> Elenca le filiali esistenti, comprese le filiali remote, se viene fornito “-a”. Crea un nuovo branch se viene fornito un nome di ramo.
                Esempi:     git branch -a   --> * master remotes/origin/master
                            git branch nuovoBranch

- git merge     -> Unisce uno o più rami nel ramo corrente e crea automaticamente un nuovo commit in assenza di conflitti.
                Esempio:    git merge newbranchversion

- git reset     -> Reimposta l’indice e la directory di lavoro sullo stato dell’ultimo commit.
                Esempio:    git reset --hard HEAD

** git remote   -> Mostra tutte le versioni remote del repository. ("origin" forse origin non è un comando, non appare con -? Credo sia nome dato all'url di GitHub)
                Esempi:     git remote                              --> origin 
                            git remote add origin "incolla_url"     // impostare il Repository su GitHub per primo upload
                            git remote -v                           // mostra percorsi url del Repository
                            git remote show origin                  // mostra percorsi url del Repository ed altri dettagli
                            git remote remove origin                // rimuove percorso remoto del Repository
                            git remote set-url origin "incolla_url"    // modifica l'attuale percorso remoto dal Repository in..

- git tag       -> Contrassegna un commit specifico con un handle semplice e leggibile che non si sposta mai.
                Esempio:    git tag -a v1.0 -m 'this is version 1.0 tag'

- git diff      -> Genera file patch o statistiche delle differenze tra percorsi o file nel tuo repository git, o nel tuo indice o nella tua directory di lavoro.
                Esempio:    git diff

- git archive   -> Crea un file tar o zip incluso il contenuto di un singolo albero dal tuo repository.
                Esempio:    git archive --format=zip master^ README >file.zip

- git gc        -> Pulizia (Garbage Collector) per il tuo repository. Ottimizza il tuo repository. Dovrebbe essere eseguito di tanto in tanto.
                Esempio:    git gc
                                Counting objects: 7, done.
                                Delta compression using up to 2 threads.
                                Compressing objects: 100% (5/5), done.
                                Writing objects: 100% (7/7), done.
                                Total 7 (delta 1), reused 0 (delta 0)

- git fsck      -> Esegue un controllo di integrità del file system Git, identificando oggetti danneggiati.
                Esempio:    git fsck

- git prune     -> Rimuove gli oggetti che non sono più indicati da alcun oggetto in alcun ramo raggiungibile.
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
