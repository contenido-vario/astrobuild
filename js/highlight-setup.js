// 1. Cargar dinámicamente el script principal de Highlight.js desde el CDN
// Esto evita tener que poner el script de cdnjs en el HTML.
const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js";

script.onload = () => {
    // 2. Una vez que la librería ha cargado con éxito en el navegador,
    // registramos los lenguajes específicos si los necesitas mapear de forma personalizada:
    if (typeof javascript !== 'undefined') hljs.registerLanguage('javascript', javascript);
    if (typeof html !== 'undefined') hljs.registerLanguage('html', html);
    if (typeof css !== 'undefined') hljs.registerLanguage('css', css);
    
    // 3. Ejecutamos el formateador global
    hljs.highlightAll();
};

document.head.appendChild(script);