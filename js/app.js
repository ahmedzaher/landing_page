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
const sections = document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const headerHeight = document.querySelector("header").offsetHeight;
    return (
        rect.top + headerHeight >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const docFragment = document.createDocumentFragment();
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
sections.forEach(section => {
    section.classList.remove("your-active-class");
    if(isInViewport(section)) {
        section.classList.add("your-active-class")
    }
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


