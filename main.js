function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(200,250)

    canvas=createCanvas(550,550);
    canvas.position(1200,250);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Pose Net Initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}

function draw(){
    background("#fff700");
}