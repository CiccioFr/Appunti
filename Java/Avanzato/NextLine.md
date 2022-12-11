Nella classe BufferReader non esiste questo tipo di problema. Questo problema si verifica solo per la classe Scanner, a causa dei metodi nextXXX() che ignorano il carattere di nuova riga
- nextLine() legge solo fino al primo carattere di nuova riga. Se utilizziamo un'altra chiamata del metodo nextLine() tra nextXXX() e nextLine(), questo problema non si verificherà perché nextLine() consumerà il carattere di nuova riga.

[Link](https://www.geeksforgeeks.org/difference-between-scanner-and-bufferreader-class-in-java/)