const icons = {
    200: 'tstorms',
    201: 'tstorms',
    202: 'tstorms',
    210: 'tstorms',
    211: 'tstorms',
    212: 'tstorms',
    221: 'tstorms',
    230: 'tstorms',
    231: 'tstorms',
    233: 'tstorms',
    500: 'rain',
    501: 'rain',
    502: 'rain',
    503: 'rain',
    504: 'rain',
    520: 'rain',
    521: 'rain',
    522: 'rain',
    531: 'rain',
    741: 'fog', 
    800: 'sunny', 
    801: 'mostlysunny', 
    802: 'mostlycloudy', 
    803: 'cloudy', 
    804: 'cloudy',
  }  
  
  const form = document.querySelector('#form')
  
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    const formData = new FormData(form);
    const location = formData.get('location')
    console.log(location)
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=fr&appid=b5c9d75d0766c70684c3f80e9133e2d1`)
      .then(response => response.json())
      .then(json => {
        document.querySelector('#weatherInfo').classList.remove('hidden')
        document.querySelector('.temp').innerHTML = json.main.temp
        document.querySelector('.conditions').innerHTML = json.weather[0].description
        document.querySelector('#icon').setAttribute('class', icons[json.weather[0].id])
      })
  })