import dinos from "../data/dinos.js";

const container = document.getElementById("dino-container");

function renderDinos(lista) {

    lista.forEach(dino => {

        const card = document.createElement("div");
        card.classList.add("dino-card");

        card.innerHTML = `
            <img src="${dino.imagen}" alt="${dino.nombre}">
            
            <div class="dino-info">
                <h2>${dino.nombre}</h2>
                <p><strong>Tipo:</strong> ${dino.tipo}</p>
                <p><strong>Comida:</strong> ${dino.comida}</p>
                <p><strong>Tameo:</strong> ${dino.tameo}</p>
                <p><strong>Peligro:</strong> ${dino.peligro}</p>
            </div>
        `;

        container.appendChild(card);

    });

}

renderDinos(dinos);