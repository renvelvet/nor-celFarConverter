let tempC = document.getElementById("temperature")

// getCelcius helper function
substractByFiveNinths = (tempC) => tempC - 32

getCelcius = farenheit => substractByFiveNinths(farenheit) * (5/9)

document.getElementById("display").innerHTML = getCelcius(tempC);
