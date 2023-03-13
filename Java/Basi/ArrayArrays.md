# Array in Java

```java
int n = 4;
int[] array = new int[n];
String[] animali = {"leoni", "tigri", "orsi"};

int arrayLength = array.length;
```

## la classe Arrays
### package `java.util.Arrays`  

Classe contenente metodi statici utilizzati con gli array per cercare, ordinare, confrontare, inserire elementi o restituire una rappresentazione in stringa di un array.

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

### `Arrays.sort();` - Ordinamento
```java
// Ordinamento persistente di elementi dell'array
Arrays.sort(array);

// Ordinare un range di elementi
Arrays.sort(array, fromIndex, toIndexExcluding);

// ordinamento Decrescente
// Non è possibile ordinare una array di primitive in ordine "decrescente" usando il comando Arrays.sort() e Collections.sort() metodo, poiché il comparatore funziona sulle classi e sugli oggetti Wrapper 
Integer[] array = {4, 2, 3, 1, 5};
Arrays.sort(array, Comparator.reverseOrder());
```
### `Arrays.binarySearch();` - Posizione di un elemento
```java
// Posizione di un valore
// l'array DEVE essere prima Ordinato! se l'array non è ordinato, restituisce un valore fallace
Arrays.binarySearch(array, valoreRicercato); // return int
int posizione = Arrays.binarySearch(array, "casa");
```
### `Arrays.toString();` - Convesione in stringa
```java
// Convesione in stringa dell'array
Arrays.toString(array); // return String
// [12, 7, -33, .. ]
```
### `Arrays.deepToString();` - Convesione in stringa di array multidimensionali
```java
// Restituisce una rappresentazione in forma di stringa del "contenuto profondo" dell'array specificato. Questo metodo è progettato per convertire array multidimensionali in stringhe.  
Arrays.deepToString(array); // return String
// [[12, 4], [9, -4], [-33, 8]]
```

### `Arrays.equals(array1,array2);` - confronta 2 arrey

### `Arrays.fill();` - sovrascrive valori dell'array
```java
int[] array = {12, 7, 4, 9};
// sovrascrivere tutti i valori dell'array
Arrays.fill(array, nuovoValore);
Arrays.fill(array, 0); // [0, 0, 0, 0]

// sovrascrivere un range di valori dell'array
Arrays.fill(array, fromIndex, toIndexExcluding, nuovoValore);
Arrays.fill(array, 1, 3, 0); // [12, 0, 0, 9]
```
