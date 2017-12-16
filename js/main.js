var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;
function load(){
    var city = document.getElementById('city').value;
    if(city === ''){
        city = 'Brisbane';
    }
    // GET THE CONDITIONS
weatherConditions.open('GET', 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/conditions/forecast/q/Australia/'+city+'.json', true);
// console.log(weatherConditions);
weatherConditions.responseType = 'text';
weatherConditions.send(null);
// console.log(weatherConditions);
document.getElementById('city').value="";

}
load();



weatherConditions.onload = function() {
	console.log(weatherConditions);
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        if(cObj.response.error){
            alert(cObj.response.error.description);
        }else{
        console.log(cObj);
        document.getElementById("location").innerHTML = cObj.location.city;
        document.getElementById("weather").innerHTML = cObj.current_observation.weather;
        document.getElementById("temperature").innerHTML = cObj.current_observation.temp_c + " c";
        document.getElementById("desc").innerHTML = cObj.forecast.txt_forecast.forecastday[0].fcttext_metric;
        //Day1
        document.getElementById('r1c1').innerHTML = cObj.forecast.simpleforecast.forecastday[1].date.weekday;
        document.getElementById('r1c3').innerHTML = cObj.forecast.simpleforecast.forecastday[1].high.celsius;
        document.getElementById('r1c4').innerHTML = cObj.forecast.simpleforecast.forecastday[1].low.celsius;
        document.getElementById('r1c2').src = cObj.forecast.simpleforecast.forecastday[1].icon_url;
        //Day2
        document.getElementById('r2c1').innerHTML = cObj.forecast.simpleforecast.forecastday[2].date.weekday;
        document.getElementById('r2c3').innerHTML = cObj.forecast.simpleforecast.forecastday[2].high.celsius;
        document.getElementById('r2c4').innerHTML = cObj.forecast.simpleforecast.forecastday[2].low.celsius;
        document.getElementById('r2c2').src = cObj.forecast.simpleforecast.forecastday[2].icon_url;
        //Day3
        document.getElementById('r3c1').innerHTML = cObj.forecast.simpleforecast.forecastday[3].date.weekday;
        document.getElementById('r3c3').innerHTML = cObj.forecast.simpleforecast.forecastday[3].high.celsius;
        document.getElementById('r3c4').innerHTML = cObj.forecast.simpleforecast.forecastday[3].low.celsius;
        document.getElementById('r3c2').src = cObj.forecast.simpleforecast.forecastday[3].icon_url;
        }
    } //end if
}; //end function










// GET THE FORECARST
/*
weatherForecast.open('', '', true);
weatherForecast.responseType = 'text'; 
weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);
	
} //end if
}; //end function
*/

