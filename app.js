// var count=0;
// var stop;

// function timmer(){
//     count++
//     console.log( count,"afra======>")
// }

// stop = setInterval(timmer,1000)
// setTimeout(function(){
//     clearInterval(stop)
// },9000)

var minute = 0;
var second = 0;
var millisecond = 0;
var min = document.getElementById('min')
var sec = document.getElementById('sec')
var milisec= document.getElementById('milisec')
var start_btn= document.getElementById('start_btn')
var pause_btn= document.getElementById('pause_btn')
var reset_btn= document.getElementById('reset_btn')
var interval;
function timmer(){
    millisecond++;
    milisec.innerHTML = millisecond;
    if(millisecond>= 100){
        second++;
        sec.innerHTML=second;
        millisecond=0
    }else if(second>=60){
        minute++;
        min.innerHTML=minute;
        second="00"
    }
}
function start(){
    start_btn.disabled= true
    interval= setInterval(timmer,10)
    pause_btn.disabled= false
    reset_btn.disabled= false

    
}
function stop(){
    pause_btn.disabled= true
    clearInterval(interval)
    start_btn.disabled= false
    reset_btn.disabled= false
}
function reset(){
    reset_btn.disabled= true;
    start_btn.disabled= false;
    pause_btn.disabled= false;
    var minute = 0;
    var second = 0;
    var millisecond = 0;
    min.innerHTML=minute;
    sec.innerHTML=second;
    milisec.innerHTML = millisecond;
    stop()
    // reset_btn.disabled= false
}
