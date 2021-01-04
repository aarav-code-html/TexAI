var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
setTimeout(aistarter,1000);
function aistarter(){
 window.alert("say your command") ;

 
    recognition.start();
    recognition.onresult=function run(event){
        console.log(event);
        var Content=event.results[0][0].transcritt;
        document.getElementById("textbox").innerHTML=Content;
        console.log(Content);
       
        if (Content == "take my selfie") {
            console.log("taking selfie----");
          speak();
        }
    }
}
function enter() {
    text=document.getElementById("infomation").value;
   document.getElementById("output").innerHTML= text;
}
function settingsscreen() {
    window.location="tex_login.html"
}
function setting() {
    var user_name=document.getElementById("user_name").value;
    localStorage.setItem("user name",user_name);
    var phone_number=document.getElementById("phone").value;
    localStorage.setItem("phone number",phone_number);
    var city=document.getElementById("city").value;
    localStorage.setItem("city",city);
    var email=document.getElementById("email").value;
    localStorage.setItem("email",email);
}