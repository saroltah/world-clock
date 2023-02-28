function updateTime() {
  let tokyo = document.querySelector("#tokyo");
  let tokyodate = tokyo.querySelector(".date");
  let tokyotime = tokyo.querySelector(".time");
  tokyodate.innerHTML = moment().format("MMMM D, YYYY");
  tokyotime.innerHTML = moment().tz("Asia/Tokyo").format("HH:mm:ss");

  let budapest = document.querySelector("#budapest");
  let budapestdate = budapest.querySelector(".date");
  let budapesttime = budapest.querySelector(".time");
  budapestdate.innerHTML = moment().format("MMMM D, YYYY");
  budapesttime.innerHTML = moment().tz("Europe/Budapest").format("HH:mm:ss");
}

setInterval(updateTime, 1000);
