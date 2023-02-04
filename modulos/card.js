import productos from "./productos.js";
import { mostrarCarritoHTML } from "./carrito-function.js";


export let productosCarrito = [];


export function mostrarProductos() {
    const contenedor = document.querySelector('.container-cards');
        contenedor.classList.add('d-flex', 'flex-wrap', 'justify-content-center','my-5');

    // const tituloDelDia = document.createElement('H2');
    //     tituloDelDia.classList.add('fs-3', 'd-block');
    //     tituloDelDia.textContent = 'Productos Destacados del dia';
    //     contenedor.appendChild(tituloDelDia);

        productos.forEach( product => {
        const { producto, cantidad, precio, imagen, id } = product;

        const divImagen = document.createElement('DIV');
        divImagen.classList.add('div-imagen');
        divImagen.innerHTML = `<img src="${imagen}" class="card-img-top" alt="Imagen producto"/>`;

        const divProducto = document.createElement('DIV');
        divProducto.classList.add('card', 'col-lg-2','colg-md-6', 'd-flex', 'justify-content-center', 'mx-4', 'my-3', 'p-3', 'shadow');
        divProducto.setAttribute("data-id", `${id}`);
        divProducto.innerHTML = `
            <h3 class="fw-semibold text-center border-top mt-2">${producto}</h3>
            <p>Caracteristicas / Descripcion breve del producto.</p>
            <p class="fw-bold"> Stock:<span class="fw-normal"> ${cantidad}</span></p>
            <p class="fw-semibold">$ <span class="fs-4 text-price fw-normal pb-2"> ${precio}</span></p>
            
        `;

        const btnCarrito = document.createElement('A');
        btnCarrito.classList.add('btn', 'bg-destacados-btn');
        btnCarrito.textContent = 'Añadir al carrito';

        
        divProducto.prepend(divImagen);
        divProducto.appendChild(btnCarrito);
        contenedor.appendChild(divProducto);

        divProducto.addEventListener('click', agregarProducto);
    })
}

function agregarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains('bg-destacados-btn')){
        const productoSeleccionado = e.target.parentElement;
        console.log(productoSeleccionado);
        leerDatosProducto(productoSeleccionado);
    }
    
}

export function leerDatosProducto(producto) {
    const { id } = producto;
    const infoProd = {
        imagen: producto.querySelector('.div-imagen img').getAttribute('src'),
        nombre: producto.querySelector('H3').textContent,
        precio: producto.querySelector('.text-price').textContent,
        cantidad:1,
        id: producto.getAttribute('data-id')
    }
    const existe = productosCarrito.some(producto => producto.id === infoProd.id);

    if(existe) {
        const productos = productosCarrito.map( producto => {
            if(producto.id === infoProd.id){
                producto.cantidad++;
                return producto;
            } else {
                return producto;
            }
        });
        productosCarrito = [...productos];
    } else {
        productosCarrito = [...productosCarrito, infoProd];
        console.log(infoProd)
    }
    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(productosCarrito));
}
