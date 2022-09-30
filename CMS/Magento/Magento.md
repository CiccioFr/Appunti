## `PHP`
### [`Magento Guide`](https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/translations/translate_theory.html)

> i18n in Magento: Aiuta a tradurre la lingua corrente in altre lingue

> __("magento")   //in Magento: 
- __ è la funzione di traduzione.
    - Traduce il testo ricevuto come parametro se trova una traduzione oppure restituisce il testo così com'è se non c'è traduzione.
    - La funzione non definita in nessuna classe. È definito nel file functions.php. Il file functions.php è incluso in Mage.php quindi è disponibile per tutte le richieste.


    2 dir principali
    - app 
    - - child
    - - - ha moduli (opp è magento)

    nelle classi del tag il nome del file he son i layout che usa php come thempalate (phtml)

    compilare upgrade - + deployer + plulizia cache per magento quando si effettuano modifiche
.fadein/out() su nascosto


