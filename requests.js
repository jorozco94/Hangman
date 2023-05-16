const getPuzzle = async (wordCount) => {
  const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('Unable to get puzzle')
  }
}

const getCountry = async (countryCode) => {
  const response = await fetch('https://restcountries.com/v3.1/all')
  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => {
      return country.cca2 === countryCode;
    }).name.common;
  } else {
    throw new Error("Unable to fetch data")
  }
}

const getLocation = async () => {
  const response = await fetch('https://ipinfo.io/json?token=c90630df730e8a');
  if (response.status === 200) {
    const data = await response.json()
    return `State: ${data.city}; Region: ${data.region}; Country: ${data.country}`
  } else {
    throw new Error("Unable to fetch data")
  }
}