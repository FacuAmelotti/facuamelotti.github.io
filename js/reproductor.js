// Obtener elementos HTML relevantes
const ply = document.getElementById('player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const volumeSlider = document.getElementById('volume-slider');
const skipBackBtn = document.getElementById('skip-back-btn');
const skipForwardBtn = document.getElementById('skip-forward-btn');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');
const songSelector = document.getElementById('song-selector');

// Crear un contexto de audio
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
let sourceNode;
let analyserNode;

// Función para cargar y reproducir una nueva canción
function loadSong() {
    const selectedSong = songSelector.value;
    if (selectedSong) {
        // Detener la reproducción de la canción actual
        ply.pause();
        ply.currentTime = 0;

        ply.src = '/Content/audio/' + selectedSong;
        ply.load();
        ply.play();
    }

    if (selectedSong) {
        if (sourceNode) {
            sourceNode.stop();
        }
        // Crear un nodo de fuente de audio
        sourceNode = audioContext.createMediaElementSource(ply);

        // Crear un nodo de análisis de audio
        analyserNode = audioContext.createAnalyser();

        // Conectar los nodos
        sourceNode.connect(analyserNode);
        analyserNode.connect(audioContext.destination);

        // Configurar el análisis de audio
        analyserNode.fftSize = 256;
        const bufferLength = analyserNode.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        // Obtener el elemento DIV
        const myDiv = document.getElementById('myDivFx');

        // Función para actualizar la opacidad del div
        function updateOpacity() {
            requestAnimationFrame(updateOpacity);

            // Obtener datos de audio
            analyserNode.getByteFrequencyData(dataArray);

            // Calcular el valor medio de amplitud
            const sum = dataArray.reduce((a, b) => a + b, 0);
            const average = sum / bufferLength;

            // Mapear el valor medio de amplitud al rango de opacidad (0% a 100%)
            const opacity = (average / 255) * 100;

            // Actualizar la opacidad del div
            myDiv.style.opacity = opacity + '%';
        }

        // Iniciar la actualización de la opacidad
        updateOpacity();

        ply.src = '/Content/audio/' + selectedSong;
        ply.play();
    }
}

// Agregar manejadores de eventos para los botones
playBtn.onclick = function () {
    ply.play();
};

pauseBtn.onclick = function () {
    ply.pause();
};

skipForwardBtn.onclick = function () {
    ply.currentTime += 5;
};

skipBackBtn.onclick = function () {
    ply.currentTime -= 5;
};

// Agregar manejador de eventos para el control deslizante de volumen
volumeSlider.oninput = function () {
    ply.volume = volumeSlider.value;
};

// Agregar manejador de eventos para el selector de canciones
songSelector.onchange = loadSong;

// Agregar manejador de eventos para actualizar el tiempo actual de reproducción
ply.ontimeupdate = function () {
    currentTime.textContent = formatTime(ply.currentTime);
    duration.textContent = formatTime(ply.duration);
};

// Función para formatear el tiempo en segundos a un formato de "mm:ss"
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}   