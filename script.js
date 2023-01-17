let mess = new Array(
  "Never gonna give you up ",
  "Never gonna let you down ",
  "Never gonna run around and desert you",
  "Never gonna make you cry",
  "Never gonna say goodbye",
  "Never gonna tell a lie and hurt you"
);

let size = 32;
let txtcol = "#pink";
let lastcol = "#00CC00";
let pause = 1500;
let speed = 70;
let i = (i_str = 0);
let msg = (msgpre = msgafter = "");

function get_text() {
  msgpre = mess[i].substring(0, i_str - 1);
  msgafter = mess[i].substring(i_str - 1, i_str);
  msg =
    "<span style='position: relative; color:" +
    txtcol +
    "; font-size: " +
    size +
    "px;'>" +
    msgpre +
    "<span style='color:" +
    lastcol +
    ";'>" +
    msgafter +
    "</span></span>";
}

function go() {
  if (i_str <= mess[i].length - 1) {
    i_str++;
    get_text();
    if (document.all) typewriter.innerHTML = msg;
    else if (document.layers) {
      document.typewriter.document.write(msg);
      document.typewriter.document.close();
    } else document.getElementById("typewriter").innerHTML = msg;
    var timer = setTimeout("go()", speed);
  } else {
    clearTimeout(timer);
    var timer = setTimeout("changemess()", pause);
  }
}

function changemess() {
  i++;
  i_str = 0;
  if (i > mess.length - 1) i = 0;
  go();
}

go();

var audio = new Audio();
function play() {
  audio.src = "sound/Rick Astley-Never Gonna Give You Up.mp3";
  audio.autoplay = true;
  document.querySelector(".text").style.display = "block";
  document.querySelector(".play").style.display = "none";
  document.querySelector(".point").style.display = "flex";
}

document.querySelector(".img-wrapper2").style.display = "block";

const point = document.querySelector(".point");
point.addEventListener("click", () => {
  point.style.display = "none";
  let shotAudio = new Audio();
  shotAudio.src = "sound/pip-pip.mp3";
  shotAudio.autoplay = true;
  const boom = document.querySelector(".boom");
  boom.style.display = "block";

  setTimeout(() => {
    boom.style.display = "none";
  }, 1000);

  let score = document.querySelector(".score").innerHTML;
  newScore = +score;
  newScore += 1;
  if (newScore === 3) {
    document.querySelector(".img2").style.display = "block";
  } else if (newScore === 5) {
    document.querySelector(".img3").style.display = "block";
  } else if (newScore === 7) {
    document.querySelector(".img4").style.display = "block";
  } else if (newScore === 9) {
    document.querySelector(".img5").style.display = "block";
  } else if (newScore === 12) {
    document.querySelector(".img6").style.display = "block";
  } else if (newScore === 15) {
    document.querySelector(".img7").style.display = "block";
  } else if (newScore === 17) {
    document.querySelector(".img8").style.display = "block";
  }
  if (newScore === 25) {
    document.querySelector(".img2").style.display = "none";
    document.querySelector(".img3").style.display = "none";
    document.querySelector(".img4").style.display = "none";
    document.querySelector(".img5").style.display = "none";
    document.querySelector(".img6").style.display = "none";
    document.querySelector(".img7").style.display = "none";
    document.querySelector(".img8").style.display = "none";
    newScore = 0;
    audio.pause();
    let empireAudio = new Audio();
    empireAudio.src = "sound/Empire.mp3";
    empireAudio.autoplay = true;
    setTimeout(() => {
      window.location.reload();
    }, 20000);
  }
  console.log(newScore);
  document.querySelector(".score").innerHTML = newScore;

  setTimeout(() => {
    const pointWrapper = document.querySelector(".point-wrapper");
    pointWrapper.style.top = "-200px";

    function getRandomInt(min, max) {
      min = Math.ceil(30);
      max = Math.floor(1200);
      console.log(Math.floor(Math.random() * (max - min)) + min + "px");
      let coord = Math.floor(Math.random() * (max - min)) + min + "px";
      pointWrapper.style.left = coord;
    }
    getRandomInt();
    point.style.display = "block";
  }, 2000);
});
