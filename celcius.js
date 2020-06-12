let tempC = document.getElementById("temperature")

// getCelcius helper function
substractBy32 = (tempC) => tempC - 32

getCelcius = farenheit => substractBy32(farenheit) * (5/9)

document.getElementById("display").innerHTML = getCelcius(tempC);
