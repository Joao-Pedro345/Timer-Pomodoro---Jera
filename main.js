var start = document.getElementById('start');
var reset = document.getElementById('reset');
var stop = document.getElementById('stop');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var optionCounter = false;

var option = false;

var addButton = document.getElementById('add');
var removeButton = document.getElementById('remove');
var lastValue = 25;
   //Após o carregamento da página
   document.addEventListener('DOMContentLoaded', function () {

  //Se não tiver suporte a Notification manda um alert para o usuário
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }
  
  //Se não tem permissão, solicita a autorização do usuário
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

   //Após o carregamento da página
   document.addEventListener('DOMContentLoaded', function () {
 
  //Se não tiver suporte a Notification manda um alert para o usuário
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }
  
  //Se não tem permissão, solicita a autorização do usuário
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

addButton.addEventListener('click',function(){
    wm.innerHTML++;
    lastValue = wm.innerHTML;
});

removeButton.addEventListener('click',function(){
    if(wm !== 1){
    wm.innerHTML--;
    lastValue = wm.innerHTML;
}
});

var sound = false;

var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer,1000);
    }else {
        alert("ALERTA! O Timer já está em funcionamento");
    }
});

reset.addEventListener('click',function (){
    wm.innerText = lastValue;
    ws.innerText = '00';

    bm.innerText = 5;
    bs.innerText = '00';

    document.getElementById('counter').innerText = 0;
    stopInterval();
    startTimer = undefined;
    option = false;
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
    
    // Contagem regressiva do parar
    if(wm.innerText == 0 && ws.innerText == 0){
        if(option == false){
        var notification = new Notification('Notification title', {
            body: "Hey there! You've been notified!",
        });
        document.getElementById('sound').play();
        option = true;
        }

        if(bs.innerText != 0){
            bs.innerText--;
        }else if (bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        document.getElementById('sound').play();
        wm.innerText = lastValue;
        ws.innerText = '00';

        bm.innerText = 0;
        bs.innerText = '05';
        option = false;

        document.getElementById('counter').innerText++;
        if(counter % 4 == 0){
            alert("Recomenda-se um intervalo de 10 minutos")
        }
    }
}

function stopInterval(){
    clearInterval(startTimer);
}
