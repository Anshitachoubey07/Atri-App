
const dropdownBtn = document.getElementsById("dropdown");
const dropdownMenu = document.getElementsByClassName("dropdown");

const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
  };


dropdownBtn.addEventListener("click", function (e) {
    e.toggleDropdown();
  });