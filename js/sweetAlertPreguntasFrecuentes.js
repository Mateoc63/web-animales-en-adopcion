document.getElementById('helpButton').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    Swal.fire({
      title: "Preguntas frecuentes",
      icon: "question",
      html: `
        <ul>
           <li class="container-fluid text-start preguntas mt-3">¿Cómo funciona el proceso de adopción?</li>
           <p class="texto-preguntas mt-3 container text-start col-md-10">Para adoptar un animal, primero debes revisar los perfiles disponibles en nuestra página. Luego, selecciona el animal que te interese y completa el formulario de adopción. Nuestro equipo evaluará tu solicitud y te contactará para una entrevista y una visita al lugar donde vivirá el animal. Si todo está en orden, podrás llevar a tu nuevo amigo a casa.</p>

           <li class="container-fluid text-start preguntas">¿Cuáles son los requisitos para adoptar?</li>
           <p class="texto-preguntas mt-3 container text-start col-md-10">Los principales requisitos son ser mayor de edad, tener un hogar adecuado para el animal y disponer del tiempo y recursos necesarios para cuidar de él.</p> 

           <li class="container-fluid text-start preguntas">¿Se puede devolver al animal si la adopción no funciona?</li>
           <p class="texto-preguntas mt-3 container text-start col-md-10">Si, en casos excepcionales, no puedes mantener al animal, deberás contactarnos para que lo recibamos de vuelta y busquemos un nuevo hogar para él. El bienestar del animal es nuestra prioridad, por lo que es importante que no lo abandones.</p>
        </ul>
      `,
      showConfirmButton: false,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      buttonsStyling : false,
      customClass:{
        popup: 'hola',
        cancelButton: 'boton-cancelar'
      },
      cancelButtonText: `<i class="fa fa-times"></i> Cerrar`,
    });
});