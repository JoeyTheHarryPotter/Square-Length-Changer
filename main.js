noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#2751ba');

    fill('#db4874');
    stroke('#ae6bff');
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log("PoseNet Initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X Position: " + noseX + " Nose Y Position: " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X Position: " + leftWristX + " Right Wrist X Position: " + rightWristX + " Difference: " + difference);
    }
}