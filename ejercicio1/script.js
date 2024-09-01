const toggleButton = document.getElementById('toggleButton');
const caja = document.getElementById('caja');

toggleButton.addEventListener('click', function() {
    if (caja.style.display === 'none' || caja.style.display === '') {
        caja.style.display = 'block';
        toggleButton.textContent = 'Ocultar Caja';
    } else {
        caja.style.display = 'none';
        toggleButton.textContent = 'Mostrar Caja';
    }
});