const button = document.getElementById("search_btn");
const input = document.getElementById("city-input");

const city = document.getElementById("city_name");

const city_humidity = document.getElementById("humid");
const city_tempratue = document.getElementById("temp");
const city_condition = document.getElementById("cond");
const city_windspeed = document.getElementById("wind_speed");


async function getdata(cityname){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=8d3a32fa580b4cc5a73111109240208&q=${cityname}&aqi=yes`);
    return await promise.json();
};

button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getdata(value);
    console.log(result);
    

    city.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    city_humidity.innerText = `Humidity : ${result.current.humidity}`;
    city_tempratue.innerText = `Temprature : ${result.current.temp_c} Degree Celcius`;
    city_condition.innerText= `Condition : ${result.current.condition.text}`;
    city_windspeed.innerText = `Windspeed : ${result.current.wind_kph} KPH`;

});



