Para consultar los productos:

Petición GET - Todos los productos

http://localhost:8090/api/products - API
http://localhost:8090/products - Navegador

--------------------------------------------------------

Petición POST - Guardar producto

http://localhost:8090/api/products

Estructura

{
    "title": "Producto 2",
    "description": "Descripcion del producto 2",
    "code": "DE5379",
    "price": 7000,
    "status": true,
    "stock": 15,
    "category": "Aseo",
    "thumbnail": "imagen producto 2"
}

--------------------------------------------------------

Petición PUT - Actualizar Producto

http://localhost:8090/api/products/:id

Pasar id por parametro

Estructura
{
    "title": "Producto 2 Modificado",
    "description": "Descripcion del producto 2 modificado",
    "code": "DE537G",
    "price": 6600,
    "status": true,
    "stock": 45,
    "category": "Grano",
    "thumbnail": "imagen producto 2 modificado"
}

--------------------------------------------------------

Petición Delete - Eliminar producto

http://localhost:8090/api/products/:id


Pasar id para eliminar.



-------------------------------------------------------
-------------------------------------------------------
-------------------------------------------------------


Para consultar los carritos:

peticion GET - Obtener carritos

http://localhost:8090/api/carts - API
http://localhost:8090/carts - navegador

--------------------------------------------------------

Peticion POST - Guardar producto en carrito

http://localhost:8090/api/carts - API
http://localhost:8090/carts - navegador


Estructura por body - si hay un carrito creado proporcionar el idCart, si quiere un carrito nuevo solo ingresar el producto.

{
    "idCart": "64b6acc420ab4253c696d2fb",
    "idProduct": "64b5f0ae4cff50135172ff2e",
    "quantity": 15
}

--------------------------------------------------------

Peticion Delete - Eliminar producto desde carrito

http://localhost:8090/api/carts/:cid/products/:pid

Se debe pasar el id del carrito y el id del producto.


--------------------------------------------------------

Peticion PUT - Actualizar productos de un carrito

http://localhost:8090/api/carts/:cid


Estructura por body - postman:

{
  "products": [
    {
      "product": "64b5f0ae4cff50135172ff30"
    },
    {
      "product": "64b5f0ae4cff50135172ff22"
    }
  ]
}

--------------------------------------------------------

Peticion PUT - Actualizar cantidad de un producto en carrito

http://localhost:8090/api/carts/:cid/products/:pid

Se debe pasar el id del carrito y del producto

ademas pasar por body la estructura:

{
  "quantity": 10
}


--------------------------------------------------------

Peticion GET - Obtener carrito y productos del carrito.

http://localhost:8090/api/carts/:cid

Se debe pasar el id del carrito.


Peticion Delete - Vaciar carrito por id

http://localhost:8090/api/carts/:cid


se debe pasar el id del carrito para vaciarlo.


-------------------------------------------------------
-------------------------------------------------------
-------------------------------------------------------

Peticion GET - Obtener chats

http://localhost:8090/api/chats - API
http://localhost:8090/chats - Navegador

-------------------------------------------------------

Enviar un mensaje

http://localhost:8090/api/chats


Estructura por body

{
    "email": "facjohan@hotmail.com",
    "message": "Muy bien y tu?"
}




