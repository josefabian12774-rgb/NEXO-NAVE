import { supabase } from './supabaseClient.js';
async function cargar() {
    const { data, error } = await supabase.from('productos').select('*');
    const panel = document.getElementById('contenedor-menu');
    if (error) { panel.innerHTML = "Error de conexión"; return; }
    panel.innerHTML = data.map(p => `
        <div class="bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-left shadow-lg">
            <h3 class="font-bold text-xl uppercase tracking-tight">${p.nombre}</h3>
            <p class="text-2xl text-yellow-500 font-black mt-2 tracking-tighter">$${p.precio}</p>
        </div>
    `).join('');
}
cargar();
