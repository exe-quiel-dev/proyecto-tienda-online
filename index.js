import { mostrarCategorias } from "./modulos/mostrar-categorias.js";
import { mostrarProductos } from "./modulos/card.js";



eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', mostrarCategorias);
    document.addEventListener('DOMContentLoaded', mostrarProductos);
}