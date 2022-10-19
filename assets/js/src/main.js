import {
    blogInit
} from "./module_blog.js";

import {
    vimeoLoader
} from "./module_videoEmbed.js";

import {
    imageGalleryHandler,
    videoGalleryHandler
} from "./module_gallery.js";

import {
    bookACallHandler, 
    testimonialsSlider, 
    latestBlogPostsSlider,
    hrefToClass,
    jQueryRemovePassiveListeners,
    heroCounter
} from "./module_helpers.js";

/**
 * This is the AJAX script for the main menu.
 * It replaces the content of <div id="body-content">,
 * without page reload.
 */
const nodes = {
    content: document.getElementById("body-content"),
    mainMenu: document.getElementById("main-menu"),
    menuItems: document.querySelectorAll("a.main-menu-item"),
    mobileMenuButton: document.querySelector("#mobile-menu-button .button-3x")
};

// Add class .white{position:sticky;} to the main menu when the page is scrolled.
// Within this condition we should create back to top button to pop up.
function addStickyClass() {
    if (window.pageYOffset >= 56 && !nodes.mainMenu.classList.contains("sticky")) {
        nodes.mainMenu.classList.add("sticky");
    } else if (window.pageYOffset < 36 && nodes.mainMenu.classList.contains("sticky")) {
        nodes.mainMenu.classList.remove("sticky");
    }
}

// Handle the mobile menu
function mobileMenuOpen() {
    nodes.mobileMenuButton.classList.add("active");
    nodes.mainMenu.classList.add("mobile-menu");
    document.body.classList.add("no-scroll");
}

function mobileMenuClose() {
    nodes.mobileMenuButton.classList.remove("active");
    nodes.mainMenu.classList.remove("mobile-menu");
    document.body.classList.remove("no-scroll");
}

nodes.mobileMenuButton.addEventListener("click", function (e) {
    e.preventDefault();

    if (nodes.mobileMenuButton.classList.contains("active")) {
        mobileMenuClose();
    } else {
        mobileMenuOpen();
    }
});

// These functions are executed at 
// each interaction with the main menu,
// and at the page load.
function interfaceSetUp(callFrom = 0) {
    testimonialsSlider();
    latestBlogPostsSlider();
    vimeoLoader();
    videoGalleryHandler();
    imageGalleryHandler();
    mobileMenuClose();
    blogInit();
    bookACallHandler();

    // console.log(callFrom);
}

// Process single menu element
const changeMenuElementFunctionality = async (e) => {
    e.preventDefault();

    // const item = e.currentTarget.parentNode.querySelector("a");
    const item = e.currentTarget;

    // Break if it is the current selected item
    if (item.classList.contains("selected-item")) {
        return;
    }

    // Scroll to the beginning of the view or to the top of the page
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    const scrollFromTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollFromTop > 480) {
        nodes.content.scrollIntoView({ behavior: "auto" });
    } else {
        window.scrollTo({ top: 0 });
    }

    // The actual change of the page content
    try {
        // Fetch the page content
        const response = await fetch(`${item.href}?content`);
        if (!response.ok) throw new Error(`Network error: ${response}`);
        const html = await response.text();

        // Change the <div id="body-content"> content
        nodes.content.innerHTML = html;

        // Change the relevant body class
        let bodyClassList = [...document.body.classList];

        //  https://stackoverflow.com/a/33121880/6543935
        for (const bodyClass of [...new Set(bodyClasses)]) {
            bodyClassList = bodyClassList.filter(value => bodyClass != value);
        }

        bodyClassList.push(hrefToClass(item));
        bodyClassList = bodyClassList.join(" ").replace(/index.php\s*/, "");
        document.body.className = bodyClassList;

        // Find the "current active" menu item and remove the class
        nodes.menuItems.forEach((node) => {
            node.classList.remove("selected-item");
            if (node.href === item.href) {
                node.classList.add("selected-item");
            }
        });

        // Run the sliders scripts,
        // see the function definitions below
        interfaceSetUp(1);

        // Change the URI
        window.history.pushState({
            "html": html,
            "pageTitle": document.title,
            "bodyClassList": bodyClassList,
            "mainMenu": nodes.mainMenu.innerHTML
        }, "", item.href);

        // detect the back/forward button navigation
        window.onpopstate = function (e) {
            if (e.state) {
                nodes.content.innerHTML = e.state.html;
                nodes.mainMenu.innerHTML = e.state.mainMenu;
                document.title = e.state.pageTitle;
                document.body.className = e.state.bodyClassList;
                interfaceSetUp(2);
            }
        };
    }
    catch (error) {
        console.error(`Error in the main menu function: ${error.message}`);
    }
}

// Array of the possible body classes, that will be filed by the
const bodyClasses = [];

// Set the main menu functionality
nodes.menuItems.forEach(item => {
    // console.log(item);
    bodyClasses.push(hrefToClass(item));
    item.addEventListener("click", changeMenuElementFunctionality);
});

// Trigger the initial page state
window.addEventListener("load", function () {
    // Handle the case when URI is "/" or "index.php"
    setTimeout(function () {
        const bodyClasses = [...document.body.classList];

        if (bodyClasses.indexOf("index.php") > -1 || bodyClasses.indexOf("home") > -1) {
            // Set the "home" class to the body
            document.body.classList.replace("index.php", "home");
            // Set the "home" menu item to the active state
            document.querySelector(".main-menu__logo a.main-menu-item").classList.add("selected-item");
            // Change the URI
            window.history.pushState("", "", "home");
            // detect the back/forward button navigation
            window.onpopstate = function (e) {
                if (e.state) {
                    nodes.content.innerHTML = e.state.html;
                    document.title = e.state.pageTitle;
                }
            };
        }
    }, 100);

    interfaceSetUp(3);
    addStickyClass();
    heroCounter();
    
    window.addEventListener("scroll", function () {
        addStickyClass();
    });

    setTimeout(() => {
        jQueryRemovePassiveListeners();
    }, 1000);
});
