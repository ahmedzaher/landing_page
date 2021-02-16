/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const docFragment = document.createDocumentFragment();
const sections = document.querySelectorAll("section");
sections.forEach(section => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = section.getAttribute("data-nav");
    a.classList.add("menu__link");
    li.appendChild(a);
    docFragment.appendChild(li);
});
const navBarList = document.querySelector("#navbar__list")
navBarList.appendChild(docFragment);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


