



var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent


var recognition = new SpeechRecognition();

recognition.continuous = false;

recognition.interimResults = false;
recognition.maxAlternatives = 1;
var langOp = 0; const obniz = new Obniz("OBNIZ_ID_HERE");

obniz.onconnect = async function () {
    const servo = obniz.wired("ServoMotor", { gnd: 0, vcc: 1, signal: 2 });

   
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
        recognition.addEventListener = async event => {
            document.getElementById("voice").innerHTML = transcript;
            let angle_list = [40, 140, 40, 140];
            if (event.results[0][0].transcript == "Turn right") {
                for (let i = 0; i < angle_list.length; i++) {
                    servo.angle(angle_list[i]);
                    await obniz.wait(1000);
                }
            }
        };

     
  
    
    });
}
