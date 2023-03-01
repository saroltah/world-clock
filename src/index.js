function updateTime() {
  if (tokyo) {
    let tokyo = document.querySelector("#tokyo");
    let tokyodate = tokyo.querySelector(".date");
    let tokyotime = tokyo.querySelector(".time");
    tokyodate.innerHTML = moment().format("MMMM D, YYYY");
    tokyotime.innerHTML = moment().tz("Asia/Tokyo").format("HH:mm:ss");
  }
  if (dublin) {
    let dublin = document.querySelector("#dublin");
    let dublindate = dublin.querySelector(".date");
    let dublintime = dublin.querySelector(".time");
    dublindate.innerHTML = moment().format("MMMM D, YYYY");
    dublintime.innerHTML = moment().tz("Europe/Dublin").format("HH:mm:ss");
  }
  if (cairo) {
    let cairo = document.querySelector("#cairo");
    let cairodate = cairo.querySelector(".date");
    let cairotime = cairo.querySelector(".time");
    cairodate.innerHTML = moment().format("MMMM D, YYYY");
    cairotime.innerHTML = moment().tz("Africa/Cairo").format("HH:mm:ss");
  }
}
setInterval(updateTime, 1000);

let selectCities = document.querySelector("#cities");
selectCities.addEventListener("change", showCity);
let openingPage = document.querySelector("#opening-page");

function showCity(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(timeZone).format("HH:mm:ss");
  let cityDate = moment().format("MMMM D, YYYY");
  let cityName = timeZone.replace("_", " ").split("/")[1];
  openingPage.innerHTML = `<div class="city">
          <div>
            <h2 class="cityname">${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div>
            <div class="time">${cityTime}</div>
          </div>
          </div>
           <div><a href="index.html" class="more-cities-link">More cities</a></div>`;
}
