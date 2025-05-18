// DOM elements
document.addEventListener('DOMContentLoaded', function() {
    // Audio pronunciation buttons
    const pronounceButtons = document.querySelectorAll('.pronounce');
    
    // Add event listeners to pronunciation buttons
    pronounceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audioFile = this.getAttribute('data-audio');
            if (audioFile) {
                playAudio(audioFile);
            }
        });
    });
    
    // Function to play audio
    function playAudio(audioFile) {
        const audio = new Audio(audioFile);
        
        // Add error handling
        audio.onerror = function() {
            console.error('Error playing audio file: ' + audioFile);
            alert('Sorry, the audio file could not be played. We\'ll fix this soon!');
        };
        
        // Play the audio
        audio.play().catch(e => {
            console.error('Audio playback failed:', e);
        });
    }
    
    // Rotate phrase of the day (could be expanded in the future)
    function updatePhraseOfTheDay() {
        // This function can be expanded to randomly select phrases from a database
        // or fetch from an API in the future
        console.log('Phrase of the day updated');
    }
    
    // Call initial function
    updatePhraseOfTheDay();
}); 