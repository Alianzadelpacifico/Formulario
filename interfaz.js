document.addEventListener('DOMContentLoaded', function() {
    const solicitarTicketBtn = document.getElementById('solicitarTicketBtn');
    const codigoTicket = document.getElementById('codigoTicket');
    const continuarBtn = document.getElementById('continuarBtn');
    const mensajeTiempoRestante = document.createElement('p');
    mensajeTiempoRestante.id = 'mensajeTiempoRestante';
    document.querySelector('.container').appendChild(mensajeTiempoRestante);

    const MILISEGUNDOS_EN_10_SEGUNDOS = 10 * 1000; // 10 segundos

    function actualizarTiempoRestante() {
        const ultimoCodigoTimestamp = localStorage.getItem('ultimoCodigoTimestamp');
        if (ultimoCodigoTimestamp) {
            const tiempoRestante = MILISEGUNDOS_EN_10_SEGUNDOS - (Date.now() - parseInt(ultimoCodigoTimestamp));
            if (tiempoRestante > 0) {
                const segundos = Math.floor(tiempoRestante / 1000);
                mensajeTiempoRestante.textContent = `Puedes solicitar otro en ${segundos}s`;
                solicitarTicketBtn.disabled = true;
                setTimeout(actualizarTiempoRestante, 1000);
            } else {
                mensajeTiempoRestante.textContent = '';
                solicitarTicketBtn.disabled = false;
            }
        }
    }

    solicitarTicketBtn.addEventListener('click', function() {
        const ultimoCodigoTimestamp = localStorage.getItem('ultimoCodigoTimestamp');
        if (ultimoCodigoTimestamp && (Date.now() - parseInt(ultimoCodigoTimestamp)) < MILISEGUNDOS_EN_10_SEGUNDOS) {
            mensajeTiempoRestante.classList.add('vibrar');
            setTimeout(() => mensajeTiempoRestante.classList.remove('vibrar'), 300);
        } else {
            const codigo = generarCodigoAleatorio(8);
            codigoTicket.textContent = `Este es tu código: ${codigo}. No lo pierdas.`;
            codigoTicket.classList.remove('hidden');
            continuarBtn.classList.remove('hidden');
            localStorage.setItem('ultimoCodigoTimestamp', Date.now().toString());
            localStorage.setItem('codigoTicket', codigo);
            actualizarTiempoRestante();
        }
    });

    continuarBtn.addEventListener('click', function() {
        window.location.href = 'Formulario.html';
    });

    function generarCodigoAleatorio(length) {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let resultado = '';
        for (let i = 0; i < length; i++) {
            resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return resultado;
    }

    actualizarTiempoRestante();
});