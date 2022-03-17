const API_KEY = "c8a05d9122a713d80c97d109822cf743"

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = data.weather[0].main;
    city.innerText = data.name;
  });
}
function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



