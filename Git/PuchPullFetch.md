# Push, Pull e Fetch

`git push`      -> Spinge tutti gli oggetti locali modificati nel repository remoto e fa avanzare i suoi rami.
                Esempio:    git push origin master
                            git push --set-upstream origin main

---
`git pull`      -> Scaricare nuovi dati dal repository remoto e li unisce a quello locale. (allinea con la versione remota)
                Esempio:    git pull origin

---
`git fetch`     -> Scaricare nuovi dati dal repository remoto MA NON li unisce a quello locale. (non cambia alcuno dei branch locali posti sotto “refs/heads”)
                Esempio:    git pull fetch      //da verificare

---

git push --set-upstream ciccio1 master
