setInterval(function () {
    let date = new Date();
    let hrs = document.getElementById("hrs");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");

    hrs.innerHTML = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();

    min.innerHTML = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    sec.innerHTML = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  

}, 1000)
