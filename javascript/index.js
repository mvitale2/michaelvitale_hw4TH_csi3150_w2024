import usedCars from "./usedCars.js";

const form = document.getElementById("filters-form");
const container = document.getElementById("content-container");
const color = document.getElementById("color");
const make = document.getElementById("make");
/*
const year = document.getElementById("year");
const price = document.getElementById("price");
const mileage = document.getElementById("mileage");
*/

//car cards
function createCarCard(car) {
  const { year, color, make, model, price, mileage, gasMileage } = car;
  return `
  <div class="car-card">
    <img src="./assets/images/${make}-${model}.png" alt="${color}-${make}-${model}" />
    <div class="car-card-info">
      <h2>${make} ${model}</h2>
      <p>${year}</p>
      <p>$${price}</p>
      <p>Mileage: ${mileage}</p>
      <p>Gas Mileage: ${gasMileage}</p>
      <p>Color: ${color}</p>
    </div>
  </div>
  `;
}

function createFilteredCarCard(car, filters) {
  const { year, color, make, model, price, mileage, gasMileage } = car;
  for (let i = 0; i < filters.length; i++) {
    if (Object.keys(car).includes(filters[i])) {
      return `
      <div class="car-card">
        <img src="./assets/images/${make}-${model}.png" alt="${color}-${make}-${model}" />
        <div class="car-card-info">
          <h2>${make} ${model}</h2>
          <p>${year}</p>
          <p>$${price}</p>
          <p>Mileage: ${mileage}</p>
          <p>Gas Mileage: ${gasMileage}</p>
          <p>Color: ${color}</p>
        </div>
      </div>
      `;
    }
  }
}

function generateCarCards(cars) {
  return cars.map((car) => createCarCard(car)).join("");
}

function generateFilteredCarCards(cars, filters) {
  return cars.map((car) => createFilteredCarCard(car, filters)).join("");
}

// color filter
function getCarColors(cars) {
  const uniqueColors = new Set();
  cars.forEach((car) => {
    uniqueColors.add(car.color);
  });
  return [...uniqueColors];
}

function createColorFilter(color) {
  return `
    <div>
      <input type="checkbox" name="color" id="${color}" value="${color}" />
      <label for="${color}">${color}</label>
    </div>
    `;
}

function generateColorFilters(colors) {
  return colors.map((color) => createColorFilter(color)).join("");
}

//make filter
function getCarMakes(cars) {
  const uniqueMakes = new Set();
  cars.forEach((car) => {
    uniqueMakes.add(car.make);
  });
  return [...uniqueMakes];
}

function createMakeFilter(make) {
  return `
  <div>
    <input type="checkbox" name="make" id="${make}" />
    <label for="${make}">${make}</label>
  </div>
  `;
}

function generateMakeFilters(makes) {
  return makes.map((make) => createMakeFilter(make)).join("");
}

//filter logic

const colors = getCarColors(usedCars);
const makes = getCarMakes(usedCars);
const mileages = ["15", "30", "45", "60"];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var checkedCheckboxes = document.querySelectorAll(
    "input[type=checkbox]:checked"
  );
  var choiceFilters = [];
  checkedCheckboxes.forEach(function (checkbox) {
    if (colors.includes(checkbox.id)) {
      choiceFilters.push(checkbox.id);
      console.log(choiceFilters);
    } else if (makes.includes(checkbox.id)) {
      choiceFilters.push(checkbox.id);
      console.log(choiceFilters);
    } else if (mileages.includes(checkbox.id)) {
      choiceFilters.push(checkbox.id);
      console.log(choiceFilters);
    }
  });
  console.log(choiceFilters);
  console.log(generateFilteredCarCards(usedCars, choiceFilters));
  container.innerHTML = generateFilteredCarCards(usedCars, choiceFilters);
});

/*
function getCheckedColors () {
  const selectedColors = new Set();
  colorFilters.forEach(colorFilter => {
    if (colorFilter.getElementById(`${colorFilter}`).checked == true) {
      selectedColors.add(color);
    }
  });
  console.log(selectedColors);
  return [...selectedColors];
}
*/

//initialize on page load

function init() {
  container.innerHTML = generateCarCards(usedCars);
  color.innerHTML = generateColorFilters(getCarColors(usedCars));
  make.innerHTML = generateMakeFilters(getCarMakes(usedCars));
}

init();

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
