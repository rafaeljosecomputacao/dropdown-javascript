// Get elements from DOM
const $dropdown = document.querySelector(".dropdown");
const $textbox = document.querySelector(".textbox");

// Enables or disables the options box to select from the dropdown
$dropdown.onclick = function() {
    $dropdown.classList.toggle("active");
}

// Grab the selected option and show it in the dropdown
function show(option) {
    $textbox.value = option;
}