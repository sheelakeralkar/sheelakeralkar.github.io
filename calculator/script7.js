var microphone = document.getElementById('microphone');
microphone.onclick = function(){
	var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
	recognition.lang = 'en-US';
	recognition.start();
	recognition.onresult = function(event){
		var input = event.results[0][0].transcript;
		console.log(input);
	}
}