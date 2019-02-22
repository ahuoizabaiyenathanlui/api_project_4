//define variable for app
const app = {};
let lang = '';
const searchUrl = 'https://restcountries.eu/rest/v2/lang/';
let finalUrl = '';


app.getCountryByCode = function() {
  $('#language').change(function(){
    let code = $('#language option:selected').attr("value");
    app.apiUrl = searchUrl + code;
    console.log(app.apiUrl);
  
    $.ajax({
      url: app.apiUrl,
      method: 'GET',
      dataType: 'json',
      }).then((result) => {
        console.log(result);
        // PASS IN METHOD TO DISPLAY RESULTS //
      })  
  }); 
}


app.init = function(){
  // app.getCountries();
  app.getCountryByCode();
  // app.displayCountries();
};



// app.apiUrl = 'https://restcountries.eu/rest/v2/lang/en';
// create variable for language endpoint
// link appropriate code with dropdown menu //

/* 
app.getCountries = () => {
      $.ajax({
        url: app.apiUrl,
        method: 'GET',
        dataType: 'json',
      }).then((result) => {
        app.getCountryByCode(result);
        // PASS IN METHOD TO DISPLAY RESULTS //
      })
    }

*/

//make an AJAX request to get API data for countries



// app.countriesByLanguage = (countries) => {
//   const countryList = countries.map((countries) => {
//       console.log(countries);
//   });
   
   // filter the array for our desired items based on LANGUAGE
  //  countries.filter()
// };

// app.countriesByFlag = (countries) => {
//   const countryList = countries.map((countries) => {
//     return countries.name;
//   });
// };
  
//we will use the search parameters to categorize countries by language 

//the user will select the language by dropdown menu to filter countries

//the selected country info will be displayed, specifically: country name, flag, language, population, region/continent

//when the user switches languages, the new data will be displayed and will replace the previous language data

$(document).ready(function () {
  app.init();  
});