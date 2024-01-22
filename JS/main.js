// main.js

document.addEventListener("DOMContentLoaded", function () {
    // Array of words with corresponding classes
    var words = [
        { text: "Your Choice", class: "choice" },
        { text: "Research", class: "research" },
        { text: "Support", class: "support" },
        { text: "Creation", class: "creation" }
    ];

    // Get the span element with the class "word"
    var wordSpan = document.querySelector('.word');

    // Function to rotate words
    function rotateWords() {
        // Get the current word object
        var currentWordObject = words.find(wordObject => wordObject.text === wordSpan.textContent);

        // Find the index of the current word object in the array
        var currentIndex = words.indexOf(currentWordObject);

        // Calculate the index of the next word object
        var nextIndex = (currentIndex + 1) % words.length;

        // Get the next word object from the array
        var nextWordObject = words[nextIndex];

        // Update the content and class of the span element
        wordSpan.textContent = nextWordObject.text;
        wordSpan.className = "word " + nextWordObject.class;
    }

    // Set an interval to rotate words every 2000 milliseconds (2 seconds)
    setInterval(rotateWords, 2000);
});


// Initialize the phone input field
const phoneInput = document.getElementById('phone');
const iti = window.intlTelInput(phoneInput, {
    separateDialCode: true,
            initialCountry: 'auto',
            geoIpLookup: function(callback) {
                // Replace this with your own implementation for fetching user's location
                // For simplicity, we'll use a dummy location (United States) for now
                callback('US');
            },
        });