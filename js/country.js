const resCountries = ()=>{
    const URL= `https://restcountries.com/v3.1/all`
    fetch(URL).then(res=>res.json())
    .then(data=>allCountries(data))
    .catch(err=>console.error(err))
};

const allCountries =countries=>{
    // console.log(countries);
    const showCountries =document.getElementById("show-country");
    countries.forEach(country => {
        console.log(country);
        const div = document.createElement("div");
        div.classList.add("col");
        div.classList.add("h-full")
        div.innerHTML = `
        
        <div class="card h-100">
      <img src="${country.flags.png}" class="w-full h-full p-2 card-img-top" alt="...">
      <div class="card-body">
        <h2 class="card-title">${country.name.common}</h2>
        <h2 class="card-title">${country.name.official}</h2>
      </div>

        `
        showCountries.appendChild(div);
    });
}

const countryName=()=>{
    document.getElementById("show-country").innerHTML="";
    const values = document.getElementById("inputPassword2").value;
    const URL= `https://restcountries.com/v3.1/name/${values}`;
fetch(URL).then(res=>res.json())
.then(data=>showSingleCounty(data))
}
const showSingleCounty=(data)=>{
    console.log(data[0]);
const displaySearchCountry = document.getElementById("display-search-country");
document.getElementById("inputPassword2").value="";
displaySearchCountry.innerHTML=`
<div class="card h-100">
      <img src="${data[0].flags.png}" class="w-full h-full p-2 card-img-top" alt="...">
      <div class="card-body">
        <h2 class="card-title">${data[0].name.common}</h2>
        <h2 class="card-title">Official : ${data[0].name.official}</h2>
        <h2 class="card-title">Capital : ${data[0].capital}</h2>
        <h2 class="card-title">Area : ${data[0].area}</h2>
        <h2 class="card-title">Population : ${data[0].population}</h2>
        <img src="${data[0].coatOfArms.png}" class="w-full h-full p-2 card-img-top" alt="...">
      </div>
`
}


document
  .getElementById("inputPassword2")
  .addEventListener("keypress", function (e) {
    // console.log(e.key);

    if (e.key === "Enter") {
      countryName();
    }
  });



resCountries();
