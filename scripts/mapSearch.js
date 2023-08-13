const mapSearchButton = document.getElementById('map-search-btn')
const mapSearchInput = document.getElementById('map-search-bar')
const map = document.querySelector('.map-container')

function getLocationData(location) {
    const apiKey = "24ae8a2bc801fa8156d37422f52928ea";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
    console.log(url)
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const locationData = {
          city: data.name,
          country: data.sys.country,
          location: data.id,
        };
        return locationData;
      });
  }

  function updateUIMap(locationData) {
    map.innerHTML = ` <iframe
    src="https://www.meteoblue.com/en/weather/maps/widget/${locationData.city}_${locationData.country}_${locationData.id}?windAnimation=0&windAnimation=1&gust=0&gust=1&satellite=0&satellite=1&cloudsAndPrecipitation=0&cloudsAndPrecipitation=1&temperature=0&temperature=1&sunshine=0&sunshine=1&extremeForecastIndex=0&extremeForecastIndex=1&geoloc=detect&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=5&autowidth=auto"
    frameborder="0"
    scrolling="NO"
    allowtransparency="true"
    sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
    style="width: 1200px; height: 600px"
    class="map"
  ></iframe>`
  }

   mapSearchButton.addEventListener('click', () => {
    const location = mapSearchInput.value
    getLocationData(location)
    .then(locationData => {
        updateUIMap(locationData);
      })
      .catch(error => {
        console.log(error);
      });
  })

  mapSearchInput.addEventListener('keypress', () => {
    const location = mapSearchInput.value

    if (event.key === 'Enter') {
        getLocationData(location)
        .then(locationData => {
            updateUIMap(locationData);
          })
          .catch(error => {
            console.log(error);
          });
    }

  })