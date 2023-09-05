//Enviar Mail
document.getElementById('formulario_contacto').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    // Configurar los parámetros del correo electrónico
    var params = {
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje
    };

    // Enviar el correo electrónico a través de EmailJS
    emailjs.send('service_qqcntoj', 'template_adzz9k4', params)
        .then(function (response) {
            alert('El formulario ha sido enviado correctamente', response);
            document.getElementById('formulario_contacto').reset();
        }, function (error) {
            alert('Error al enviar el formulario', error);
            document.getElementById('formulario_contacto').reset();
        });
});
