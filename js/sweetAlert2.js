document.getElementById('contactanos').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    Swal.fire({
      title: "Nuestros números",
      icon: "info",
      html: `
        Puedes contactarnos a través de:<br><br>
        <strong>Teléfono:</strong> +54 11 1234 5678<br>
        <strong>WhatsApp:</strong> +54 9 11 8765 4321
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
