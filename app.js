const panel = document.getElementById('contenedor-menu');

// DATOS DE PRUEBA PARA VER EL DISEÑO YA MISMO
const platosEjemplo = [
    { nombre: "Pollo a la Parrilla", precio: "5500", categoria: "platos" },
    { nombre: "Empanadas Salteñas (Docena)", precio: "8000", categoria: "empanadas" },
    { nombre: "Cerveza Quilmes 1L", precio: "3000", categoria: "bebidas" }
];

function dibujarMenu(datos) {
    panel.innerHTML = `
        <div class="flex justify-center my-8">
            <div class="w-32 h-32 rounded-full border-4 border-red-600 flex items-center justify-center bg-zinc-900 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                <span class="text-red-600 font-black text-2xl tracking-tighter">NAVE</span>
            </div>
        </div>

        <div class="grid gap-6">
            ${datos.map(p => `
                <div class="bg-zinc-900 p-4 rounded-xl border-l-8 border-red-600 shadow-xl transform transition hover:scale-105">
                    <div class="flex justify-between items-center">
                        <div>
                            <span class="text-xs text-zinc-500 uppercase font-bold">${p.categoria}</span>
                            <h3 class="font-bold text-xl uppercase tracking-tight text-white">${p.nombre}</h3>
                        </div>
                        <span class="text-3xl font-black text-yellow-500 tracking-tighter">$${p.precio}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Ejecutamos el dibujo con los ejemplos para que veas el diseño
dibujarMenu(platosEjemplo);
