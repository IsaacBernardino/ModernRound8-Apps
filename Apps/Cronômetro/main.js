const start_buttonEl = document.querySelector('#start');
const stop_buttonEl = document.querySelector('#stop');
const turn_buttonEl = document.querySelector('#turn');
const pause_buttonEl = document.querySelector('#pause');

const turnsEl = document.querySelector('#turns');
const capturedTurns = [];

let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let clock;
let count = 0; // Contador para as voltas

let running = false;

const hrEl = document.querySelector('#hour');
const minEl = document.querySelector('#min');
const secEl = document.querySelector('#sec');
const msEl = document.querySelector('#ms');

window.addEventListener('load', load);

start_buttonEl.addEventListener('click', updateClock);

pause_buttonEl.addEventListener('click', () => {
  console.log('parou');
  running = false;
  clearInterval(clock);
});

stop_buttonEl.addEventListener('click', () => {
  console.log('parou');
  running = false;
  reset();
  clearTurns();
  count = 0;
});

turn_buttonEl.addEventListener('click', captureTurn);

function load() {
  stop_buttonEl.style.position = 'absolute';
  stop_buttonEl.style.visibility = 'hidden';
  
  turn_buttonEl.style.position = 'absolute';
  turn_buttonEl.style.visibility = 'hidden';
  
  pause_buttonEl.style.position = 'absolute';
  pause_buttonEl.style.visibility = 'hidden';
  appUpdate()
}

// update function
function appUpdate() {
  setInterval(() => {
    if (running) {
      // Criar função para limpar essa bagunça 
      start_buttonEl.style.position = 'absolute';
      start_buttonEl.style.visibility = 'hidden';
      
      turn_buttonEl.style.position = 'relative';
      turn_buttonEl.style.visibility = 'visible';
      
      pause_buttonEl.style.position = 'relative';
      pause_buttonEl.style.visibility = 'visible';
      
      stop_buttonEl.style.position = 'absolute';
      stop_buttonEl.style.visibility = 'hidden';
    } else {
      pause_buttonEl.style.position = 'absolute';
      pause_buttonEl.style.visibility = 'hidden';
      
      stop_buttonEl.style.position = 'relative';
      stop_buttonEl.style.visibility = 'visible';
      
      turn_buttonEl.style.position = 'absolute';
      turn_buttonEl.style.visibility = 'hidden';
      
      start_buttonEl.style.position = 'relative';
      start_buttonEl.style.visibility = 'visible';
    }

    if ((ms > 0 || s > 0 || m > 0 || h > 0) && !running) {
      stop_buttonEl.style.position = 'relative';
      stop_buttonEl.style.visibility = 'visible';
    } else {
      stop_buttonEl.style.position = 'absolute';
      stop_buttonEl.style.visibility = 'hidden';
    }

  }, 1000 / 15);
}

function updateClock() {
  running = true;
  clock = setInterval(() => {
    ms++;
    //console.log(ms)
    if (ms === 100) {
      s++;
      ms = 0;
    }
    if (s === 60) {
      m++;
      s = 0;
    }
    if (m === 60) {
      h++;
      m = 0;
    }

    updateUiClock();

  }, 10);
}

function updateUiClock() {
  hrEl.innerText = returnData(h);
  minEl.innerText = returnData(m);
  secEl.innerText = returnData(s);
  msEl.innerText = returnData(ms);
}

function captureTurn() {
  count++;
  capturedTurns.unshift(`${count} - ${returnData(h)}:${returnData(m)}:${returnData(s)}.${returnData(ms)}`);
  console.log(`Captured ${capturedTurns}`);

  let turnEl = document.createElement('div');
  turnEl.innerText = capturedTurns[0];

  turnsEl.insertAdjacentElement('afterbegin', turnEl);

  reset();
  updateClock();
}

function reset() {
  clearInterval(clock);
  ms = 0;
  s = 0;
  m = 0;
  h = 0;
  updateUiClock();
}

function clearTurns() {
  turnsEl.innerHTML = '';
}

function returnData(input) {
  return input > 9 ? input : `0${input}`
}