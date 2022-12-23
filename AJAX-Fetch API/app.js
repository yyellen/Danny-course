// https://www.geojs.io/docs/v1/endpoints/country/
// https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch

fetch('https://get.geojs.io/v1/ip/country?ip=8.8.8.8')
  .then(function(response) {
    return response.text();
  })
  .then(function(result) {
    console.log(result);
  });
  