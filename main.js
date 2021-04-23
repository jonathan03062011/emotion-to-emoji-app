Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    });
}
console.log("ml5 version:",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZA2hMyw7f/model.json",modelloaded);

function modelloaded()
{
    console.log("model is loaded ");
}

   var prediction_1="";
   var prediction_2="";
    
function speak()
{
    var synth=window.speechSynthesis;
    speakdata_1="the first prediction is "+prediction_1;
    speakdata_2="the second prediction is"+prediction_2;
    speakdata=speakdata_1+speakdata_2;
    var utterthis=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
}

function check()
{
    var img=document.getElementById("captured_image");
    classifier.classify(img,gotresults);
}
 function gotresults(error,result)
 {
     if(error){
         console.log(error);
     }
     else{
         console.log(result);
         
     }
 }