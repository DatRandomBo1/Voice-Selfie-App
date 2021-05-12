var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start()
}
recognition.onresult=function run(event) {
console.log(event);
var content=event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=content;
console.log(content);
if(content=="Take my selfie") {
    console.log("Taking Selfie");
    speak();
}
}       
function speak(){
    var synth=window.speechSynthesis;
    speak_data="Taking Your Selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        TakeSnapshot();
    }, 5000);
    
}
Webcam.set({
    width:320,
    height:240,
    image_format:'jpeg',
    jpeg_quality:100
});
camera=document.getElementById("camera");
function TakeSnapshot() {
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie_img" src="' +data_uri+'">'
})
}