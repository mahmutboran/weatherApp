localStorage.clear()
let key = "c56f014238fecfc910dba8a800cbba2c"
let submit = document.querySelector("button");
let input = document.querySelector("input");
let cities = document.querySelector(".cities")
let msg = document.querySelector(".msg")


let localCity=[];

submit.addEventListener("click", (e) => {
    e.preventDefault()
    let cityWeather = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric`
    fetch(cityWeather).then(res => {
        return res.json()
    }).then(result => {
        if (localCity.includes(result.name)) {
            msg.innerText=`You already know the weather for ${result.name},Please search for another city`
            setTimeout(() => {
                msg.innerText=""
            }, 3000);
           
        }else{
   
        cities.innerHTML += `<ul class="city">
        <li class="city-name"> ${result.name}<sup> ${result.sys.country}</sup></li>
        <li class="city-temp"> ${result.main.temp}<sup>${"°C"}</sup></li> 
        <img class="city-icon" src="http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" alt="">
        <figcaption> ${result.weather[0].main} <figcaption>
        </ul>
        `
        localCity.push(result.name)
        localStorage.setItem("city",JSON.stringify( localCity))
    }
    })
    input.value=""
})




