Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality:90,
    constraints: {
        facingMode: "environment"
    }

}
    
);
camera =  document.getElementById("camera");
Webcam.attach('#camera');

function capture_img(){
    Webcam.snap(function(data_uri) 
    {document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"/> ';



});

}
console.log("ml5 version loaded");
classifier = ml5.imageClassifier('MobileNet',modelLoaded)
function modelLoaded(){
    console.log("model loaded");

}
function check(){
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResults)
    
}
function gotResults(error, results){
    if(error){
        console.log("error");

    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label
    }
}
