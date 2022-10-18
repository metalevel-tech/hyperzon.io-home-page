/**
 * Hyperzon.io blog.js
 */
class Blog {
    constructor(selectors = { blogGrid, blogPosts }) {
        this.selectors = selectors;
        this.postMaxScale = 1.1;

        this.grid = null;
        this.posts = null;

        this.init();
    }

    init() {
        // Query DOM for blog grid, and return if not found
        this.grid = document.querySelector(this.selectors.blogGrid)
        if (!this.grid) return;


        // Query DOM for blog posts. This should be method!
        this.posts = Array.from(this.grid.querySelectorAll(this.selectors.blogPosts));

        // Scale posts
        this.initEventHandlers();
    }

    initEventHandlers() {
        window.addEventListener("resize", (e) => {
            this.scalePosts();
        });

        // Document ready event listener
        // document.addEventListener("DOMContentLoaded", (e) => {
        //     this.scalePosts();
        // });

        // // Handle click on the "Read more" link
        // $('.blog-post .read-more').on('click', function (e) {
        //     e.preventDefault();
        //     $(this).closest('.blog-post').find('.blog-post-content').slideToggle();
        // });
    }

    scalePosts() {
        // Get default post width and height from the grid's data set
        const postDefaultWidth = this.grid.dataset.postDefaultWidth;
        const postDefaultHeight = this.grid.dataset.postDefaultHeight;

        // console.log(postDefaultWidth, postDefaultHeight);

        this.posts.forEach((post) => {
            // Get current post width
            const postWidth = post.offsetWidth;
            let scaleFactor = postWidth / postDefaultWidth;

            // Apply the limit to the scale factor
            if (scaleFactor > this.postMaxScale) {
                scaleFactor = this.postMaxScale;
            }

            // Calculate vertical compensation
            const postHeight = postDefaultHeight * scaleFactor;
            post.style.height = `${postHeight}px`;

            // CSS scale the scalable post
            const scalablePost = post.querySelector(".blog-post-scalable");
            scalablePost.style.transform = `scale(${scaleFactor})`;
        });
    }

}


function blogInit() {
    const nodesSelectors = {
        blogGrid: "#blog-section.blog-grid",
        blogPosts: ".blog-post-wrapper",
    };
    const blog = new Blog(nodesSelectors);

    if (blog.posts) {
        blog.scalePosts();
    }
}

export { blogInit };
