let playing = false;
let currentPlayer = 1;
let buttons = document.querySelectorAll('.bttn');

class Timer {
    constructor(player, minutes) {
        this.player = player;
        this.minutes = minutes;
    }
    getMinutes(timeId) {
        return document.getElementById(timeId).textContent;
    }
}

let p1time = new Timer('min1', document.getElementById('min1').textContent);
let p2time = new Timer('min2', document.getElementById('min2').textContent);

function swapPlayer(){
    if (!playing) return;

    currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function padZero(number){
    if (number < 10) {
        return '0' + number;
    }
    return number;
}


function startTime(){
    playing = true;
    let p1sec = 60;
    let p2sec = 60;

    let timerId = setInterval(function() {
        
        if (currentPlayer === 1) {
            if (playing) {
                buttons[0].disabled = true;
                p1time.minutes = parseInt(p1time.getMinutes('min1'), 10);
                if (p1sec === 60) {
                    p1time.minutes = p1time.minutes - 1;
                }
                p1sec = p1sec - 1;
                document.getElementById('sec1').textContent = padZero(p1sec);
                document.getElementById('min1').textContent = padZero(p1time.minutes);
                if (p1sec === 0) {

                    if (p1sec === 0 && p1time.minutes === 0) {
                        Swal.fire(
                            'Good job!',
                            'Player 1 have won the game!',
                            'success'
                          );
                        clearInterval(timerId);
                        playing = false;
                    }
                    p1sec = 60;
                }
            }
        } else {
           
            if (playing) {
                p2time.minutes = parseInt(p2time.getMinutes('min2'), 10);
                if (p2sec === 60) {
                    p2time.minutes = p2time.minutes - 1;
                }
                p2sec = p2sec - 1;
                document.getElementById('sec2').textContent = padZero(p2sec);
                document.getElementById('min2').textContent = padZero(p2time.minutes);
                if (p2sec === 0) {
                   
                    if (p2sec === 0 && p2time.minutes === 0) {
                        Swal.fire(
                            'Good job!',
                            'Player 2 have won the game!',
                            'success'
                          );
                        clearInterval(timerId);
                        playing = false;
                    }
                    p2sec = 60;
                }
            }
        }
    }, 1000);
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (buttons[i].textContent === 'START') {
            startTime();
        } else if(buttons[i].textContent === 'RESET'){
            
            location.reload(true);
        } else {
            let ele = document.querySelector("#inputVal").value;
            document.getElementById('min1').textContent = padZero(ele);
            document.getElementById('min2').textContent = padZero(ele);
        }
    });
}

function timeWarning(player, min, sec){
    
    if (min < 1 && sec <= 30) {
        if (player === 1) {
            document.querySelector('.player-1 .player__digits').style.color = '#CC0000';
        } else {
            document.querySelector('.player-2 .player__digits').style.color = '#CC0000';
        }
    }
}

document.addEventListener('click',function(){
        swapPlayer();
});