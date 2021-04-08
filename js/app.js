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
const sectionList = document.getElementsByTagName('section');
var navbar = document.createElement('ul');
const numberOfSections = sectionList.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function findActiveElement(){
    for(let i = 0; i < numberOfSections; i++){
        const currElement = sectionList[i];
        if(isInViewport(currElement) && currElement.className !== "your-active-class"){
            currElement.className = "your-active-class";
            break;
        }
        else
            currElement.classList.remove('your-active-class');
    }
}

function scrollTO(elementName){
    navbar.addEventListener('click', function(event){
        const clickedItem = document.querySelector(`[data-nav = "${event.target.textContent}"]`);
        clickedItem.scrollIntoView({behavior: "smooth"});
    })
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function main() {
    navbar.setAttribute('id', 'navbar__list');

    const navEle = document.querySelector('nav');

    for(let i = 0; i < numberOfSections; i++){
        const item = sectionList[i];
        var listItem = document.createElement('li');
        listItem.className = 'menu__link';
        listItem.textContent = item.getAttribute('data-nav');

        navbar.appendChild(listItem);
    }
    navEle.appendChild(navbar);
};

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
window.addEventListener('load', main);
// Scroll to section on link click
scrollTO();
// Set sections as active

window.addEventListener('scroll', findActiveElement);