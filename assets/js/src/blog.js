/**
 * Hyperzon.io blog.js
 */
(function () {
    const nodes = {
        content: document.getElementById("body-content"),
        mainMenu: document.getElementById("main-menu"),
        menuItems: document.querySelectorAll("a.main-menu-item"),
        mobileMenuButton: document.querySelector("#mobile-menu-button .button-3x"),

        blogGrid: document.querySelector("#blog-section.blog-grid"),
        blogGridPosts: document.querySelectorAll(".blog-post"),
    };

    console.log(nodes.blogGrid);

    nodes.blogGridPosts.forEach((post) => {
        post.addEventListener("click", (e) => {
            console.log(e.currentTarget);
        });
        
        // post.addEventListener("click", (e) => {
        //     console.log(e.currentTarget);
        // });
    });

    // Resize Post cards within the Blog page @Scale/Transform
    function setHeight_16_9(node) {
        if (!node) return false;
        node.style.height = `${Math.floor((node.offsetWidth * 9 / 16) + 2)}px`;
        // `+ n` px to compensate the border width
    }
})();
