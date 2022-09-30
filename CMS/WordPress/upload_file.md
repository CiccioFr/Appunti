[fonte nicholasmarmonti](https://nicholasmarmonti.com/wordpress/functions-php/#inserire-codice-testata)  
Per impostazione predefinita, WordPress permette di caricare pochi tipi di file (tipicamente quelli multimediali comuni come .png e .jpg). È però possibile estendere la possibilità di upload a qualsiasi tipo di file.  
```PHP
function my_myme_types($mime_types){
   $mime_types['svg'] = 'image/svg+xml'; // Consenti di caricare SVG
   $mime_types['psd'] = 'image/vnd.adobe.photoshop'; // Consenti di caricare PSD
   return $mime_types;
}
add_filter('upload_mimes', 'my_myme_types', 1, 1);
```
In [questa pagina](https://www.freeformatter.com/mime-types-list.html) è disponibile una lista completa di tutte le tipologie di MIME types / Internet Media Types per creare una funzione ad hoc.