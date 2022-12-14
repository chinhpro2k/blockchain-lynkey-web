var countDownDate = new Date("Nov 30, 2021 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  days = days < 10 ? "0" + days : days;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("count-day").innerHTML = days;
  document.getElementById("count-hours").innerHTML = hours;
  document.getElementById("count-minutes").innerHTML = minutes;
  document.getElementById("count-seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("sack-angelSales-time-end").innerHTML = "EXPIRED";
  }
}, 1000);

var elems = document.querySelectorAll(".sack-menu-link");

var makeActive = function () {
  for (var i = 0; i < elems.length; i++) elems[i].classList.remove("active");

  this.classList.add("active");
};

for (var i = 0; i < elems.length; i++)
  elems[i].addEventListener("click", makeActive);
