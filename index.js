const api={
    url:"http://api.openweathermap.org/data/2.5/weather?q=",
    key:"173b6c4411fc880e4ffdc0c20a92df22"
}

let inputCity=document.getElementById("enterCity");
inputCity.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        getResults(event.target.value)
    }
});

function getResults(cityName){
    fetch(`${api.url}${cityName}&appid=${api.key}&units=metric`)
    .then((result)=>
    result.json())
    .then((res)=>{
        console.log(res)
    mapRespondse(res)}
    );
}
function mapRespondse(urlResponse){
    let outputCityDom=document.querySelector('#cityName');
    outputCityDom.innerHTML=urlResponse.name;
    let outputDateDom=document.querySelector('#date');
    let now=new Date();
    outputDateDom.innerText=formDate(now);
    let outputTempDom=document.querySelector('#tempurature');
    outputTempDom.innerHTML=`${Math.round(urlResponse.main.temp)}<span>°C</span>`;
    let weather=document.querySelector('#weather');
    weather.innerText=urlResponse.weather[0].main;
   let hilow=document.querySelector('#hi-low');
   hilow.innerText=`${Math.round(urlResponse.main.temp_min)}°C/${Math.round(urlResponse.main.temp_max)}°C`;
}

function  formDate(d){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day= days[d.getDay()];
    let month= months[d.getMonth()];
    let year=d.getFullYear();
    let date=d.getDate();
    
    return `${day} ${date}${month}${year}`;
}
window.onload=getResults('Bengaluru')