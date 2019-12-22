let isDown = false;
let i;

const wrapper = document.querySelector(".wrapper");

let colorClass = "filled";

function toggleBlue(event) {
  event.preventDefault();
  colorClass = "blue";
  this.classList.add('clicked');
  workToggle.classList.remove('clicked');
  playToggle.classList.remove('clicked');
  eraseToggle.classList.remove('clicked');
}
function toggleRed(event) {
  event.preventDefault();
  colorClass = "red";
  this.classList.add('clicked');
  playToggle.classList.remove('clicked');
  sleepToggle.classList.remove('clicked');
  eraseToggle.classList.remove('clicked');
}
function toggleGreen(event) {
  event.preventDefault();
  colorClass = "green";
  this.classList.add('clicked');
  workToggle.classList.remove('clicked');
  sleepToggle.classList.remove('clicked');
  eraseToggle.classList.remove('clicked');
}
function toggleGray(event) {
  event.preventDefault();
  colorClass = "erase";
  this.classList.add('clicked');
  workToggle.classList.remove('clicked');
  sleepToggle.classList.remove('clicked');
  playToggle.classList.remove('clicked');
}

const sleepToggle = document.querySelector('.sleepToggle');
sleepToggle.addEventListener('click', toggleBlue);

const workToggle = document.querySelector('.workToggle');
workToggle.addEventListener('click', toggleRed);

const playToggle = document.querySelector('.playToggle');
playToggle.addEventListener('click', toggleGreen);

const eraseToggle = document.querySelector('.eraseToggle');
eraseToggle.addEventListener('click', toggleGray);

function toggleOn() {
  isDown = true;
}

function toggleOff() {
  isDown = false;
}

wrapper.addEventListener("mousedown", toggleOn);
wrapper.addEventListener("mouseup", toggleOff);

function updateCount() {
  playToggle.innerHTML = "play(" + document.querySelectorAll('.green').length + ")";
  workToggle.innerHTML = "work(" + document.querySelectorAll('.red').length + ")";
  sleepToggle.innerHTML = "sleep(" + document.querySelectorAll('.blue').length + ")";
}

function fillFirst() {
  if (colorClass != "erase") {
    this.classList.add(colorClass);
  } else {
    this.classList.remove('green', 'blue', 'red', 'filled');
  }
  updateCount();
}

function fillBlock() {
  if (isDown && colorClass != "erase") {
    this.classList.add(colorClass);
  } else if (isDown) {
    this.classList.remove('green', 'blue', 'red', 'filled');
  }
  updateCount();
}

for (i = 1; i <= 96; i++) {
  const block = document.createElement("div");
  block.classList.add(`block${i}`, "base");
  wrapper.appendChild(block);
  block.addEventListener("mouseover", fillBlock);
  block.addEventListener('mousedown', fillFirst);
}
