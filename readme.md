# informe de gestalt, usando el framework Bootstrap en readme

En este proyecto he creado una web en la que hay información sobre las leyes de gestalt. En esta web he usado bootstrap como framework para hacer que la web sea responsive. Para recordar un framework es un conjunto de librerias y un conjunto de herramientas que usamos para programar. La estructura de este proyecto es la siguiente:  

- carpeta css con un styles.css
- carpeta js con un main.js 
- index.html
- carpeta img con las imagenes que he usado
- readme.md

# Contenido del proyecto

La página está dividida en 8 secciones, cada una dedicada a una ley de la Gestalt: 

Ley de Destino Común  
Ley de Proximidad  
Ley de Semejanza  
Ley de Continuidad  
Ley de Cierre  
Ley de Figura–Fondo  
Ley de Simetría y Orden  
Ley de Región Común 
 
Cada sección incluye un título, una breve explicación y un ejemplo visual (imagen o fondo con efecto parallax, en mi caso he usado 2 fondos parallax). 

## Modo oscuro

Añadí un botón para activar el modo oscuro, hecho con un pequeño script en JavaScript.  
Cuando se activa, el fondo cambia a oscuro y el texto del encabezado pasa a blanco.  
El botón también cambia de texto entre "Modo oscuro" y "Modo claro".

## Efecto Parallax

El efecto parallax lo he aplicado en dos secciones para dar sensación de profundidad.  
Funciona haciendo que la imagen de fondo se mantenga fija mientras el resto del contenido se desplaza.  
Esto se logra con background-attachment: fixed; en CSS.

## JavaScript

El JavaScript del proyecto es sencillo:
- Controla el modo oscuro.
- Activa el scrollspy.
- Permite que todo funcione sin necesidad de recargar la página.

##  Despliegue

He subido el proyecto a Vercel, que genera automáticamente una URL pública

También se podría subir a Netlify, ya que ambos soportan sitios estáticos sin configuración adicional.


## Accesibilidad

He tenido en cuenta algunos aspectos básicos:
- Buen contraste entre texto y fondo.
- Uso correcto de etiquetas semánticas (header, main, section, footer...).
- Imágenes con atributo alt.
- Tamaños de texto legibles y estructura jerárquica de títulos.

# Autor 

Victor Barceló 
2º DAW - M9 Diseño de Interfaces Web
