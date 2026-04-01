fetch("https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true")
.then(res => res.json())
.then(data => {
    console.log(data);
});