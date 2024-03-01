function showFilterContent(id) {
  document.getElementById(id).classList.toggle('show');
  document.getElementById(`${id}-chev`).classList.toggle("chevron-rotate");
}

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

//control variables
let isSearching = false;
let page = 1;

function createCarCard (car) {
  const {year, make, model, mileage, price, color, gasMileage} = car;
}

