



var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent


var recognition = new SpeechRecognition();

recognition.continuous = false;

recognition.interimResults = false;
recognition.maxAlternatives = 1;
var langOp = 0;
document.getElementById("language").onchange = function () {
    var value = document.getElementById("language").value;
    langOp = value;
}




click_to_convert.addEventListener('click', function () {
    if (langOp == 1) { recognition.lang = 'ar-SA'; }
    else if (langOp == 2) { recognition.lang = 'en-US'; }
    else { recognition.lang = 'en-US'; }
    recognition.start();
   


        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript).join('')


            convert_text.innerHTML = transcript;

        });
    

        
    
});