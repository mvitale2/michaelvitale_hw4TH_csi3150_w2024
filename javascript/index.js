//retrieved from https://www.w3schools.com/howto/howto_js_dropdown.asp
function showFilterContent() {
    document.getElementById("year").classList.toggle("show");
    document.getElementById("year-chev").classList.toggle("chevron-rotate")
}

// closes the dropdown if the user clicks the dropdown or another part of the page while shown
/*
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
