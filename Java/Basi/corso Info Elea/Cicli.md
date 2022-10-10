# Cicli

```java
for (int i = 0; i < 10; i++) {
    // inizializzazione
    // condizione di permanenza
    // incremento indice / annullamento di validità del coclo
    // codice..
}

String str = "ciao a tutti";
for (int i = 0; i < str.length(); i++) {
    System.out.print(str.charAt(i) + " ");
}

for (int i = str.length()-1; i >= 0; i--) {
    System.out.print(str.charAt(i) + " ");
}

// La tabella Pitagorica
for (int i = 0; i < 10; i++) {      // Colonne
    for (int j = 2; j < 10; j++) {  // Righe
        System.out.print(" " + i * j);
    }
    System.out.println();
}

// Ciclo While
System.out.println("Ciclo While");
char lettera = 97;  // a
while (lettera <= 'z') {
    System.out.print(lettera + " ");
    lettera++;
}

// Ciclo Do While
System.out.println("\n\nCiclo Do While");
lettera = 'A';
do {
    System.out.print(lettera + " ");
    lettera++;
} while (lettera <= 'z');

System.out.println("\n");
// -------
int vocali = 0;
int consonanti = 0;

for (char letterina = 'a'; letterina <= 'z'; letterina++) {
    switch (letterina) {
        case 'a','e','i','o','u':
            System.out.println(letterina + " è una vocale");
            vocali++;
            break;
        default:
            System.out.println(letterina + " è una consonante");
            consonanti++;
    }
}


for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    System.out.println("index: " + i);
}

for (int i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    System.out.println("indice: " + i);
}
```