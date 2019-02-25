//define variable for app
const app = {};
const searchUrl = 'https://restcountries.eu/rest/v2/lang/';
let finalUrl = '';

// STRETCH GOAL ATTEMPTS//
// app.getCountriesByName = function (results){
//   const alphaCode = results.map((index)=>{
//     return index.alpha2Code;
//   })
//   console.log(alphaCode)
// }

app.getCountryByCode = function() {
  $('#language').change(function(){
    let code = $('#language option:selected').attr("value");
    app.apiUrl = searchUrl + code;
  
    // make AJAX request to get API data for countries //
    $.ajax({
      url: app.apiUrl,
      method: 'GET',
      dataType: 'json',
      }).then((result) => {
        $('ul').empty();
        app.countriesByLanguage(result);
        app.getCountriesByName(result);
      })  
  }); 
}


app.init = function(){
  app.getCountryByCode();
  
  // MAP THINGG //
  $('#vmap').vectorMap(
  {
    map: 'world_en',
      hoverOpacity: 0.7,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: '#fff',
      enableZoom: false,
  })
};

app.countriesByLanguage = (countries) => {
  countries.forEach(function(result){
    let country = (result.name);
    let region = (result.region);
    let flag = (result.flag);
    let population = (result.population);
    let capital = (result.capital);
    $('ul').append(`<li>
        <h2 class="countryName">${country}</h2>
        <div class="flagBox">
          <img src=${flag} alt="official flag of ${country}">
        </div>
        <h3>Region: ${region}</h3>
        <h3>Population: ${population}</h3>
        <h3>Capital: ${capital}</h3>   
      </li>`);
    })
  };

$(document).ready(function () {
  app.init();  
});