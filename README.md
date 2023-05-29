<h1 align="center"> TPO Desarrollo Web </h1>


<p align="center"> <img src ="https://github.com/alejandroe993/TPO_HTML-CSS_Javascript/assets/95320686/be080835-75f2-4b42-88a1-6849e310e87a" width="390" height="150"> </p>


## Introduccion
Proyecto Web desarrollado como Trabajo Practico Obligatorio del curso Codo a Codo 4.0. El mismo es un trabajo grupal de 4 personas y debe cumplir con los siguientes requisitos:

● Poseer al menos 4 páginas html, siendo su temática libre. En caso de ser un Sitio
Web estilo One Page, el mismo deberá tener al menos 4 secciones.

● Utilizar etiquetas semánticas para estructurar el sitio.

● Contener un formulario de contacto con validación realizada mediante Javascript.
Opcional: el formulario podrá enviar un email utilizando algún servicio externo
destinado para ello.

● Utilizar al menos un Iframe, íconos de FontAwesome o Flaticon; y fuentes locales o
bien de Google Fonts o similar.

● Tener al menos una página totalmente responsive con 3 puntos de corte para 3
tamaños de dispositivos distintos.

● Incorporar al menos una animación, transformación o una transición (se deberá
indicar en qué parte del sitio web fue incorporada la animación).

● Poseer una estructura HTML maquetada con Flexbox y/o Grid.

● Consumir una API Rest desde JavaScript. Deberá informar la API utilizada al
momento de entregar el TPO.

● En caso de querer utilizar Bootstrap (no es obligatorio), sólo podrá hacerlo en la
página del formulario del sitio web. No se aceptarán proyectos desarrollados
íntegramente en algún Framework de CSS (Bootstrap, Materialize, Tailwind, etc.) o
similar.

● El desarrollo web deberá subirse a un servidor on-line para poder ser navegada por
el Instructor. Ejemplo: GitHub Pages, Netlify o similares.

## Descripción del Proyecto
Para el proyecto se creo una pagina web de una cadena de restaurantes llamada "JAJA Comidas Regionales". La misma cuenta con 6 paginas HTML realizadas por los distintos miembros del grupo. Las mismas son : Inicio, Menu, Postres, Cervezas, Catering y Contacto. Todas a su vez estan estilizadas utilizando herramientas de CSS y algunas empleando tecnologias de Javascript. Se trata de una pagina web responsive con 3 puntos de corte para ser visible en computadoras, tablets y celulares. 

