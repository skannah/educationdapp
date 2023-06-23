// Get required elements from the DOM
const textInput = document.getElementById('text-input');
const convertBtn = document.getElementById('convert-btn');

// Create SpeechSynthesisUtterance instance
const speechSynthesis = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance();

// Set voice options (optional)
// const voices = speechSynthesis.getVoices();
// utterance.voice = voices[0]; // Set a specific voice from available voices

// Event listener for button click
convertBtn.addEventListener('click', () => {
  const text = textInput.value;
  
  // Check if the text is not empty
  if (text.trim() !== '') {
    // Set the text to be spoken
    utterance.text = text;

    // Speak the text
    speechSynthesis.speak(utterance);
  }
});
