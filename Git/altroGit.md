# Altro...

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