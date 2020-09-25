# Entorno de desarrollo


Configuración del entrono de desarrollo 

# Archivos Base

  - package.json: Lleva registro de las dependencias y scripts de npm del proyecto. También contiene la información 
  ---
  - package-lock.json: Describe el árbol de dependencias exacto que se generó, para que las personas que instalen las dependencias posteriormente puedan generar un árbol identico, independiente de las actualizaciones que puedan tener las sub-dependencias individuales de cada dependencia
  ---
  - gulpfile.js: contiene las tareas que gulp ejecutará, en ella se definen las tareas para optimizar los archivos CSS, JS, de Imagen y también para convertir de SCSS a CSS
  ---

# Carpetas base 
src
----
- src/scss: contiene todos los archivos .scss a convertir a CSS 
- --
- src/js: contiene todos los archivos .js a minificar 
- ---
- src/images: contiene todas las imagenes a optimizar 
----
dist
----
- dist/css: contiene los archivos CSS resultantes de la conversión de SCSS y minificados mediante gulp
---
- dist/js: contiene los archivos JS minificados
---
- dist/images: contiene los archivos de imagen optimizados 
- --
### Tareas


| Tarea | Función |
| ------ | ------ |
| scssTask | Convierte los archivos .scss a archivos de CSS, posterior a ello minifica el archivo CSS resultante y lo almacena en la carpeta dist/css |
| minifyJSTask | Minifica los archivos .js ubicados dentro de la carpeta src/js, y posteriormente almacena los archivos minificados en dist/js |
| imagesTask | Optimiza los archivos de imagen encontrados en la carpeta src/images y posteriomente almacena las imagenes optimizadas en dist/images|
| watchTask | revisa cambios en los archivos .scss, .html, .js y archivos de imagen; si detecta algun cambio ejecuta en serie las tareas: scssTask, minifyTask, imagesTask y reloadTask|
| serveTask| Inicializa el servidor de BrowserSync y toma como archivos base del servidor los archivos incluidos en la carpeta 'dist' |
|realoadTask| Refresca el servidor |

----


### Instalación

Requiere:
- [Node.js](https://nodejs.org/) v14.9.0 o superior 
- NPM v6.14.8 o superior

Dependencias: 

- [Gulp](https://www.npmjs.com/package/gulp-cli) 
- [Browser-Sync](https://www.npmjs.com/package/browser-sync)
- [Sass](https://www.npmjs.com/package/gulp-sass)
- [Uglify](https://www.npmjs.com/package/gulp-uglify)
- [CSS-Minify](https://www.npmjs.com/package/gulp-cssmin)

Instalar las dependencias (y dependencias de desarrollador), ejecutar tarea para optimizar imagenes y correr el servidor de recarga automatica en el puerto 3000 mediante gulp.

```sh
$ npm install -d
$ gulp
```