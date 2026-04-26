const panel = document.getElementById('contenedor-menu');

// Categorías según la nota guardada
const categorias = ["PLATOS", "EMPANADAS", "PIZZAS", "DIPS", "BEBIDAS"];

// Datos de prueba para verificar el visual antes de conectar Supabase
const items = [
    { n: "POLLO A LA PARRILLA", p: "5500", d: "Con papas rústicas y aderezo", c: "PLATOS" },
    { n: "SÁNDWICH DE MILANESA", p: "4800", d: "Completo con papas", c: "PLATOS" },
    { n: "EMPANADA DE CARNE", p: "800", d: "Picante o suave", c: "EMPANADAS" },
    { n: "ARTISAN PIZZAS", p: "4200", d: "Margherita clásica con albahaca", c: "PIZZAS" },
    { n: "PREMIUM DIPS", p: "600", d: "Garlic Aioli cremosa", c: "DIPS" },
    { n: "CERVEZA 1L", p: "3200", d: "Quilmes o Brahma", c: "BEBIDAS" }
];

function dibujar() {
    panel.innerHTML = categorias.map(cat => `
        <div class="mb-6">
            <h2 class="text-red-600 font-bold italic tracking-tighter text-xl mb-3 uppercase border-b border-red-900/30">${cat}</h2>
            <div class="grid gap-4">
                ${items.filter(i => i.c === cat).map(plato => `
                    <div class="tarjeta-plato p-4 flex justify-between items-center">
                        <div>
                            <h3 class="font-bold text-lg leading-tight uppercase">${plato.n}</h3>
                            <p class="text-zinc-500 text-xs italic">${plato.d}</p>
                        </div>
                        <div class="text-2xl font-black text-yellow-500 italic">$${plato.p}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}
dibujar();
