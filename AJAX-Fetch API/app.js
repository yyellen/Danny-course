  const input = document.querySelector('.input')
  const findButton = document.querySelector('.find-button')
  const result = document.querySelector('.result')

// https://www.geojs.io/docs/v1/endpoints/country/
// https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch

findButton.addEventListener('click', () => {
    const inputValue = input.value
    // console.log(inputValue);
  
    const url = `https://get.geojs.io/v1/ip/country?ip=${inputValue}`
  
    fetch(url)
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      result.innerHTML = data
    })
  })

// 1216-自己寫的作業
  // const input = document.querySelector('.input')
  // const findButton = document.querySelector('.find-button')
  // const result = document.querySelector('.result')
  
  // findButton.addEventListener('click', () => {
  //   const inputValue = input.value
  //   // console.log(inputValue);
  
  //   const url = `https://get.geojs.io/v1/ip/country?ip=${inputValue}`
  
  //   fetch(url)
  //   .then((response) => response.text())
  //   .then((data) => {
  //     // console.log(data)
  //     result.innerHTML = data
  //   })
  //   .catch((error) => console.log(error));
  // })
  