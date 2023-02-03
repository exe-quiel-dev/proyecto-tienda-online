import productos from "./productos.js";

export function mostrarProductos() {
    const contenedor = document.querySelector('.container-cards');
        contenedor.classList.add('d-flex', 'flex-wrap', 'justify-content-center','my-5');

    // const tituloDelDia = document.createElement('H2');
    //     tituloDelDia.classList.add('fs-3', 'd-block');
    //     tituloDelDia.textContent = 'Productos Destacados del dia';
    //     contenedor.appendChild(tituloDelDia);

        productos.forEach( product => {
        const { producto, cantidad, precio, imagen } = product;

        const divImagen = document.createElement('DIV');
        divImagen.innerHTML = `<img src="${imagen}" class="card-img-top" alt="Imagen producto"/>`;

        const divProducto = document.createElement('DIV');
        divProducto.classList.add('card', 'col-lg-2','colg-md-6', 'd-flex', 'justify-content-center', 'mx-4', 'my-3', 'p-3', 'shadow');
        divProducto.innerHTML = `
            <h3 class="fw-semibold text-center border-top mt-2">${producto}</h3>
            <p>Caracteristicas / Descripcion breve del producto.</p>
            <p class="fw-bold"> Stock:<span class="fw-normal"> ${cantidad}</span></p>
            <span class="fs-4 text-price fw-normal pb-2"> $${precio}</span>
        `;

        const btnCarrito = document.createElement('A');
        btnCarrito.classList.add('btn', 'bg-destacados-btn');
        btnCarrito.textContent = 'Añadir al carrito';

        
        divProducto.prepend(divImagen);
        divProducto.appendChild(btnCarrito);
        contenedor.appendChild(divProducto);
    })
}