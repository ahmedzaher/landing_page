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
const headerHeight = document.querySelector("header").offsetHeight;
const screenHeight = (window.innerHeight || document.documentElement.clientHeight);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const fullyViewed = rect.top + headerHeight >= 0 && rect.bottom + headerHeight <= screenHeight;

    const partuallyViewed = rect.top <= screenHeight && rect.bottom  >= headerHeight;

    return  fullyViewed || partuallyViewed;
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
    section.classList.remove("active-section");
    if(isInViewport(section)) {
        section.classList.add("active-section")
    }
});


/**
 * End Main Functions
 * Begin Events
 * 
*/
// Add active class to current section and it's link and clear the others
document.addEventListener("scroll", ()=> {
    for(let i = 0; i < sections.length; i++ ) {
        if(isInViewport(sections[i])) {
            //clear active class from all links and sections
            document.querySelectorAll(`a.menu__link.active-link`)
                .forEach(link => link.classList.remove("active-link"));

            document.querySelectorAll(`section.active-section`)
                .forEach(section => section.classList.remove("active-section"));

            // add active class to section & link
            document.querySelector(`a.menu__link[nav-to=${sections[i].getAttribute("id")}]`)
                .classList.add("active-link");
            sections[i].classList.add("active-section");
            break;
        }
        
    }
});


// Scroll to section on link click
navToSectionByLink = (link) => {
    const dataNav = link.textContent;
    const section = document.querySelector(`section[data-nav="${dataNav}"]`); 
    section.scrollIntoView({behavior: 'smooth', block: 'center'});
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


