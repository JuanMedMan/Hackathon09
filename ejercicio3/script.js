const tareaInput = document.getElementById('tareaInput');
        const agregarTareaBtn = document.getElementById('agregarTarea');
        const listaTareas = document.getElementById('listaTareas');

        function agregarTarea() {
            const tareaTexto = tareaInput.value.trim();

            if (tareaTexto !== '') {
                const nuevaTarea = document.createElement('li');
                nuevaTarea.textContent = tareaTexto;

                const botonEliminar = document.createElement('button');
                botonEliminar.textContent = 'x';
                botonEliminar.className = 'eliminar';

                botonEliminar.addEventListener('click', () => {
                    listaTareas.removeChild(nuevaTarea);
                });

                nuevaTarea.appendChild(botonEliminar);

                listaTareas.appendChild(nuevaTarea);

                tareaInput.value = '';
            } else {
                alert('Por favor, inserta una tarea.');
            }
        }

        agregarTareaBtn.addEventListener('click', agregarTarea);