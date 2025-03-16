document.addEventListener('DOMContentLoaded', function() {
    const adminBtn = document.getElementById('adminBtn');
    const usuarioBtn = document.getElementById('usuarioBtn');

    adminBtn.addEventListener('click', function() {
        window.location.href = 'ingreso.html';
    });

    usuarioBtn.addEventListener('click', function() {
        window.location.href = 'Interfaz.html';
    });
});