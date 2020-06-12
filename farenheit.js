let tempF = document.getElementById("temperature")
// getFarenheit helper function
multipleByNineFifths = (tempF) => tempF * (9/5) 

getFarenheit = celcius => multipleByNineFifths(celcius) + 32

document.getElementById("display").innerHTML = getFarenheit(tempF);

