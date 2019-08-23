window.onload = function() {
  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  const cities = [];
  fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data));

  const textInputField = document.querySelector(".city-search");
  const searchResults = document.querySelector(".search-results");

  function searchForCity() {
    const searchInput = textInputField.value;

    if (searchInput) {
      const regex = new RegExp(searchInput, "gi");
      const filteredCities = cities.filter(cityObj => regex.test(cityObj.city));
      var cityList = filteredCities
        .map(cityObj => `<li class="result-item">${cityObj.city}</li>`)
        .join("");

      searchResults.innerHTML = cityList;
    } else {
      searchResults.innerHTML = "";
    }
  }

  textInputField.addEventListener("keyup", searchForCity);
};
