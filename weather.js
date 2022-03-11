let key = "c56f014238fecfc910dba8a800cbba2c"

let submit = document.querySelector("button");
let input = document.querySelector("input");
let cities = document.querySelector("cities") 



submit.addEventListener("click",(e)=>{
    e.preventDefault()
    let cityWeather = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric`
    fetch(cityWeather).then(res=>{
        return res.json()
    }).then(result=>{
        console.log(result.name) 
        cities.innerHTML=`<li> ${result.name}, ${result.sys.country}</li>`
    })
})
// let creatElement = (result)=>{
//     cities.innerHTML = 
// }



