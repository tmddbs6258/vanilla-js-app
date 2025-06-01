const API_KEY = "89f7e7848a5ce89d1522319daf69c9f4"

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main}, ${data.main.temp}°C`;
      city.innerText = `📍 ${data.name}`;
    });
}

function onGeoError() {
  alert("위치를 찾을 수 없어요 😢");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);