//define variable for app
const app = {};
let lang = '';
const searchUrl = 'https://restcountries.eu/rest/v2/lang/';
let finalUrl = '';


app.getCountryByCode = function() {
  $('#language').change(function(){
    let code = $('#language option:selected').attr("value");
    app.apiUrl = searchUrl + code;
  
    $.ajax({
      url: app.apiUrl,
      method: 'GET',
      dataType: 'json',
      }).then((result) => {
        $('ul').empty();
        app.countriesByLanguage(result);
      })  
  }); 
}


app.init = function(){
  app.getCountryByCode();
  // app.displayCountries();
  
  // MAP THINGG //
  // $('#vmap').vectorMap(
  // {
  //   map: 'world_en' 
  // })
};


// create variable for language endpoint
// link appropriate code with dropdown menu //


//make an AJAX request to get API data for countries



app.countriesByLanguage = (countries) => {
  // const countryList = countries.map((countries) => {
    
  //     console.log(countries.name, countries.flag, countries.region, countries.population);
  // });
  countries.forEach(function(result){
      console.log(result);
    let country = (result.name);
    let region = (result.region);
    let flag = (result.flag);
    let population = (result.population);
    let capital = (result.capital);
    $('ul').append(`<li>
        <h2 class="countryName">${country}</h2>
        <div class="flagBox">
          <img src=${flag} alt="">
        </div>
        <h3>Region: ${region}</h3>
        <h3>Population: ${population}</h3>
        <h3>Capital: ${capital}</h3>   
      </li>`);
      // let country = $('.countryName');
      // let region = $('.region');
      
      // country.html(result.name)
      // region.html(result.region)

//each country will be an li

      // console.log(result.name)
    //   $('.results').html(`
    //     <div>${result.flag}</div>
    //     <h2>${result.name}</h2>
    //     <h3>${result.region}</h3>
    //     <p>${result.population}</p>`)
    })
  };
// const {countryName, countryFlag, countryRegion, countryPopulation} = app.countriesByLanguage;

// app.displayResult = (userChoice) => {
//   const resultList = userChoice.filter((index) => {
//     return index;
//   });
//   resultList.forEach((result) => {
//     $('.results').append(`
//         <div>${result.flag}</div>
//         <h2>${result.name}</h2>
//         <h3>${result.region}</h3>
//         <p>${result.population}</p>
//         `)
//   })
// }












//   app.countryFlags = (flags) => {
//     const flagList = countries.map((flags) => {
//       console.log(countries.flag);
//     });
   
//    // filter the array for our desired items based on LANGUAGE
//   //  countries.filter()
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