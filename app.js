//define variable for app
const app = {};

app.init = function(){
  app.getCountries();
};

app.apiUrl = 'https://restcountries.eu/rest/v2/all';

app.getCountries = () => {
  $.ajax({
    url: app.apiUrl,
    method: 'GET',
    dataType: 'json',
  }).then((result) => {
    console.log('it worked', result);
  })
}







$(document).ready(function(){
  app.init();
});

//make an AJAX request to get API data for countries

//we will use the search parameters to categorize countries by language 

//the user will select the language by dropdown menu to filter countries

//the selected country info will be displayed, specifically: country name, flag, language, population, region/continent

//when the user switches languages, the new data will be displayed and will replace the previous language data