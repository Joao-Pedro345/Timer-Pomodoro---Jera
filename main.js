var start = document.getElementById('start');
var reset = document.getElementById('reset');
var stop = document.getElementById('stop');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer,1000);
    }else {
        alert("ALERTA! O Timer já está em funcionamento");
    }
});

reset.addEventListener('click',function(){
    wm.innerText = 25;
    ws.innerText = '00';

    bm.innerText = 5;
    bs.innerText = '00';

    document.getElementById('counter').innerText = 0;
    stopInterval();
    startTimer = undefined;
});

stop.addEventListener('click',function(){
    stopInterval();
    startTimer = undefined;
});



function timer(){
    // Contagem regressiva do work
    if(ws.innerText != 0){
        ws.innerText--;
    } else if (wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }
    if(ws == 0 && wm == 0 && bm != 0 && bs != 0){
        document.getElementById('sound').play();
    }
    // Contagem regressiva do parar
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        }else if (bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = '00';

        bm.innerText = 5;
        bs.innerText = '00';

        document.getElementById('counter').innerText++;
    }
}

function stopInterval(){
    clearInterval(startTimer);
}
