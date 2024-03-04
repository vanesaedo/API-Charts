# API-Charts
Representar datos de API en gráfico

Practicaremos cómo crear gráficas con las librerías vistas en clase

1. Pediremos las películas de Star Wars y pintaremos una gráfica de líneas en la que podamos ver cada una de las películas.
En el eje X el nombre de la película
En el eje Y año de publicación
API ENDPOINT --> https://swapi.dev/api/films/


2. Pediremos los personajes de Star Wars y pintaremos una gráfica de barras en la que podamos ver

En el eje X el nombre del personaje
En el eje Y el número de películas en las que ha participado.
API ENDPOINT --> https://swapi.dev/api/people/
Para pintar todo esto usaremos Chartist Link a la docu: Chartist

1[X]. Tomo los datos de la api con fetch
2[X]. Transformo los datos en formato json
3[X]. Extraigo los actores y las películas(devuelve array con las películas por actor)
4[X]. Convertir films en array de número de películas por actor con .length
5[X]. Incorporar los resultados, almacenados en variables, como parámetros para la representación de la gráfica.
6[X]. Añadir script y link en la etiqueta <head> del .html según la documentación.


