// import { productosCarrito } from "./modulos/card.js";
import { mostrarCarritoHTML } from "./modulos/carrito-function.js";

function addEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
       const productosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
       mostrarCarritoHTML(productosCarrito);
    });
}
addEventListeners();

