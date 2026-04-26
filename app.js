const contenedor = document.getElementById('menu-real');

// Las categorías exactas que pediste en tu nota
const secciones = ["PLATOS", "EMPANADAS", "PIZZAS", "DIPS", "BEBIDAS"];

const datosPrueba = [
    { n: "POLLO A LA PARRILLA", p: "5500", d: "Con papas rústicas", c: "PLATOS" },
    { n: "EMPANADA DE CARNE", p: "800", d: "Picante o suave", c: "EMPANADAS" },
    { n: "ARTISAN PIZZA", p: "4200", d: "Especial de la casa", c: "PIZZAS" },
    { n: "PREMIUM DIP", p: "600", d: "Salsa especial", c: "DIPS" },
    { n: "CERVEZA 1L", p: "3200", d: "Bien helada", c: "BEBIDAS" }
];

contenedor.innerHTML = secciones.map(sec => `
    <div class="mt-8">
        <h2 class="text-orange-600 font-black italic text-xl mb-4 border-b border-orange-900/40">${sec}</h2>
        ${datosPrueba.filter(i => i.c === sec).map(item => `
            <div class="tarjeta">
                <div>
                    <div class="font-bold uppercase">${item.n}</div>
                    <div class="text-zinc-500 text-xs">${item.d}</div>
                </div>
                <div class="text-2xl font-black text-yellow-500 italic">$${item.p}</div>
            </div>
        `).join('')}
    </div>
`).join('');
