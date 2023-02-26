# Config

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

# Credential
`git credential`

cat .git/config
git credential 
git config --global credential.helper store
git config --global credential.helper 'cache --timeout=3600'
- store significa salvale sul pc
- si può definire iol metodo che deve usare git per salvare le credenziali, per default è un cache per 3600 secondi

(in windows cercare "credential" si vedono tutte le credenziali salvate)
