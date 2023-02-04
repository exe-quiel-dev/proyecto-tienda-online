// import { productosCarrito } from "./card.js";
// import { total } from "./card.js";

const containerCarrito = document.querySelector('.container-articulos');
let subtotales = [];

export function mostrarCarritoHTML(productos) {
    productos.forEach( producto => {
        const { nombre, precio, cantidad, imagen, id } = producto;
        const subtotal = precio * cantidad;

        const row = document.createElement('DIV');
        row.classList.add('col-12', 'd-flex', 'justify-content-center', 'ps-5', 'pt-5', 'align-items-center', 'border-bottom');
        row.innerHTML = `
        <img src="${imagen}" class="img-thumbnail img-size" alt="Imagen de producto"/>
        <div class="container-fluid d-flex">
            <p class="px-5 fw-semibold">Producto:<span class="fw-normal"> ${nombre}</span></p>  
            <p class="px-5 fw-semibold">Cantidad:<span class="fw-normal"> ${cantidad}</span></p>  
            <p class="px-5 fw-semibold">Precio: <span class="fw-normal"> $${precio}</span></p>  
        </div>
        `;
        
        
        const divSubtotalProducto = document.createElement('DIV');
        divSubtotalProducto.classList.add('py-5');
        divSubtotalProducto.innerHTML = `<p class="d-flex px-5 fs-5">$<span>${subtotal}</span></p>`;

        row.appendChild(divSubtotalProducto);
        containerCarrito.appendChild(row);

        subtotales.push(subtotal);
    });
    calcularTotal();
}

function calcularTotal() {
    let total = 0;
    subtotales.forEach( numero => total += numero);
    
    const totalDiv = document.querySelector('#total');
    totalDiv.classList.add('border-top');
    totalDiv.innerHTML = `
        <p class="fw-semibold fs-4">Total: <span class="">$${total}</span></p>
    `;

}
