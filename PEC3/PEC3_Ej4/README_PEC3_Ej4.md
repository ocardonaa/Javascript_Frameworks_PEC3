Lo primero que hice fue instalar webpack con:

`npm install --save-dev webpack webpack-cli ts-loader`

Luego copié los contenidos de ejemplo de webpack en un nuevo archivo webpack que creé a modo de plantilla

Lo adapté borrando los contenidos que no necesitaba y añadiendo algunos nuevos como mode: 'development'

Tras ver que no funcionaba añadí uuid ya que quise importar esta libreria para crear los uuid que identifican cada todo y lo reinstalé para que webpack lo tuviera con

`npm i uuid`

tras esto ejecuté para lanzar la aplicación con

`npx webpack --config webpack.config.js`

Y para ver el resultado usé la extensión de VSCode de Live Server, lanzada sobre el fichero index.html, aqui adjunto una captura de este

![alt text](image.png)