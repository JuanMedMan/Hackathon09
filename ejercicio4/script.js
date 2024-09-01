const nombreInput = document.getElementById('nombreInput');
        const agregarNombreBtn = document.getElementById('agregarNombre');
        const seleccionarAleatoriamenteBtn = document.getElementById('seleccionarAleatoriamente');
        const listaNombres = document.getElementById('listaNombres');

        function agregarNombre() {
            const nombreTexto = nombreInput.value.trim();

            if (nombreTexto !== '') {
                const nuevoNombre = document.createElement('li');
                nuevoNombre.textContent = nombreTexto;

                listaNombres.appendChild(nuevoNombre);

                nombreInput.value = '';
            } else {
                alert('Por favor, inserta un nombre.');
            }
        }

        function seleccionarAleatoriamente() {
            const nombres = listaNombres.querySelectorAll('li');
            nombres.forEach(nombre => nombre.classList.remove('resaltado'));

            if (nombres.length > 0) {
                const indiceAleatorio = Math.floor(Math.random() * nombres.length);
                nombres[indiceAleatorio].classList.add('resaltado');
            }
        }

        agregarNombreBtn.addEventListener('click', agregarNombre);
        seleccionarAleatoriamenteBtn.addEventListener('click', seleccionarAleatoriamente);