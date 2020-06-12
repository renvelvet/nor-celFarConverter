
// getFarenheit helper function
multipleByNineFifths = (celcius) => celcius * (9/5)

// getCelcius helper function
substractByFiveNinths = (farenheit) => farenheit - 32


getCelcius = farenheit => console.log(substractByFiveNinths(farenheit) * (5/9))
    
getFarenheit = celcius => console.log(multipleByNineFifths(celcius) + 32)

