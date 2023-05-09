const getPuzzle = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle)
    } else if (e.target.readyState === 4) {
      callback('An error has taken place', undefined)
    }
  })

  request.open("GET", "https://puzzle.mead.io/puzzle?wordCount=3");
  request.send();
  
}

const getCountry = (countryCode, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      const country = data.find((country) => country.cca2 === countryCode);
      callback(undefined, country)
    } else if (e.target.readyState === 4) {
      callback('An error has taken place', undefined);
    }
  })

  request.open('GET', 'https://restcountries.com/v3.1/all');
  request.send();
}
