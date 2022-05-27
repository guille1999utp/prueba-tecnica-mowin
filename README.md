# Mowin

el proyecto esta hecho con [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## servidor de desarrollo

para correr el servidor de desarrollo usar `ng serve` . nos arrojara un puerto por defecto `http://localhost:4200/`.

## Paquetes

los paquetes usados en el proyecto fueron boostrap y boxicons, para poder instalar estos paquetes escribir los siguientes comandos en la consola:

 `npm install boxicons --save`,`npm install bootstrap@5.2.0-beta1 `

ya despues de instalar los paquetes en angular.json agregar las rutas de los paquetes en node-modules y agregarlas en styles y en el caso de boostrap en styles y en script ya que este utiliza funcionalidades javascript.

tener en cuenta que los archivos a agregar en angular.json tienen que tener antes de su terminacion el min es decir min.js, min.css, etc.