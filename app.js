const panel = document.getElementById('contenedor-menu');

// Simulamos los datos para que veas cómo queda
const menuEjemplo = [
    { nombre: "Pollo a la Parrilla", precio: "5500", cat: "PLATOS" },
    { nombre: "Sándwich de Milanesa", precio: "4800", cat: "PLATOS" },
    { nombre: "Empanada de Carne", precio: "800", cat: "EMPANADAS" },
    { nombre: "Empanada de Jamón y Queso", precio: "800", cat: "EMPANADAS" },
    { nombre: "Cerveza 1L", precio: "3200", cat: "BEBIDAS" },
    { nombre: "Gaseosa 1.5L", precio: "2500", cat: "BEBIDAS" }
];

function mostrarEstructura() {
    // Agrupamos por categoría
    const categorias = ["PLATOS", "EMPANADAS", "BEBIDAS"];
    
    panel.innerHTML = categorias.map(cat => `
        <section>
            <h2 class="text-red-600 font-bold tracking-widest text-sm mb-4 border-l-4 border-red-600 pl-2 uppercase">${cat}</h2>
            <div class="grid gap-3">
                ${menuEjemplo.filter(i => i.cat === cat).map(p => `
                    <div class="bg-zinc-900 p-4 rounded-lg flex justify-between items-center border border-zinc-800 shadow-lg">
                        <span class="font-bold uppercase text-sm">${p.nombre}</span>
                        <span class="text-yellow-500 font-black text-xl">$${p.precio}</span>
                    </div>
                `).join('')}
            </div>
        </section>
    `).join('');
}

mostrarEstructura();
