// Get elements from DOM
const $dropdown = document.querySelector(".dropdown");
const $textbox = document.querySelector(".textbox");

// Enable or disable the dropdown menu
$dropdown.onclick = function() {
    $dropdown.classList.toggle("active");
}

// Show with the selected option
function show(option) {
    $textbox.value = option;
}