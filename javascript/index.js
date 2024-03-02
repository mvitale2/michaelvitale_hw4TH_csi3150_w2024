import usedCars from "./usedCars.js";

const form = document.getElementById("search-form");
const user_query = document.getElementById("search-input");
const container = document.getElementById("content-container");
const color = document.getElementById("color");
const make = document.getElementById("make");
const year = document.getElementById("year");
const price = document.getElementById("price");
const mileage = document.getElementById("mileage");
const filters = [color, make, year, price, mileage];

function createCarCard(car) {
  return `
  <div class="car-card">
    <h2>${car.make} ${car.model}</h2>
    <p>${car.year}</p>
    <p>$${car.price}</p>
    <p>Mileage: ${car.mileage}</p>
    <p>Gas Mileage: ${car.gasMileage}</p>
    <p>Color: ${car.color}</p>
  </div>
  `;
}

function generateCarCards(cars) {
  return cars.map((car) => createCarCard(car)).join("");
}

container.innerHTML = generateCarCards(usedCars);

/* attempts to be smart and apply clickiness to all filters without having to do anything manually
//retrieved from https://www.w3schools.com/howto/howto_js_dropdown.asp
function showFilterContent(event) {
  const targetElement = event.target;
  targetElement.classList.toggle("show");
  console.log(`Clicked element: ${event.target.textContent}`);
  //document.getElementById("year-chev").classList.toggle("chevron-rotate")
}

filters = document.querySelectorAll("filter-header");

filters.forEach((filter) => {
  filter.addEventListener("click", showFilterContent);
});

function handleFilterClick(event) {
  const targetElement = event.target;
  targetElement.classList.toggle('show');
  console.log(`Clicked element: ${event.target}`)
}

// closes the dropdown if the user clicks the dropdown or another part of the page while shown

window.onclick = function (event) {
  if (!event.target.matches(".filter-header")) {
    var dropdowns = document.getElementsByClassName("filter-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
*/
