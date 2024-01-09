let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select"); // Select the first <select> element

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voices = voices; // Set the available voices array

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value]
})
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
