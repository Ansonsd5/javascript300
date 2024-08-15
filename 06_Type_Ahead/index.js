const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const searchText = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

function handleSearch(e) {
  const searchValue = e.target.value;
  const findMatchArray = findMatch(searchValue, cities);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const html = findMatchArray
    .map((item) => {
      const { city, state, population } = item;

      const regex = new RegExp(searchValue, "gi");

      const cityName = city.replace(
        regex,
        `<span class="hl">${searchValue}</span>`
      );
      const stateName = state.replace(
        regex,
        `<span class="hl">${searchValue}</span>`
      );
      return `<li>
        <span class='city'>${cityName} ${stateName}</span>
         <span class='population'>${numberWithCommas(population)}</span>
      </li>`;
    })
    .join("");
  suggestions.innerHTML = html;
}

const cities = [];

async function getData() {
  const data = await fetch(endpoint).then((res) => res.json());
  cities.push(...data);
}

if (!cities.length) {
  getData();
}

function findMatch(wordToMatch, cities) {
  return cities.filter((place) => {
    const regexp = new RegExp(wordToMatch, "gi");
    return place.city.match(regexp) || place.state.match(regexp);
  });
}

searchText.addEventListener("change", handleSearch);
searchText.addEventListener("keyup", handleSearch);

