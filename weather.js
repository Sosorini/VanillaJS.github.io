const date = document.querySelector(".js-weather");
const API_KEY = 'de028f3746e3801f5be584c3721370ac';
const COORDS = 'coords';

function getGeoObj(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        date.innerText = `${temperature} @ ${place}`;
    });
};

function saveGeoObj(geoObj) {
    localStorage.setItem(COORDS, JSON.stringify(geoObj));
};
function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const geoObj = {
        latitude, longitude
    };
    saveGeoObj(geoObj);
};
function handleGeoError() {
    console.log('getting location is failed');
};

function askForLocation() { // allow하면 알아서 얻어낸다
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
};

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(!loadedCoords) { 
        askForLocation();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getGeoObj(parsedCoords.latitude, parsedCoords.longitude);
    };
};

function init() {
    loadCoords();
};

init();