Para poder desplegar mi página requiere tener instalado tanto node.js como npm.
También es necesario descargar  dos módulos adicionales de react
React router: Nos ayuda a enrutar todas las páginas de react, para descargarlo usaremos este comando dentro de la raíz del proyecto: 
npm install react-router-dom
Axios: Nos ayuda a comunicarnos con nuestro servidor (API REST). El comando que usaremos para instalarlo es: 
npm install axios
Para la parte servidor necesitaremos tener encendidos los servicios de Apache y MySQL de XAMPP e insertar la carpeta de la parte servidor en htdocs. Ahora hay que importar la BD proporcionada junto a esta documentación. Para la BD estoy utilizando el siguiente usuario
usuario: edib 
contraseña: edib
host: localhost
nombre de la BD: proyectotests
Una vez hecho esto, ya podremos iniciar la web con el comando (desde la raíz del proyecto):
npm start

