# Blacklist
- Este proyecto brinda la posibilidad de blacklistear los productos desde el backend usando NodeJS en Express. Mostrando el resultado en el frontend usando ReactJS.

Funcionalidades:
----------------

- Desde el backend o usando Postman podemos hacer un CRUD de los productos.

    http://localhost:3000/products/seed - post: seedear la base de datos.
    http://localhost:3000/products - get: traer la lista de productos.
    http://localhost:3000/products - post: insertar en la base de datos.

    Ejemplo del contenido:
    {
        "description":"asd",
        "image_url":"asd",
        "price":123,
        "list_price":123,
        "discount":123,
        "enabled":true
    }

    http://localhost:3000/products/id - get: traer un producto de la lista.
    http://localhost:3000/products/id - patch: enable: true/false un producto de la lista.

Pasos a seguir para correr las aplicaciones localmente:
-------------------------------------------------------

- Descargar el repositorio de GitHub.
- En la terminal, ir a la carpeta /backend y ejecutar el comando 'npm install'.
- Luego de que se instalen las dependencias ejecutar el comando 'npm start'.
- Abrir una nueva terminal, ir a la carpeta /frontend y ejecutar los comandos, nuevamente, 'npm install' y 'npm start' (El backend estara usando el puerto 3000, por lo que el frontend preguntara si quiere utilizar otro puerto. Le dicen que si escribiendo 'y'+ ENTER).
- Finalmente, se abrira una pestaña en el navegador con el endpoint /products el cual muestra la vista de los productos. Al hacerle click a un producto sera redirecionado al endpoint /products/id.

Lo que no logre hacer.
----------------------

- No logre que se renderize /products con la condición que muestre producto si esta enable(true/false) y si no lo esta que no lo muestre.
Intente hacerlo usando un conditional render adentro de la funcion .map que uso para recorer los elementos de la Array, la cual contiene los datos de mi API. 

Ejemplo:

render() {
    return (
        <div>
            {this.state.products.map(product => ( this.state.products.enable ? (<div>'Estructura HTML para mostrar el producto'</div>) : ('null' o 'div vacio')
        </div>
    )}

Así es como tenía pensado resolverlo, intente de varias formas similares pero no funcionaron.

--------------------------------------------------------------------------------------------------

- No logre que al hacer click en cualquier producto me lleve al endpoint (/products/{id}) y me muestre el producto correspondiente. Pense en hacerlo con un <Link></Link> adentro de la funcion .map para que me cree un 'Link' por cada producto y que reconozca el id del mismo.

---------------------------------------------------------------------------------------------------

Agrego que no pude corregir como se ven los acentos. No quise modificar la información brindada y el UTF-8 no parece funcionar para esta caso.

