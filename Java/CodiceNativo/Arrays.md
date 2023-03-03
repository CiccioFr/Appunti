# Arrays - Classe
### package `java.util`

contiene molti metodi (tutti statici) per manipolare gli array. Ci sono metodi per effettuare inizializzazioni, confronti, ricerche e ordinamenti, per trasformare un array in una lista e per ottenere una stringa dal contenuto dell’array (in modo da poter stampare il contenuto dell’array senza ricorrere ad un ciclo).

```java
// Per un array di numeri interi:

static void fill(int[] a, int val) 
//assegna il valore specificato a ogni elemento dell’array;

public static boolean equals(int[] a, int[] a2)
// confronta i due array e restituisce true se sono uguali;

static int binarySearch(int[] a, int key)
// cerca il valore indicato come key nell’array usando l’algoritmo di ricerca binaria;

static void sort(int[] a)
// ordina l’array;

static String toString(int[] a)
// restituisce una stringa che rappresenta il contenuto dell’array.
```