 // canplay,play, playing, pause, progress,ended,volumechange,waiting

 const video= document.querySelector('video');
 
 video.addEventListener('canplay', function(){
    console.log("canplay");
 });  //have to find

 video.addEventListener('play', function(){
    console.log("play");
 });

 video.addEventListener('pause', function(){
    console.log("pause");
 });

 video.addEventListener('playing', function(){
    console.log("playing");
 });

 video.addEventListener('ended', function(){
    console.log("thanks for watch");
 });

 video.addEventListener('volumechange', function(){
    console.log("volumechange");
 });

