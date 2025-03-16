document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ingresoForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const action = formData.get('action');

        fetch('Entrada.py', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (action === 'crear_cuenta') {
                alert('Cuenta creada exitosamente');
                window.location.href = 'Bienvenida.html';
            } else if (action === 'iniciar_sesion') {
                alert('Inicio de sesión exitoso');
                window.location.href = 'user%20o%20admin.html';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema con la solicitud');
        });
    });
});