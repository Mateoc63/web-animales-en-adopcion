// Función para mostrar el formulario de adopción
function mostrarFormulario(titulo) {
    Swal.fire({
        title: titulo,
        icon: 'question',
        html: `
            <form>
                <div style="margin-bottom: 10px;">
                    <label for="email" style="display: block;">Correo Electrónico:</label>
                    <input id="email" class="swal2-input" placeholder="Introduce tu correo electrónico" type="email" style="width: 100%; max-width: 400px;">
                </div>

                <div style="margin-bottom: 10px;">
                    <label for="nombre" style="display: block;">Nombre:</label>
                    <input id="nombre" class="swal2-input" placeholder="Introduce tu nombre" type="text" style="width: 100%; max-width: 400px;" onkeypress="return /^[a-zA-Z\s]*$/.test(event.key);">
                </div>

                <div style="margin-bottom: 10px;">
                    <label for="telefono" style="display: block;">Número de Teléfono:</label>
                    <input id="telefono" class="swal2-input" placeholder="Introduce tu número de teléfono" type="tel" style="width: 100%; max-width: 400px;" onkeypress="return /^[0-9]*$/.test(event.key);">
                </div>

                <div style="margin-bottom: 10px;">
                    <label for="razones" style="display: block;">Razones para adoptar:</label>
                    <textarea id="razones" class="swal2-textarea" placeholder="Escribe las razones por las cuales deseas adoptar" style="resize: none; width: 100%; max-width: 400px;"></textarea>
                </div>
            </form>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Enviar formulario',
        preConfirm: () => {
            const email = document.getElementById('email').value;
            const nombre = document.getElementById('nombre').value;
            const telefono = document.getElementById('telefono').value;
            const razones = document.getElementById('razones').value;

            // Validar que solo contiene letras en el campo nombre
            if (!/^[a-zA-Z\s]+$/.test(nombre)) {
                Swal.showValidationMessage('El nombre solo debe contener letras');
            }

            // Validar que solo contiene números en el campo teléfono
            if (!/^[0-9]+$/.test(telefono)) {
                Swal.showValidationMessage('El número de teléfono solo debe contener números');
            }

            if (!email || !nombre || !telefono || !razones) {
                Swal.showValidationMessage('Por favor, completa todos los campos');
            }
            return { email: email, nombre: nombre, telefono: telefono, razones: razones };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes manejar el resultado
            console.log(result.value);
            // Muestra otro SweetAlert indicando que el formulario fue enviado
            Swal.fire({
                title: 'Formulario enviado',
                text: 'Nos pondremos en contacto con usted.',
                icon: 'success',
            });
        }
    });
}

// Obtén los botones por separado

const botonRocke = document.getElementById('formularioRocke');
const botonBarbie = document.getElementById('formularioBarbie');
const botonLolo = document.getElementById('formularioLolo');

// Agrega el event listener a Barbie
botonRocke.addEventListener('click', function(event) {
    event.preventDefault();
    mostrarFormulario('Formulario de adopción.');
});

// Agrega el event listener a Barbie
botonBarbie.addEventListener('click', function(event) {
    event.preventDefault();
    mostrarFormulario('Formulario de adopción:');
});

// Agrega el event listener a Lolo
botonLolo.addEventListener('click', function(event) {
    event.preventDefault();
    mostrarFormulario('Formulario de adopción;');
});







