document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('confirmation-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto
        
        const familyName = document.getElementById('family-name').value;
        const guests = document.getElementById('guests').value;

        // URL de WhatsApp con el mensaje predefinido
    
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
    'Eduardo Hernandez Ríos': 1,
    'Fam. Rodriguez Hernandez': 4,
    'Kevin Contreras y Sra': 2,
    'César Raul Contreras Solis': 1,
    'Fam. Torres Contreras': 4,
    'Fam. Resendez Contreras': 5,
    'Fam Hernández Castro': 6,
    'Brenda C Hernández Castro': 4,
    'Fam. Hernández Gutierrez': 4,
    'Oscar Hernández Ríos y Sra': 2,
    'Guadalupe Hernández Rivera y Sra': 2,
    'Guadalupe Rojas Borda': 3,
    'Fam. Monsivais Hernández': 6,
    'Kelly Monsivais Hernandez': 5,
    'Evelyn Monsivais Hernandez': 5,
    'Ausencio Estrada Alcocer y Sra': 2,
    'Maria Daniela Canizales Castillo': 1,
    'Fam. Vazquez Lucio': 4,
    'Sr Sergio Navarro y Sra': 2,
    'Martha Alicia Garcia Lugo': 2,
    'Fam. Hernández Blanco': 5,
    'Fam. Rodriguez Herrera': 5,
    'Francisca Rodriguez Hernández': 2,
    'Laura Rodriguez Hernandez': 2,
    'Raul Rodriguez Hernandez': 2,
    'Mario A. Hernandez Quistiano': 2,
    'Juanita Hernández Rodriguez': 2,
    'Clarita Hernandez Rodriguez': 2,
    'Sra Rosa Solis Aguilera': 4,
    'Sr. Antonio Solis Aguilera': 8,
    'Sr. Pedro Lopez Chavez y Familia': 6,
    'Claudia Lopez Solis': 2,
    'Fam. Molina Lopez': 4,
    'Sr Juan A. Contreras Manzanares y Fam': 4,
    'Patricia Contreras Manzanares': 2,
    'Sr Alfredo Contreras Martinez': 1,
    'Norma Contreras Manzanares': 3,
    'Sra Lucía Contreras Martinez': 2,
    'Sra Cristina Contreras Martinez': 2,
    'Sr Heribeto Contreras Martinez y Sra': 2,
    'Sr Ruben Gonzalez Contreras y Fam': 4,
    'Brenda Martinez Contreras': 3,
    'Paloma Martinez Contreras': 2,
    'Sr David Martinez Contreras y Fam': 4,
    'Sra Leonor Montoya': 2,
    'Fam. Molina Quezada': 3,
    'Paloma Ramos': 2,
    'Sr Alejandro Luna y Fam': 4,
    'Ramón Gómez Rivas y Sra': 2,
    'Felipe de Jesús Lozano Martínez y Sra': 2,
    'Laura Reyes Hernández': 2,
    'Gloria Méndez': 2,
    'Jazmín Cepeda': 3,
    'Juana Esthela Barrera': 2,
    'Fam. Gandara Ríos': 6,
    'Fam. Hernández Gandara': 4,
    'Sr. Raúl Hernández Ríos y Fam.': 6,
    'Sr. Francisco Hernández Rios y Fam.': 6,
    'Fam. Gandara Villanueva': 4,
    'Fam. Gandara González': 4,
    'Sra Margarita Roldán': 3,
    'María del Refugio Meza Victorio': 3,
    'Fam. Vargas Zapata': 4,
    'Fam. Rosas Ramírez': 6,
    'Sr Alfredo Contreras Manzanares': 4,
    'Fam. Cano Hernández': 5
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
    var numero  = "+528110113429"
    var url     = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
}
