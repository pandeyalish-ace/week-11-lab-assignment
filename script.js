/**
 * Week 11: DOM and Dynamic Event Handling
 * Student: Alish Pandey
 */

// 1. Select the button using its ID from the HTML
const themeToggle = document.querySelector('#theme-toggle');

// 2. Define the action to take when the button is clicked
themeToggle.addEventListener('click', function() {
    
    // 3. Toggle the 'light-mode' class on the <body>
    // This is the "Magic Switch" that changes the CSS
    document.body.classList.toggle('light-mode');

    // 4. Update the Button Text and Icon dynamically
    if (document.body.classList.contains('light-mode')) {
        themeToggle.textContent = "🌙 Switch to Dark";
    } else {
        themeToggle.textContent = "☀️ Switch to Light";
    }

    // 5. Console Log for your Assignment Screenshot
    // This proves to the professor that your event listener is working!
    console.log("Theme changed! Light mode status: " + document.body.classList.contains('light-mode'));
});  
