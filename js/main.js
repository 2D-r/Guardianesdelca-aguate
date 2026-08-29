// Funcionalidad interactiva para el mapa de la exposición
document.addEventListener('DOMContentLoaded', () => {
    const btnLanzar = document.getElementById('btn-lanzar');
    const marcador = document.getElementById('marcador-zona');

    if (btnLanzar && marcador) {
        btnLanzar.addEventListener('click', () => {
            btnLanzar.textContent = '¡Bomba Lanzada!';
            btnLanzar.classList.replace('bg-yellow-400', 'bg-green-400');
            
            // Muestra el marcador simulando el impacto en la zona degradada
            setTimeout(() => {
                marcador.classList.remove('hidden');
            }, 500);
        });
    }
});