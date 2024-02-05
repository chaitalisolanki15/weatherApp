const getWeather = async (city) => {
    cityName.innerHTML = city
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e5bf4ef55cmshd796757372e0d1dp1f550djsn51cdb9a3c35d',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        cloud_pct.innerHTML = result.cloud_pct
        temp.innerHTML = result.temp
        temp2.innerHTML = result.temp
        // feels_like.innerHTML = result.feels_like
        humidity.innerHTML = result.humidity
        humidity2.innerHTML = result.humidity
        min_temp.innerHTML = result.min_temp
        max_temp.innerHTML = result.max_temp
        wind_speed.innerHTML = result.wind_speed
        wind_speed2.innerHTML = result.wind_speed
        wind_degrees.innerHTML = result.wind_degrees
        sunrise.innerHTML = result.sunrise
        sunset.innerHTML = result.sunset
    } catch (error) {
        console.error(error);
    }
};

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value);
})
getWeather("Delhi")

