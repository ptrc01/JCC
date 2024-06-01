// NAVBAR/ HEADER
let navbar = document.querySelector('.navbar');
let hb = document.querySelector('.hb');

hb.addEventListener('click', () =>{
    navbar.classList.toggle('activate');
})


// COUNTDOWN HOMEPAGE
var countdown = new Date("Jun 23, 2023 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countdown - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;

},1000);
