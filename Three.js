let intervals = {};
// MERCURY FUNCTION
let angleMer = 0;
function mer(speed) {
  clearInterval(intervals.mercury);
  const mercury = document.getElementById("mercury");

  intervals.mercury = setInterval(() => {
    const container = document.getElementById("container");
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const radius = 75;

    const x = centerX + radius * Math.cos(angleMer) - 5;
    const y = centerY + radius * Math.sin(angleMer) - 5;

    mercury.style.left = x + "px";
    mercury.style.top = y + "px";

    angleMer += 0.05;
  }, speed);
}
mer(30);
function funcMer() {
  const speed = (2*3.14*75)/parseInt(document.getElementById("changeMer").value);
  if (!isNaN(speed) && speed > 0) {
    mer(speed);
  }
}




// VENUS FUNCTION
let angleVen = 0;
function ven(speed) {
  clearInterval(intervals.venus);
  const venus = document.getElementById("venus");

  intervals.venus = setInterval(() => {
    const container = document.getElementById("container");
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const radius = 105;

    const x = centerX + radius * Math.cos(angleVen) - 8;
    const y = centerY + radius * Math.sin(angleVen) - 8;

    venus.style.left = x + "px";
    venus.style.top = y + "px";

    angleVen+= 0.05;
  }, speed);
}
ven(45);
function funcVen() {
  const speed = (2*3.14*105)/parseInt(document.getElementById("changeVen").value);
  if (!isNaN(speed) && speed > 0) {
    ven(speed);
  }
}




// EARTH FUNCTION
let angleEar = 0;
function ear(speed) {
  clearInterval(intervals.earth);
  const earth = document.getElementById("earth");

  intervals.earth = setInterval(() => {
    const container = document.getElementById("container");
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const radius = 135;

    const x = centerX + radius * Math.cos(angleEar) - 10;
    const y = centerY + radius * Math.sin(angleEar) - 10;

    earth.style.left = x + "px";
    earth.style.top = y + "px";

    angleEar += 0.05;
  }, speed);
}
ear(60);
function funcEar() {
  const speed = (2*3.14*135)/parseInt(document.getElementById("changeEar").value);
  if (!isNaN(speed) && speed > 0) {
    ear(speed);
  }
}




// MARS FUNCTION
let angleMars = 0;
function mars(speed) {
  clearInterval(intervals.mars);
  const mars = document.getElementById("mars");

  intervals.mars = setInterval(() => {
    const container = document.getElementById("container");
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const radius = 170;

    const x = centerX + radius * Math.cos(angleMars) - 12.5;
    const y = centerY + radius * Math.sin(angleMars) - 12.5;

    mars.style.left = x + "px";
    mars.style.top = y + "px";

    angleMars += 0.05;
  }, speed);
}
mars(80);
function funcMars() {
  const speed = (2*3.14*170)/parseInt(document.getElementById("changeMars").value);
  if (!isNaN(speed) && speed > 0) {
    mars(speed);
  }
}




// JUPITER FUNCTION
let angleJup = 0;
function jup(speed) {
  clearInterval(intervals.jupiter);
  const jupiter = document.getElementById("jupiter");

  intervals.jupiter = setInterval(() => {
    const container = document.getElementById("container");
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const radius = 205;

    const x = centerX + radius * Math.cos(angleJup) - 20;
    const y = centerY + radius * Math.sin(angleJup) - 20;

    jupiter.style.left = x + "px";
    jupiter.style.top = y + "px";

    angleJup += 0.05;
  }, speed);
}
jup(100);
function funcJup() {
  const speed = (2*3.14*205)/parseInt(document.getElementById("changeJup").value);
  if (!isNaN(speed) && speed > 0) {
    jup(speed);
  }
}




// SATURN FUNCTION
let angleSat = 0;
function sat(speed) {
  clearInterval(intervals.saturn);
  const saturn = document.getElementById("saturn");

  intervals.saturn = setInterval(() => {
    const container = document.getElementById("container");
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const radius = 250;

    const x = centerX + radius * Math.cos(angleSat) - 15;
    const y = centerY + radius * Math.sin(angleSat) - 15;

    saturn.style.left = x + "px";
    saturn.style.top = y + "px";

    angleSat += 0.05;
  }, speed);
}
sat(120);
function funcSat() {
  const speed = (2*3.14*250)/parseInt(document.getElementById("changeSat").value);
  if (!isNaN(speed) && speed > 0) {
    sat(speed);
  }
}




// URANUS FUNCTION
let angleUra = 0;
function ura(speed) {
  clearInterval(intervals.uranus);
  const uranus = document.getElementById("uranus");

  intervals.uranus = setInterval(() => {
    const container = document.getElementById("container");
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const radius = 300;

    const x = centerX + radius * Math.cos(angleUra) - 12.5;
    const y = centerY + radius * Math.sin(angleUra) - 12.5;

    uranus.style.left = x + "px";
    uranus.style.top = y + "px";

    angleUra += 0.05;
  }, speed);
}
ura(140);
function funcUra() {
  const speed = (2*3.14*300)/parseInt(document.getElementById("changeUra").value);
  if (!isNaN(speed) && speed > 0) {
    ura(speed);
  }
}




