x=0
y=0
circle="";
rectangle="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function setup(){
    canvas=createCanvas(900,600);
}
function start(){
document.getElementById("status").innerHTML="System is Stupid Please speak lounder and scream";
recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var x=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="Speech has been Stupid as " + x;
}