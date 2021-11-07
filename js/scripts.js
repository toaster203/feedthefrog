var seconds;
var countdownInterval;
var loaded = false;


$(document).ready(function(){
    displayTime();
})

function startTimer(){
    var mins = document.getElementsByClassName("minutes")[0].value;
    if(isNaN(mins)){
        alert("Please enter a valid number of minutes.");
    }

    seconds = mins*60;
    countdownInterval = setInterval(countDown,1200);
    playVid();
    console.log("playing1")

}
function countDown(){
    var currentDisplay = document.getElementsByClassName("time")[0];
    var currentMinutes = Math.floor(seconds/60);
    var currentSeconds = seconds-(currentMinutes*60);

    if(currentSeconds<10){
        currentSeconds = "0" + currentSeconds;
    }
    var newTime = currentMinutes.toString()+":"+currentSeconds;
    currentDisplay.innerHTML = newTime;
    if(seconds<=0){
        //alert("timer completed");
        clearInterval(countdownInterval);
        console.log("pausing");
        pauseVid();
    }
    seconds--;
    

}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var ytplayer;
window.YT.ready(function() {
    ytplayer = new YT.Player('yt-vid', {
        events: {
            'onReady': onPlayerReady,
        }
    });
})

function onPlayerReady(event){
    loaded=true;
}

function loadYTPlayer(a){
    if(loaded){
        controlVid(a);
        
    }
}
function playVid(){

    console.log("playing")
    ytplayer.playVideo();
}


function pauseVid(){

    console.log("stopped")
    ytplayer.pauseVideo();
}

function changeTask(){
    var currentTask = document.getElementsByClassName("input-field")[0].value;
    var taskDisplay = document.getElementsByClassName("toughest-task")[0];
    taskDisplay.innerHTML = "Your toughest task: "+currentTask;
}

function displayTime(){
    newTime = setTimeout(changeTime(),1000);
}

function changeTime(){
    var d = new Date();
    var minutes = (d.getMinutes() <10 ? '0' : '') + d.getMinutes();
    var hours = (d.getHours() <10 ? '0' : '') + d.getHours();
    var time = hours+":"+minutes;
    var curTime = document.getElementsByClassName("ctime")[0];
    curTime.innerHTML = time;
}