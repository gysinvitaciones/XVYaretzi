document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('confirmation-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto
        
        const familyName = document.getElementById('family-name').value;
        const guests = document.getElementById('guests').value;

        // URL de WhatsApp con el mensaje predefinido
        const whatsappURL = `https://api.whatsapp.com/send?phone=+528112289954&text=Hola,%20somos%20${familyName}%20y%20asistiremos%20al%20evento%20con%20${guests}%20invitado(s).`;

        // Abrir enlace de WhatsApp en una nueva pestaña
        window.open(whatsappURL, '_blank');
    });



    // Configuración del contador regresivo para el evento
    const eventDate = new Date('2024-10-26T18:00:00');

    function updateCountdown() {
        const now = new Date();
        const difference = eventDate - now;

        if (difference <= 0) {
            document.getElementById('countdown-timer').innerHTML = 'El evento ha terminado.';
        } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('countdown-timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});


const maxInvitadosPorAsistente = {
    'Eduardo Hernandez Rivera y Sra': 2,
'Eduardo Hernandez Ríos': 2,
'Fam. Rodriguez Hernandez': 2,
'Kevin Contreras y Sra': 2,
'César Raul Contreras Solis': 2,
'Fam. Torres Contreras': 2,
'Fam. Resendez Contreras': 2,
'Fam Hernández Castro': 2,
'Brenda C Hernández Castro': 2,
'Fam. Hernández Gutierrez': 2,
'Oscar Hernández Ríos y Sra': 2,
'Guadalupe Hernández Rivera y Sra': 2,
'Fam. Monsivais Hernández': 2,
'Kelly Monsivais Hernandez': 2,
'Evelyn Monsivais Hernandez': 2,
'Ausencio Estrada Alcocer y Sra': 2,
'Maria Daniela Canizales Castillo': 2,
'Fam. Vazquez Lucio': 2,
'Sr Sergio Navarro y Sra': 2,
'Martha Alicia Garcia Lugo': 2,
'Fam. Hernández Blanco': 2,
'Fam. Rodriguez Herrera': 2,
'Francisca Rodriguez Hernández': 2,
'Laura Rodriguez Hernandez': 2,
'Raul Rodriguez Hernandez': 2,
'Mario A. Hernandez Quistiano': 2,
'Juanita Hernández Rodriguez': 2,
'Clarita Hernandez Rodriguez': 2,
'Sra Rosa Solis Aguilera': 2,
'Sr. Antonio Solis Aguilera': 2,
'Sr. Pedro Lopez Chavez y Familia': 2,
'Claudia Lopez Solis': 2,
'Fam. Molina Lopez': 2,
'Sr Juan A. Contreras Manzanares y Fam': 2,
'Patricia Contreras Manzanares': 2,
'Sr Alfredo Contreras Martinez': 2,
'Norma Contreras Manzanares': 2,
'Sra Lucía Contreras Martinez': 2,
'Sra Cristina Contreras Martinez': 2,
'Sr Heribeto Contreras Martinez y Sra': 2,
'Sr Ruben Gonzalez Contreras y Fam': 2,
'Brenda Martinez Contreras': 2,
'Paloma Martinez Contreras': 2,
'Sr David Martinez Contreras y Fam': 2,
'Sra Leonor Montoya': 2,
};

function mostrarOpciones() {
    var nombreSeleccionado = document.getElementById('nombre').value;
    var opciones = document.getElementById('opciones');
    var invitados = document.getElementById('invitados');
    var inputInvitados = document.getElementById('num_invitados');
    var mensajePase = document.getElementById('mensajePase');
    var botonConfirmar = document.getElementById('confirmar-btn');
    
    if (nombreSeleccionado !== "Selecciona") {
        opciones.classList.remove('hidden');
    } else {
        opciones.classList.add('hidden');
    }
    
    invitados.classList.add('hidden');
    inputInvitados.value = '';
    mensajePase.textContent = '';
    botonConfirmar.classList.add('hidden');
}

function mostrarInvitados(asistira) {
    var invitados = document.getElementById('invitados');
    var nombreSeleccionado = document.getElementById('nombre').value;
    var maxInvitados = maxInvitadosPorAsistente[nombreSeleccionado] || 0;
    var inputInvitados = document.getElementById('num_invitados');
    var mensajePase = document.getElementById('mensajePase');
    var botonConfirmar = document.getElementById('confirmar-btn');
    
    if (asistira) {
        invitados.classList.remove('hidden');
        inputInvitados.max = maxInvitados;
        inputInvitados.placeholder = `Máximo ${maxInvitados} invitados`;
        mensajePase.textContent = `Tu pase es para ${maxInvitados} personas.`;
        botonConfirmar.classList.remove('hidden');
    } else {
        invitados.classList.add('hidden');
        inputInvitados.value = '';
        mensajePase.textContent = '';
        botonConfirmar.classList.remove('hidden');
    }
}

function enviarWhatsApp() {
    var nombre = document.getElementById('nombre').value;
    var asistira = document.getElementById('invitados').classList.contains('hidden') ? "No" : "Sí";
    var numInvitados = document.getElementById('num_invitados').value || 0;

    if (nombre === "" || (asistira === "Sí" && numInvitados <= 0)) {
        alert("Por favor, completa toda la información antes de confirmar.");
        return;
    }

    var mensaje = `Hola, soy ${nombre}. ${asistira === "Sí" ? `Asistiremos ${numInvitados} persona(s).` : `No podré asistir.`}`;
    var numero = "+528112289954";
    var url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
}