// NEPTUNE FUNCTION
let angleNep = 0;
function nep(speed) {
  clearInterval(intervals.neptune);
  const neptune = document.getElementById("neptune");

  intervals.neptune = setInterval(() => {
    const container = document.getElementById("container");
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const radius = 350;

    const x = centerX + radius * Math.cos(angleNep) - 12.5;
    const y = centerY + radius * Math.sin(angleNep) - 12.5;

    neptune.style.left = x + "px";
    neptune.style.top = y + "px";

    angleNep += 0.05;
  }, speed);
}
nep(160);
function funcNep() {
  const speed = (2*3.14*350)/parseInt(document.getElementById("changeNep").value);
  if (!isNaN(speed) && speed > 0) {
    nep(speed);
  }
}




// STOP FUNCTION
function stop() {
  Object.values(intervals).forEach((interval) => clearInterval(interval));
  intervals = {};
}

function reset() {
  stop(); // Stop all running intervals

 //RESET FUNCTION
  angleMer = 0;
  angleVen = 0;
  angleEar = 0;
  angleMars = 0;
  angleJup = 0;
  angleSat = 0;
  angleUra = 0;
  angleNep = 0;

  const container = document.getElementById("container");
  const centerX = container.offsetWidth / 2;
  const centerY = container.offsetHeight / 2;

  function setPosition(planetId, radius, offset) {
    const planet = document.getElementById(planetId);
    const x = centerX + radius * Math.cos(0) - offset;
    const y = centerY + radius * Math.sin(0) - offset;
    planet.style.left = x + "px";
    planet.style.top = y + "px";
  }

  setPosition("mercury", 75, 5);
  setPosition("venus", 105, 8);
  setPosition("earth", 135, 10);
  setPosition("mars", 170, 12.5);
  setPosition("jupiter", 205, 20);
  setPosition("saturn", 250, 15);
  setPosition("uranus", 300, 12.5);
  setPosition("neptune", 350, 12.5);

  def();
}


// SET TO DEFAULT SPEEDS
function def() {
  mer(60);
  ven(70);
  ear(80);
  mars(90);
  jup(110);
  sat(125);
  ura(130);
  nep(130);
}





// SPEED MANAGEMANT SIDEBAR
document.getElementById("icon1").addEventListener("click", function () {
  document.getElementById("sidebar").style.transform = "translateX(250px)";
  document.getElementById("sidebar").style.opacity = 1;
  document.getElementById("info").style.opacity = 1;
});

document.getElementById("container").addEventListener("click", function () {
  document.getElementById("sidebar").style.transform = "translateX(-250px)";
  document.getElementById("info").style.opacity = 0;
});

// PLANET INFORMATION
document.getElementById("Mercury").addEventListener("click", function () {
  document.getElementById("image").src = "Mercury2.png";
  document.getElementById("value1").innerText = "4,880 Km";
  document.getElementById("value2").innerText = "87.97 days";
});

document.getElementById("Venus").addEventListener("click", function () {
  document.getElementById("image").src = "Venus2.png";
  document.getElementById("value1").innerText = "12,104 Km";
  document.getElementById("value2").innerText = "224.7 days";
});

document.getElementById("Earth").addEventListener("click", function () {
  document.getElementById("image").src = "Earth2.png";
  document.getElementById("value1").innerText = "12,742 Km";
  document.getElementById("value2").innerText = "365.26 days";
});

document.getElementById("Mars").addEventListener("click", function () {
  document.getElementById("image").src = "Mars2.png";
  document.getElementById("value1").innerText = "6,792 Km";
  document.getElementById("value2").innerText = "686.98 days";
});

document.getElementById("Jupiter").addEventListener("click", function () {
  document.getElementById("image").src = "Jupiter2.png";
  document.getElementById("value1").innerText = "139,820 Km";
  document.getElementById("value2").innerText = "11.86 years";
});

document.getElementById("Saturn").addEventListener("click", function () {
  document.getElementById("image").src = "Saturn2.png";
  document.getElementById("value1").innerText = "116,460 Km";
  document.getElementById("value2").innerText = "29.46 years";
});

document.getElementById("Uranus").addEventListener("click", function () {
  document.getElementById("image").src = "Uranus2.png";
  document.getElementById("value1").innerText = "50,724 Km";
  document.getElementById("value2").innerText = "84.02 years";
});

document.getElementById("Neptune").addEventListener("click", function () {
  document.getElementById("image").src = "Neptune2.png";
  document.getElementById("value1").innerText = "49,244 Km";
  document.getElementById("value2").innerText = "164.79 years";
});





//FOR ZOOMING THE SOLAR SYSTEM (ADDITIONAL)

//  const zoomTarget = document.getElementById('container');
//   let scale = 1;

//   zoomTarget.addEventListener('wheel', (e) => {
//     e.preventDefault(); // Prevent page scroll when hovering

//     const zoomStep = 0.1;
//     if (e.deltaY < 0) {
//       scale += zoomStep; // zoom in
//     } else {
//       scale -= zoomStep; // zoom out
//     }

//     // Clamp the zoom between 0.5x and 3x
//     scale = Math.min(Math.max(0.5, scale), 3);

//     zoomTarget.style.transform = `scale(${scale})`;
//   });


  