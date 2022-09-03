let find = document.getElementById('search');
const date = new Date();
const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//GETTING THE LOCATION VALUE




find.addEventListener('click', searchWeather => {
    let input = document.getElementById('searchLocation').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=87209e96f919c45f54bbf0372154ae32`;
    async function getData() {
        const response = await fetch(url);
        const data = await response.json();

        //NOW ACCESING THE DATA IN HTML PAGE.
        //NAME OF THE CITY
        document.getElementById('name').innerText = data.name;
        //TEMPERATURE
        document.getElementById('temp').innerText = Math.round((data.main.temp) - 273.15) + "°";
        //DATE ,TIME, AND DAY.
        let dates = document.getElementById('dates');
        let year = document.getElementById('year');
        let hour = document.getElementById('hour');
        let minutes = document.getElementById('minutes');
        let day = document.getElementById('day');
        dates.innerText = (date.getDate()) + "' ";
        year.innerText = date.getFullYear();
        hour.innerText = (date.getHours()) + ":";
        minutes.innerText = (date.getMinutes()) + " - ";
        day.innerText = (weeks[date.getDay()]) + " , ";

        document.getElementById('cloudPercentage').innerText = data.clouds.all;
        //HUMIDITY
        document.getElementById('humidityPercentage').innerText = data.main.humidity;
        //WIND
        document.getElementById('wind').innerText = (data.wind.speed);
        //VISIBILITY
        document.getElementById('visibility').innerText = (data.visibility);
        getIcon(data);


    }
    getData();
});
function getIcon(data) {
    let Icon = document.getElementById('icon')
    if (data.weather[0].id >= 200 && data.weather[0].id <= 232) {
        Icon.src = 'img/thunder.svg'

    }
    else if (data.weather[0].id >= 300 && data.weather[0].id <= 321) {
        Icon.src = 'img/drizzel.svg'
        console.log('change')
    }
    else if (data.weather[0].id >= 500 && data.weather[0].id <= 531) {
        Icon.src = 'img/rain.svg'
    }
    else if (data.weather[0].id >= 600 && data.weather[0].id <= 622) {
        Icon.src = 'img/snow-4.svg'
    }
    else if (data.weather[0].id >= 700 && data.weather[0].id <= 781) {
        Icon.src = 'img/cloudy-day-1.svg'
    }
    else if (data.weather[0].id >= 800 && data.weather[0].id <= 804) {
        Icon.src = 'img/cloudy-day-3.svg'
    }

}
function hello(city) {
    const cities = document.getElementById(city).innerText;
    async function getdata() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=87209e96f919c45f54bbf0372154ae32`;
        const response = await fetch(url);
        const data = await response.json();

        //NOW ACCESING THE DATA IN HTML PAGE.
        //NAME OF THE CITY
        document.getElementById('name').innerText = data.name;
        //TEMPERATURE
        document.getElementById('temp').innerText = Math.round((data.main.temp) - 273.15) + "°";
        //DATE ,TIME, AND DAY.
        let dates = document.getElementById('dates');
        let year = document.getElementById('year');
        let hour = document.getElementById('hour');
        let minutes = document.getElementById('minutes');
        let day = document.getElementById('day');
        dates.innerText = (date.getDate()) + "' ";
        year.innerText = date.getFullYear();
        hour.innerText = (date.getHours()) + ":";
        minutes.innerText = (date.getMinutes()) + " - ";
        day.innerText = (weeks[date.getDay()]) + " , ";

        document.getElementById('cloudPercentage').innerText = data.clouds.all;
        //HUMIDITY
        document.getElementById('humidityPercentage').innerText = data.main.humidity;
        //WIND
        document.getElementById('wind').innerText = (data.wind.speed);
        //VISIBILITY
        document.getElementById('visibility').innerText = (data.visibility);
        getIcon(data);

    }
    getdata();

}




