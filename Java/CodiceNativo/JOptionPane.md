# JOptionPane - Classe 
## Declaration
`import javax.swing.JOptionPane;`

---
## Metodi più usati

### `showMessageDialog();`
Tipo return: `void`  
Output di un messaggio  
```java
JOptionPane.showMessageDialog(
        null,"Testo in finestra", "Titolo Finestra", 0);
```

---
### `.showInputDialog();`
Tipo return: `Object`  
Input Semplice   
```java
// overload con 2 - 4 - 5 parametri
String a = JOptionPane.showInputDialog(
        null, 
        "Testo interno.. ", 
        "Titolo Finestra", 
        JOptionPane.PLAIN_MESSAGE, // * messageType
        null            // icona
);
```

Input con Menu a tendina
```java
Object[] possibleValues = { "First", "Second", "Third" };
Object selectedValue = JOptionPane.showInputDialog(
        null, "Testo interno.. ", "Titolo Finestra",
        JOptionPane.PLAIN_MESSAGE, // * messageType
        null            // icona
        possibleValues, possibleValues[0]
);

JOptionPane.showMessageDialog(null, selectedValue, "Titolo Finestra", JOptionPane.WARNING_MESSAGE);
```

---
### `showConfirmDialog();`
Tipo return: `int` = val pulsante premuto  
Pannello con le opzioni optionType (ok / sì / no / annulla)
```java
JOptionPane.showConfirmDialog(
        null, "Scegli: Si o No", "La Scelta", 
        JOptionPane.YES_NO_OPTION,  // * optionType
        JOptionPane.PLAIN_MESSAGE,  // * messageType
        null            // icona
);
```

---
## `showOptionDialog();`
Tipo return: `int` = indice array  
Finestra con pulsanti scelti da noi
```java
Object[] options = { "Pulsante0", "pul1", "pul2", "pul3", "pul4" };
int n = JOptionPane.showOptionDialog(
        null, 
        "Click OK to continue", "Warning",
        JOptionPane.DEFAULT_OPTION,  // * optionType
        JOptionPane.INFORMATION_MESSAGE,  // * messageType
        null            // icona
        options, options[0]
);
```

---

## messageType
Appare relativo disegnino
* -1 => nulla => plain     => JOptionPane.PLAIN_MESSAGE
*  0 => X   => Error       => JOptionPane.ERROR_MESSAGE
*  1 => i   => Information => JOptionPane.INFORMATION_MESSAGE
*  2 => !   => Warning     => JOptionPane.WARNING_MESSAGE
*  3 => ?   => Question    => JOptionPane.QUESTION_MESSAGE

## optionType
i pulsanti in finestrella
* -1 => JOptionPane.DEFAULT_OPTION  -> OK
* 0 => JOptionPane.YES_NO_OPTION  -> SI / NO
* 1 => JOptionPane.YES_NO_CANCEL_OPTION -> SI / NO / Annulla
* 2 => JOptionPane.OK_CANCEL_OPTION -> OK / Annulla