# MarkDown

## Dialetti di Markdown

Ad oggi, coesistono diverse implementazioni della sintassi di Markdown. Le più importanti sono:
- `MultiMarkdown`: Amplifica la sintassi iniziale per aggiungere le note a piè di pagina, le tabelle, e alcuni dati aggiuntivi (metadata).
- `Markdown Extra`: Di nuovo, aggiunte alla sintassi iniziale.
- `GitHub Flavoured Markdown`: Questa è una variante di Markdown creata dalla piattaforma di hosting GitHub (sulla quale è ospitato anche Zettlr!) ed è attualmente uno dei dialetti più diffusi.
- `Pandoc Markdown`: Il Markdown Pandoc è un sovrainsieme del GitHub flavoured Markdown e supporta ancora più elementi.
- `CommonMark`: Tenta di implementare tutti gli elementi impossibili senza ambiguità. Da notare che CommonMark non supporta ancora nessuna specifica per le note a piè di pagina.

## Testo
- *corsivo* | _corsivo_
- **grassetto** | __grassetto__
- ~~cancellato~~
- <u>sottolineato</u>

## Flag

- [ ] `- [ ]` - Quadratino di flag
- [x] `- [x]` - Quadratino flaggato

---
## codice
```js
console.log("I'm a code block!");
```

---
## Tabella:

Column | Column | Column
:----- | :----: | -----:
Left   | Center | Right
align  | align  | align


simboli | Descr. / rappresentazione  | dimesione
------ | ------ | :--:
`&thinsp;` | spazio più piccolo. | 1/2
`&nbsp;`   | spazio bianco (NON-breaking space) | 1
`&ensp;`   | spazio leggermente maggiore (poco meno del doppio) rispetto all'entità precedente; | 2
`&emsp;`   | spazio enfatizzato  | 4
`&gt;`   | &gt;  | 

---

<details open> <summary>Spoiler warning - Cliccami per aprire</summary>

`<details open> <summary>Spoiler warning</summary>`  
riga vuota!!  
> contenuto  

`</details>`
</details>

---
![Testo alternativo ad immagine non trovata](https://fakeimg.pl/100)

---
## [`URL-encoding`](https://www.bettiolo.com/custom/1/tools/Utilit%C3%A0%20per%20il%20programmatore%20Web/URL%20Encoding%20-%20Lista%20caratteri.asp)  
Lista di caratteri ASCII in formato "URL-encoding" (formato esadecimale).  
I valori esadecimali possono essere utilizzati per visualizzare, all'interno di Browser o Plug-in, le lettere e i caratteri non standard.  

---
## Correlati
[LaTeX](../LaTeX/ReadMe.md)  
[Pandoc (vocabolo)](./../Supporti/Utility/ReadMe.md#Pandoc)

---
## Formule matematiche "NON FUNGE SU GitHub!!"
`$ f(x+y) $` - Formule matematiche in line: $ \bullet  f(x+y) $

`$$ f(x+y) $$` - Formule matematiche cento pagina $$ f(x+y) $$
altri simboli $ f(x,\ast) f(x,\star) f(x,\cdot) f(x,\bullet)  $

---
## Guide on-line

[Markdown and Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview-security)
- [Guida MarkDown](https://learntutorials.net/it/markdown/topic/529/iniziare-con-markdown)
- [guida markdown](https://www.qownnotes.org/it/getting-started/markdown.html)  
- [altra interessante](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/markdown.html?lang=it) con riferimenti a [GitHub Flavored Markdown (GFM)](https://docs.github.com/en/get-started/writing-on-github)
