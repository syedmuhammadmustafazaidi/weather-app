let getWeather = ()=>{
    let c_name = document.querySelector("#inp-weather").value
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${c_name}&units=metric&appid=ecf07bafe5f67fa8a66abd728beb563b`)
    .then((res)=>{
        document.querySelector("#temp").innerHTML = 'Temperature is: '+ res.data.main.temp
        document.querySelector("#humidity").innerHTML = 'Humidity is: '+res.data.main.humidity
         document.querySelector("#temp_max").innerHTML = 'Temp max is: '+res.data.main.temp_max
        document.querySelector("#temp_min").innerHTML = 'Temp min is: '+res.data.main.temp_min
        
       
       
       // console.log(res.data.main.temp)
        // console.log(res.data.main.pressure)
        // console.log(res.data.main.temp_max)
        // console.log(res.data.main.temp_min)
    })
    .catch((err)=>{
        console.log(err)
    })
}