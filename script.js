$(document).ready(function () {
    let gaugeValue = 160; // Initialize the gauge value

    // Function to set the gauge's needle and counter
    function setValue(value) {
        $('#counter').text(value); // Update the displayed value
        $('#arrow').css({ transform: `rotate(${value}deg)` }); // Rotate the needle
    }

    // Set the initial value
    setValue(gaugeValue);
});
