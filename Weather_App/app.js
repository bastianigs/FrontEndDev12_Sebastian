const bar = document.getElementById( "bar" );
const city = document.querySelector( "#city" );
const searchBtn = document.querySelector( "#search" );
const cityStyle = window.getComputedStyle( city ); 

const nameElem = document.querySelector( "#name" );
const tempElem = document.querySelector( "#temp" );
const feeltempElem = document.querySelector( "#feeltemp" );
const descElem = document.querySelector( "#description" );
const minValElem = document.querySelector( "#min" );
const maxValElem = document.querySelector( "#max" );
const iconElem = document.querySelector( "#icon" );

const weatherElem = document.querySelector( "#weather" );

resizeInput();

city.focus();
city.onkeypress = resizeInput;

function resizeInput() {
    let newlen = 40;
    if (city.value.length > 4)
        newlen = city.value.length*10;

    city.style.width = `${newlen}px`;
}

searchBtn.addEventListener( 'click', todaysWeather );

function todaysWeather() {
    let target = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
    target += city.value;
    fetch (target)
        .then ((response) => response.json())
        .then ((data) => {
            if (bar.classList.contains("wrong")) {
                city.classList.remove("wrongText");
                bar.classList.remove("wrong");
                console.log("used to be wrong, but it's fine now.");
            }

            // const timezone = new Date( data.timezone * 10 * 10 );
            // console.log( timezone );
            console.log( "______________________");
            console.log( "Getting info for " + data.name + " (" + data.sys.country + ") at " );
            const weather = data.weather[0];
            console.log( weather.main );
            const icon = weather.icon;
            console.log( "Description: " + weather.description );
            const main = data.main;
            console.log( "Humidity: " + main.humidity );
            console.log( "Pressure: " + main.pressure );
            console.log( "Temperature: " + main.temp + " (feels like " + main.feels_like + ")" );
            console.log( "(min: " + main.temp_min + " / max: " + main.temp_max + ")" );
            console.log( data );
            
            let temp = Math.trunc(main.temp);
            let feeltemp = Math.trunc(main.feel_like);
            let min = Math.trunc(main.temp_min);
            let max = Math.trunc(main.temp_max);

            nameElem.innerHTML = data.name + ` (${data.sys.country})`;
            tempElem.innerHTML = temp + `°C <span id="feeltemp">(feels like ${Math.trunc(main.feels_like)}°C)</span>`;
            let desc = weather.description;
            descElem.innerHTML = desc[0].toUpperCase() + desc.slice(1);
            minValElem.innerHTML = `min: ${min}°C`;
            maxValElem.innerHTML = `max: ${max}°C`;

            iconElem.firstElementChild.src = "https://openweathermap.org/img/wn/" + weather.icon + "@4x.png";
        
            weatherElem.style.visibility = "visible";
            weatherElem.animate([
                { bottom: '300px'},
                { bottom: '30px' }
            ], {
                duration: 700,
                iterations: 1
            });
             
        } )
        .catch ((error) => {
            console.log( city.classList.contains("wrong"));
            if (!bar.classList.contains("wrong")) {
                city.classList.add("wrongText");
                bar.classList.add("wrong");
                console.log("ok, it's wrong, but I See no reason for not becoming red?!");
            }
        });
    console.log( city.value );
}