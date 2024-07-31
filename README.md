Link del diseño replicado de behance: https://www.behance.net/gallery/193559089/Portfolio-Landing-Page-UI-Web-design-Development 
Link de la página subida en github (html y css): https://ignaciofercosio.github.io/MiPortfolio/
Link de la pagina subida en vercel (react y chakra): https://vite-project-567syi4bq-ignacios-projects-615efd08.vercel.app/#contacto

Comentarios sobre el código:
- El Header cuenta con su navbar funcional que nos lleva a las distintas secciones de la página. Al achicarse el dispositivo, nos queda un menú hamburguesa funcional también. Cuenta con un botón que descarga un CV provisorio que cargué
- El Hero posee una imagen animada para asemejarme al diseño propuesto (luego hay una foto real), el botón "Mis Trabajos" lleva a proyectos y "Contáctame" a contacto. El fondo lo hice con funciones que repiten líneas con un cierto ángulo.
- En Servicios hay animaciones de hover en las tarjetas que hacen que las imágenes superpuestas se hagan invisibles y aprezcan las imágenes que están debajo (también cambian los colores).
- En Sobre Mí tuve que replicar el fondo con un programa de dibujo, la imagen la realicé toda en css, jugando con las propiedades position y border radius, pero para las figuras de alrededor tuve que usar photoshop, por eso todo el código de la imagen es solo una etiqueta img. Con el botón "Descargar CV" pasa lo mismo que el del header, los íconos te llevan a mis redes sociales.
- En Proyectos puse imágenes ejemplo ya que no cuento con proyectos realizados.
- En educación y experiencia hice las líneas del tiempo con un div vertical con forma de línea y dentro tiene divs circulares. En la parte de experiencia, repliqué lo de eduación porque no cuento con experiencia en el rubro.
- En Contacto puse un formulario, cambie las animaciones de los inputs y los placeholders. El formulario es completamente funcional, valida todos los campos antes de permitirte enviar el correo. Cuando el correo logra enviarse, el usuario es informado mediante un mensaje de éxito. Esta funcionalidad la implementé mediante Email Js.
- El proyecto está deployado en Vercel. En el código se puede ver que traté de aprovechar el uso de la reutilización de código en algunos componentes como botones y tarjetas.

Tecnologías utilizadas:
- React Js
- Chakra Ui
- HTML