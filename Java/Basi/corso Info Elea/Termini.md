## normalizzazione
In informatica la normalizzazione è un procedimento volto all'eliminazione della ridondanza informativa e del rischio di incoerenza del database. Esistono vari livelli di normalizzazione (forme normali) che certificano la qualità dello schema del database.  
Questo processo si fonda su un semplice criterio: se una relazione presenta più concetti tra loro indipendenti, la si decompone in relazioni più piccole, una per ogni concetto. Questo tipo di processo non è sempre applicabile in tutte le tabelle, dato che in alcuni casi potrebbe comportare una perdita d'informazioni. 
[link Wiki](https://it.wikipedia.org/wiki/Normalizzazione_(informatica))

## Dipendenza funzionale
Una dipendenza funzionale è un particolare vincolo di integrità semantico per il modello relazionale che descrive legami di tipo funzionale tra gli attributi di una relazione. 
`{ID, Esame} -> Voto`