import categorias from "./categorias.js";

export function mostrarCategorias() {
    categorias.forEach( cat => {
        const {categoria, icono} = cat;
        const containerCategorias = document.querySelector('.contenedor-categorias');
        containerCategorias.classList.add('d-flex', 'justify-content-center', 'pt-5');

        const divCategorias = document.createElement('DIV');
        divCategorias.classList.add('mx-3');
        divCategorias.innerHTML = `
            <i class="${icono} fs-4"></i>
            <a href="#" class="mx-1 categorias fs-4">${categoria}</a>
        `;

        containerCategorias.appendChild(divCategorias);
    });
}


