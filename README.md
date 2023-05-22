<h1 align="center"> TPO Desarrollo Web </h1>


<p align="center"> <img src ="https://github.com/alejandroe993/TPO_HTML-CSS_Javascript/assets/95320686/be080835-75f2-4b42-88a1-6849e310e87a" width="390" height="150"> </p>


## Introduccion
Proyecto Web desarrollado como Trabajo Practico Obligatorio del curso Codo a Codo 4.0. El mismo es un trabajo grupal de 4 personas y debe curplir con los siguientes requisitos:

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
Para el proyecto se creo una pagina web de una cadena de restaurantes llamada "JAJA Comidas Regionales". La misma cuenta con 5 paginas HTML realizadas por los distintos miembros del grupo. Las mismas son : Inicio, Menu, Postres, Catering y Contacto. Todas a su vez estan estilizadas utilizando herramientas de CSS y algunas empleando tecnologias de Javascript. Se trata de una pagina web responsive con 3 puntos de corte para ser visible en computadoras, tablets y celulares. 

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
La animacion utilizada es una del tipo vibratorio empleando el siguiente codigo:

```python
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
La misma esta presente en el logo de la barra de navegacion y los logos de las redes sociales.


### Responsive
Cada pagina del proyecto utilizo Media Queries para crear tiene 3 puntos de cortes distintos, asi se pueda visualizar tanto en computadoras, tablets y celulares. Las siguientes son:

```python
INICIO
@media screen and (max-width: 800px)
@media screen and (max-width: 670px)
@media screen and (max-width: 380px)

MENU
POSTRES
CATERING
CONTACTO

```

### API


## Acceso al Proyecto
Para acceder al proyecto se puede utilizar el link al <

<a href="https://github.com/alejandroe993/TPO_HTML-CSS_Javascript.git" target="_blank">repositorio de GitHub</a>





O el link de GitHub Pages:


## Tecnologías Y herramientas utilizadas

 ●HTML
 
 ●CSS
 
 ●JAVASCRIPT
 
 
![html5-logo](https://github.com/alejandroe993/TPO_HTML-CSS_Javascript/assets/95320686/6de6981c-414e-4687-8e69-55a04e541570)


## Personas Desarrolladoras del Proyecto
●Espinosa, Alejandro (https://github.com/alejandroe993)

●Pizarro, Juan Francisco (https://github.com/juanpizarro11)

●Martin, Joel Francisco

●Romano, Reinaldo Carlos

