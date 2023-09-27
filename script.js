const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
const translateParagraphs = async () => {
  const inputTexttest = document.querySelector("#transSeacrh");
  const inputText = inputTexttest.value;
  const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '437aa4723dmsh8eae8a882ee1508p18ab89jsn2da10d04f34f',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      body: new URLSearchParams({
          q: inputText,
          target: 'fr',
          source: 'en'
      })
  };
 


  try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.data.translations.length > 0) {
        const translatedText = result.data.translations[0].translatedText;

        const pTarget = document.createElement("p");
        pTarget.textContent = translatedText;

        const translationContainer = document.querySelector("#translationContainer");
        translationContainer.appendChild(pTarget);
    } else {
        console.warn("No translation found.");
    }
} catch (error) {
    console.error(error);
}
};
document.querySelector("#searchBtn").addEventListener("click", translateParagraphs);



const SearchCity = async () =>{
  const cityInput = document.querySelector("#wikiSearch");
  const cityInputVal = cityInput.value;
  // const wikiUrl = ('https://wikipedia-api1.p.rapidapi.com/search?q=$(cityInputValue)&lang=en');
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '437aa4723dmsh8eae8a882ee1508p18ab89jsn2da10d04f34f',
      'X-RapidAPI-Host': 'wikipedia-api1.p.rapidapi.com'
    }
  };
  fetch(`https://wikipedia-api1.p.rapidapi.com/search?q=${cityInputVal}&lang=en`, options)
    .then(response => response.json())
    .then(response => console.log(response))
  } 
  document.querySelector("#wikiSearchBtn").addEventListener("click", SearchCity);
  




let loginSec = document.querySelector(".loginSec");
let createSec= document.querySelector("#createSec");
let mainDiv = document.querySelector("main");
let userName= document.querySelector("#userName");
let lastName = document.querySelector("#lastName");
let createPass = document.querySelector("#createPass");
let repeatPass = document.querySelector("#repeatPass");
let transDiv = document.querySelector("#transDivi");
let allUser = [];
document.querySelector("#loginBtn").addEventListener("click", function() {
  mainDiv.style.display= "none";
  createSec.style.display= "none";
  loginSec.style.display = "block";
  transDiv.style.display= "none";
})
document.querySelector("#createBtn").addEventListener("click", function() {
  mainDiv.style.display= "none";
  createSec.style.display= "block";
  loginSec.style.display= "none";
  transDiv.style.display= "none";
})

document.querySelector("#createSub").addEventListener("click", function() {
  event.preventDefault();
  const newUser = {
    userName : userName.value,
    lastName: lastName.value,
    createPass: createPass.value,
  }
  if (createPass.value === repeatPass.value){
    allUser.push(newUser);
    localStorage.setItem("userInfo", JSON.stringify(allUser));
  }else {
    const errorMessage = document.querySelector("#error-message");
    errorMessage.textContent = "Passwords do not match. Please try again.";

    createPass.classList.add("error-input");
    repeatPass.classList.add("error-input");
  }
  
})
document.querySelector("#entrySub").addEventListener("click", function() {
  let loginUser = document.querySelector("#loginUser").value;
  let loginPas = document.querySelector("#loginPass").value;
  let userInfosJson = (localStorage.getItem("userInfo"));
  let userInfos = JSON.parse(userInfosJson);
  let foundUser = null;
  for (let i=0; i<userInfos.length; i++) {
    let user = userInfos[i];
    if (user.userName===loginUser && user.createPass===loginPas){
      foundUser = user;
      break;
      
    }
  }
  if (foundUser){
    alert("hello"+ foundUser.userName);

  }else {
    alert("user not found")
  }
});


// const url = 'https://maps-data.p.rapidapi.com/geocoding.php?query=Tehran&lang=en&country=fr';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '437aa4723dmsh8eae8a882ee1508p18ab89jsn2da10d04f34f',
// 		'X-RapidAPI-Host': 'maps-data.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


const dicUrl = 'https://www.dictionaryapi.com/api/v3/references/sd4/json/canada?key=450a38e1-492d-4bc0-b29e-43f9b7c8e144'
function getApi() {
  fetch(dicUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //Using console.log to examine the data
    console.log(data);
  })
}
document.querySelector("#dicBtn").addEventListener('click', getApi);


// const geoUrl = 'https://geography4.p.rapidapi.com/apis/geography/v1/country/name/japan?limit=10&sortOrder=asc&sortBy=name';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '437aa4723dmsh8eae8a882ee1508p18ab89jsn2da10d04f34f',
// 		'X-RapidAPI-Host': 'geography4.p.rapidapi.com'
// 	}
// };
const SearchLang = async () =>{
  const nationInput = document.querySelector("#nationLang");
  const ntionInputVal = nationInput.value;
  // const wikiUrl = ('https://wikipedia-api1.p.rapidapi.com/search?q=$(cityInputValue)&lang=en');
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '437aa4723dmsh8eae8a882ee1508p18ab89jsn2da10d04f34f',
		  'X-RapidAPI-Host': 'geography4.p.rapidapi.com'
    }
  };
  fetch(`https://geography4.p.rapidapi.com/apis/geography/v1/country/name/${ntionInputVal}?limit=10&sortOrder=asc&sortBy=name`, options)
    .then(response => response.json())
    .then(response => console.log(response))
  } 
  document.querySelector("#nationBtn").addEventListener("click", SearchLang);


  const SearcAirport = async () => {
    const airPortVal = document.querySelector("#airportSelect").value;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '437aa4723dmsh8eae8a882ee1508p18ab89jsn2da10d04f34f',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };
    fetch(`https://travel-advisor.p.rapidapi.com/flights/create-session?o1=YYZ&d1=${airPortVal}&dd1=2023-09-26&currency=USD&ta=1&c=0`, options)
    .then(response => response.json())
    .then(response => console.log(response))
  }
  document.querySelector("#airportBtn").addEventListener("click", SearcAirport);

    const streetMap = async () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '437aa4723dmsh8eae8a882ee1508p18ab89jsn2da10d04f34f',
          'X-RapidAPI-Host': 'maptiles.p.rapidapi.com'
        }
      }
      fetch(`'https://maptiles.p.rapidapi.com/es/map/v1/3/4/2.png`, options)
      .then(response => response.json())
      .then(function(data){
        console.log(data);
        document.querySelector("mapsAssume").textContent = data;
      })
    }
    document.querySelector("#mapBtn").addEventListener("click", streetMap)
  
  
  