## Modificatori di Accesso / Visibilità
- **`public`** visibile e modificabile globalmente.  
- **`protected`** visibile dalle classi del medesimo package e dalle classi da essa derivate anche in package esterni.  
- **`default`** (identificato dalla **omissione** del modificatore) implicherà visibilità solo alle classi nel medesimo package.  
    L'elemento viene considerato `package-local` o `friend` (si dice che assume la visibilità di default).
- **`private`** visibilità locale - limita la visibilità solo nella classe stessa  
    In questo modo i valori `private` vengono **`incapsulati`**, rendendo impossibile il loro richiamo o modifica.  
    Dove possibile bisogna sempre editare come `private` gli elementi del programma, La valorizzazione dei parametri persiste nelle successive istanze della classe, e cmq sinchè il programma è in runtime.  

---