![Pagina inicial](https://github.com/alejandroe993/TPO_HTML-CSS_Javascript/assets/95320686/8ecb45a4-3d89-41c5-8b97-d5d6dca44588)




## Recursos utilizados
Se usaron varios recursos para la creacion de la pagina web:

### Iframe
Recuadro de Google Maps con la ubicacion de los 4 restaurantes distribuidos en distintas provincias del pais.

<p align="center"> <img src ="https://github.com/alejandroe993/TPO_HTML-CSS_Javascript/assets/95320686/a679ff46-879e-4484-b2fc-81739e4d30a6" > </p>


### Iconos y logos
Se confeccionaron los siguientes iconos utilizando la herramiente web "Canva" para la barra de navegacion y la pagina principal respectivamente:

<p align="center"> <img src ="https://github.com/alejandroe993/TPO_HTML-CSS_Javascript/assets/95320686/7d523048-3a0d-44c1-be03-186e5e990e90" width="300" height="300"> </p>

<p align="center"> <img src ="https://github.com/alejandroe993/TPO_HTML-CSS_Javascript/assets/95320686/82df3b9d-d130-4dda-b7cc-702073e150ae" width="300" height="300"> </p>


Mientras que el icono utilizado para pestaña es el siguiente:

<p align="center"> <img src ="https://github.com/alejandroe993/TPO_HTML-CSS_Javascript/assets/95320686/8e5d13fd-3dd1-4ae1-876f-3df766b65128" width="150" height="150"> </p>


A su vez el footter cuenta con los logos de las diferentes redes sociales del restaurantes:

![Redes](https://github.com/alejandroe993/TPO_HTML-CSS_Javascript/assets/95320686/7983368b-c531-4c83-b127-a5aeb3a8f635)


### Animacion
La animacion utilizada es una del tipo vibratorio. La misma esta presente en el logo de la barra de navegacion y los logos de las redes sociales:

```css
@keyframes vibrate {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(-3deg); }
  20% { transform: rotate(3deg); }
  30% { transform: rotate(0deg); }
  40% { transform: rotate(3deg); }
  50% { transform: rotate(-3deg); }
  60% { transform: rotate(0deg); }
  70% { transform: rotate(-3deg); }
  80% { transform: rotate(3deg); }
  90% { transform: rotate(0deg); }
  100% { transform: rotate(-3deg); }
}

.logo:hover {
  animation: vibrate 0.5s;
  animation-iteration-count: infinite;
}

```


Animacion de difuminado en la pagina "Catering"

```css
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}
@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
```


### Responsive
Cada pagina del proyecto utilizo Media Queries para crear puntos de cortes y asi se pueda visualizar tanto en computadoras, tablets y celulares. Debido a las diferentes configuracions de las paginas, se usaron distintos puntos de corte para cada una. Los siguientes son:

```css
INICIO
@media screen and (max-width: 800px)
@media screen and (max-width: 670px)
@media screen and (max-width: 380px)

MENU
@media screen and (max-width: 800px)

POSTRES
@media (min-width: 380px)
@media (min-width: 800px)
@media (min-width: 1024px)

CATERING
@media (min-width: 1024px)

CONTACTO
@media screen and (max-width: 800px)
```

### Formulario
El formulario de la pagina de "Catering" cuenta con una validacion mediante Javascript.

![Screenshot (57)](https://github.com/alejandroe993/TPO_HTML-CSS_Javascript/assets/95320686/c15ad4e5-e3d8-47ab-ae6a-517dee59d7a6)

Se empleo el siguiente codigo:

```js
// Validar los campos del formulario
  const nombre = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const mensaje = document.querySelector("#message").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor, complete todos los campos del formulario.");
    return;
  }

  // Validar el formato del correo electrónico utilizando una expresión regular simple
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return;
  }
```

### API
La API utilizada en este caso proviene de la pagina https://sampleapis.com/api-list/beers 

![Screenshot (54)](https://github.com/alejandroe993/TPO_HTML-CSS_Javascript/assets/95320686/07203780-4807-4934-88bb-f79f765c89c8)


La informacion no se consume directamente de la API sino que se realizo un mockup para crear una base de datos local de tipo JSON en la carpeta [assets/db/beers.json.](https://github.com/alejandroe993/TPO_HTML-CSS_Javascript/blob/main/assets/db/beers.json)

Al ingresar a la pagina "Cervezas" nos pedira que pongamos un precio maximo y en base a eso nos mostrara diferentes tipos de cervezas con su imagen, nombre y un precio inferior o igual al que elegimos.

![Screenshot (56)](https://github.com/alejandroe993/TPO_HTML-CSS_Javascript/assets/95320686/3da40e62-bef9-4c53-add5-1aa687875fd1)


## Acceso al Proyecto
Para acceder al proyecto se puede utilizar el link al repositorio de GitHub:
https://github.com/alejandroe993/TPO_HTML-CSS_Javascript

O el link de GitHub Pages:
https://alejandroe993.github.io/TPO_HTML-CSS_Javascript/


## Tecnologías Y herramientas utilizadas

 ●HTML
 
 ●CSS
 
 ●JAVASCRIPT
 
 
![html5-logo](https://github.com/alejandroe993/TPO_HTML-CSS_Javascript/assets/95320686/6de6981c-414e-4687-8e69-55a04e541570)


## Personas Desarrolladoras del Proyecto
●Espinosa, Alejandro (https://github.com/alejandroe993) ==> Pagina de Menu, Cerveza y Contacto.

●Pizarro, Juan Francisco (https://github.com/juanpizarro11) ==> Pagina Principal, animaciones y logo.

●Martin, Joel Francisco (https://github.com/joelmartin73) ==> Pagina de Postres

●Romano, Reinaldo Carlos (https://github.com/Aldo21496) ==> Pagina de catering y Barra de navegacion.
