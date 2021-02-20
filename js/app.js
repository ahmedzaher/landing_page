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
    a.setAttribute("nav-to", section.getAttribute("id"));
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

// Scroll to anchor ID using scrollTO event and set active class for section and link
document.addEventListener("scroll", ()=> {
    sections.forEach(section => {
        if(isInViewport(section)) {
            //clear active class from all links and sections
            document.querySelectorAll(`a.menu__link.active-link`)
                .forEach(link => link.classList.remove("active-link"));

            document.querySelectorAll(`a.menu__link.your-active-class`)
                .forEach(section => section.classList.remove("your-active-class"));

            // add active class to section & link
            document.querySelector(`a.menu__link[nav-to=${section.getAttribute("id")}]`)
                .classList.add("active-link");

            section.classList.add("your-active-class");

        }
    })
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
navToSectionByLink = (link) => {
    const dataNav = link.textContent;
    const section = document.querySelector(`section[data-nav="${dataNav}"]`);
    section.scrollIntoView({behavior: 'smooth'});
}

document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll("a.menu__link");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            navToSectionByLink(link);
        });
    });

    const toTopLink = document.querySelector("#to-top-link");
    toTopLink.addEventListener("click", ()=> {
        document.querySelector("body main header h1").scrollIntoView({behavior: 'smooth'});
    })
})


