
        var audio = document.getElementById('music');
        
        // Guardar el tiempo de reproducción y el estado de pausa
        function saveMusicState() {
            localStorage.setItem('musicCurrentTime', audio.currentTime);
            localStorage.setItem('musicPaused', audio.paused);
        }
        
        // Cargar el estado de la música
        function loadMusicState() {
            var currentTime = localStorage.getItem('musicCurrentTime');
            var paused = localStorage.getItem('musicPaused');
            if (currentTime !== null) {
                audio.currentTime = currentTime;
            }
            if (paused === 'true') {
                audio.pause();
            } else {
                audio.play();
            }
        }
      
        window.onbeforeunload = saveMusicState;
          window.onload = loadMusicState