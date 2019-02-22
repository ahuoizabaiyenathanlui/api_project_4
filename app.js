//define variable for app
const app = {};

app.init = function(){
  app.getCountries();
  // app.displayCountries();
};

app.apiUrl = 'https://restcountries.eu/rest/v2/lang/en';
// create variable for language endpoint
// link appropriate code with dropdown menu //



//this is declaring the ftn, but you have to call it to be able to do anything with it. 
//make an AJAX request to get API data for countries
app.getCountries = () => {
  $.ajax({
    url: app.apiUrl,
    method: 'GET',
    dataType: 'json',
  }).then((result) => {
    app.countriesByLanguage(result);
    // PASS IN METHOD TO DISPLAY RESULTS //
  })
}


app.countriesByLanguage = (countries) => {
  const countryList = countries.map((countries) => {
      return countries.name;
  });
  console.log(countryList)
   
   // filter the array for our desired items based on LANGUAGE
  //  countries.filter()
};
  
//we will use the search parameters to categorize countries by language 

//the user will select the language by dropdown menu to filter countries

//the selected country info will be displayed, specifically: country name, flag, language, population, region/continent

//when the user switches languages, the new data will be displayed and will replace the previous language data

$(document).ready(function () {
  app.init();  
});