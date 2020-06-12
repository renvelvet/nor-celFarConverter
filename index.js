// getFarenheit helper function
multipleByNineFifths = (tempF) => tempF * (9 / 5);

getFarenheit = () => {
  let celcius = document.getElementById("temperature").value;
  document.getElementById("display").innerHTML =
    multipleByNineFifths(celcius) + 32;
};

let tempC = document.getElementById("temperature").value;

// getCelcius helper function
substractByFiveNinths = (tempC) => tempC - 32;

getCelcius = (farenheit) => {
  farenheit = document.getElementById("temperature").value;
  document.getElementById("display").innerHTML =
    substractByFiveNinths(farenheit) * (5 / 9);
};
