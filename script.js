let APIKey = "7d873a7d3475a47673334330698182fb";
let cityName;
let stateCode;
let countryCode;

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}"

function GetInfo(){
    const newName= document.getElementById("cityInput");
    const cityName= document.getElementById("cityName");
    cityName.innerHTML="--"+newName.value+"--"
}
fetch("https://api.openweathermap.org/data/2.5/forecast?'+newName.value+'&appid=7d873a7d3475a47673334330698182fb")
.then(response => response.json())
.then(data => {
    for(i=0;i<5;i++){
        document.getElementById("Monday" +(i+1)+"Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min - 289.2).toFixed(1)+"°";
    }

    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Max").innerHTML = "Max:" + Number(data.list[i].main.temp_max - 290.47).toFixed(1)+"°";
    }
    for(i=0;i<5;i++){
        document.getElementById("img" +(i+1)).src = "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
    }
})

.catch(err => alert("Something went wrong"))

function defaultStatus(){
    document.getElementById("cityInput").defaultValue = "Connecticut";
    GetInfo();
}
let d = newDate();
let weekDay =["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

function checkDay(weekday){
    if(day +d.day1()) ()=> 5; {
        return day +day.getDay1() - 6;
    }
    else('day1 +d.day1()) => 5'; {
        return 'day +day.getDay()';
    }
    for(i=0;1<5;1++){
        document.getElementById("day"+(i+1)).innerHTML = weekday[checkDay(i)];
    }
    let btn = button
    function location.reload(getElementById(.button)){
        getElementById(".btn") = "Click Me";
        onclick();
    }
}