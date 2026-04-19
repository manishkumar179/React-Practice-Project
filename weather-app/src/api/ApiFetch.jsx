const baseURL = "https://api.weatherapi.com/v1/current.json?key=06688c10d8d445b19c7191140262903";

export let getWeatherData = async (city)=>{

    let response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json()

}
