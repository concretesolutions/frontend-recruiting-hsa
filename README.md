# Desafío Front End

## Instalacion dependencias

Se debera ejecutar **npm install** para instalar las dependencias basicas

## Levantar proyecto

Se debe ejecutar **ng serve** por defecto levanta en el puerto 4200

## Test

Tiene pruebas unitarias por defecto, por ende, en este punto no cumple con lo solicitado

## Desarrollo

El proyecto esta desarrollado en Angular 6, se divide en

- component : Contiene todos los componentes de la aplicacion, a su vez:
--   common: Contiene los dos componentes comunes loading-error y mensaje-generico, la primera procesa los mensajes de error enviados por ErrorHandlerService y muestra un cargando mientras espera. La segunda muestra un mensaje pasado segun el tipo (S,E,W,I)
-- home: Pagina principal
-- header-search: Contiene la barra de busqueda centralizada y realiza el llamado a la ruta de details cuando tiene un valor
-- details: Realiza la busqueda en github para obtener la informacion del usuario, si la busqueda arroja un error verifica si es un error 404 muestra el componente "not-found", sino, muestra un mensaje de error en la parte superior. Si la busqueda arroja un status 200, muetras dos componentes "image-details" y "repo-details", el primero muestra la informacion de la parte izquierda, imagen, nombre, estadisticas. El segundo va a buscar los repositorios del usuario y los lista.

- constant: Contiene los titulos mostrados por pagina

- directive: Contiene "only-characters-valid.directive" la cual se encarga de llamar al servicio "UtilCommon" y va limpiando lo que el usuario escribe en el input de busqueda

- model: Contiene clases que sirven para mapear los datos enviados por github y asi poder procesar sus valores mas facilmente

- pipe: Contiene "safe.pipe" el cual se encarga de limpiar el HTML pasado, requerido por los componentes comunes

- service: Contiene:
-- error-handler.service: Se encarga de procesar los errores de las llamadas, es una version basica
-- search.service: Realiza las llamadas al github
-- util-common.service: Contiene funciones comunes, por ahora solo tiene la que se encarga de limpiar el texto del input pasado

- app-routing.module: Contiene las rutas del proyecto

- app.component: Elemento base que muestra las rutas o componentes actuales

- assets: Contiene una carpeta de "images" donde estan las imagenes ocupadas
