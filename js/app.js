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
var unorderedList = document.createElement('ul');

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
function main() {
    unorderedList.setAttribute('id', 'navbar__list');

    const navEle = document.querySelector('nav');

    for(let i = 0; i < sectionList.length; i++){
        const item = sectionList[i];
        var listItem = document.createElement('li');
        listItem.className = 'menu__link';
        listItem.textContent = item.getAttribute('data-nav');

        unorderedList.appendChild(listItem);
    }
    navEle.appendChild(unorderedList);
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

// Scroll to section on link click

// Set sections as active
window.addEventListener('load', main);