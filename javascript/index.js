import usedCars from "./usedCars.js";

const form = document.getElementById("filters-form");
const container = document.getElementById("content-container");
const color = document.getElementById("color");
const make = document.getElementById("make");
const year = document.getElementById("year");
/*
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

function generateCarCards(cars) {
  return cars.map((car) => createCarCard(car)).join("");
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

//year filter

function getCarYears(cars) {
  const uniqueYears = new Set();
  cars.forEach((car) => {
    uniqueYears.add(car.year);
  });
  return [...uniqueYears];
}

function createYearFilter(year) {
  return `
  <div>
    <input type="checkbox" name="year" id="${year}" />
    <label for="${year}">${year}</label>
  </div>
  `;
}

function generateYearFilters(years) {
  return years.map((year) => createYearFilter(year)).join("");
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
const years = getCarYears(usedCars);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var checkedCheckboxes = document.querySelectorAll(
    "input[type=checkbox]:checked"
  );
  var choiceFilters = [];
  checkedCheckboxes.forEach(function (checkbox) {
    if (colors.includes(checkbox.id)) {
      choiceFilters.push(checkbox.id);
    } else if (makes.includes(checkbox.id)) {
      choiceFilters.push(checkbox.id);
    } else if (years.includes(checkbox.id)) {
      choiceFilters.push(checkbox.id);
    }
  });
  console.log(choiceFilters);
});

//initialize on page load

function init() {
  container.innerHTML = generateCarCards(usedCars);
  color.innerHTML = generateColorFilters(getCarColors(usedCars));
  make.innerHTML = generateMakeFilters(getCarMakes(usedCars));
  year.innerHTML = generateYearFilters(getCarYears(usedCars));
}

init();
