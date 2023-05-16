const getPuzzle = (wordCount) => {
  return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Unable to fetch puzzle");
    }
  }).then((data) => {
    return data.puzzle;
  })
}

const getCountry = (countryCode) => {
  return fetch('https://restcountries.com/v3.1/all', {}).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Unable to fetch data")
    }
  }).then((data) => {
    return data.find((country) => {
      return country.cca2 === countryCode;
    }).name.common;
  }).catch((err) => {
    console.log(err)
  })
}

const getLocation = () => {
  return fetch('https://ipinfo.io/json?token=c90630df730e8a', {}).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error("Unable to fetch data")
    }
  }).then((data) => {
    return `State: ${data.city}; Region: ${data.region}; Country: ${data.country}`
  }).catch((err) => {
    console.log(err);
  })
}