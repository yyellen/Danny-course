let xhtpp = new XMLHttpRequest();

xhtpp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log("My first http request");
    console.log(xhtpp.responseText);
  }
}

xhtpp.open("GET", "https://get.geojs.io/v1/ip/country?ip=8.8.8.8", true);
xhtpp.send();