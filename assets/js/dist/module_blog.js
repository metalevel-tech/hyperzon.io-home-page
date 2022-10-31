/**
 * Hyperzon.io blog.js
 */
class Blog {
  constructor() {
    // Apply singleton pattern
    if (this.constructor.instance) {
      this.constructor.instance.init();
      return;
    }

    this.constructor.instance = this;
    this.selectors = {
      blogGrid: "#blog-section .blog-grid",
      blogPosts: ".blog-post-wrapper"
    };
    this.postMaxScale_x3 = 1.1;
    this.postMaxScale_x2 = 1.2;
    this.postMaxScale_x1 = 1.3;
    this.scaleBreakPt_x3 = 1366;
    this.scaleBreakPt_x2 = 1024;
    this.scaleBreakPt_x1 = 768;
    this.grid = null;
    this.posts = [];
    this.init(); // console.log("Blog instance created");
  } // Apply singleton pattern


  static instance = null;
  static attached = false;

  init() {
    if (!this.selectGrig()) return;
    if (!this.selectPosts()) return;
    this.readGridProps();
    this.scalePosts();
    this.initEventHandlers(); // console.log("Blog init");
  }

  selectGrig() {
    this.grid = document.querySelector(this.selectors.blogGrid);
    return this.grid ? true : false;
  }

  selectPosts() {
    this.posts = Array.from(this.grid.querySelectorAll(this.selectors.blogPosts));
    return this.grid ? true : false;
  }

  readGridProps() {
    if (!this.shouldRun()) return; // Add some properties to the grid node, which will be used later for calculations

    this.grid.defaultPostHeight = parseInt(this.grid.dataset.defaultPostHeight, 10);
    this.grid.defaultPostWidth = parseInt(this.grid.dataset.defaultPostWidth, 10);
    this.grid.defaultGridVMargin = parseInt(window.getComputedStyle(this.grid).marginTop, 10);
  }

  initEventHandlers() {
    if (!this.shouldRun()) return;

    if (!this.constructor.attached) {
      this.constructor.attached = true;
      window.addEventListener("resize", this.scalePosts.bind(this));
      window.addEventListener("orientationChange", this.scalePosts.bind(this));
    } // // Handle click on the "Read more" link
    // $('.blog-post .read-more').on('click', function (e) {
    //     e.preventDefault();
    //     $(this).closest('.blog-post').find('.blog-post-content').slideToggle();
    // });

  }

  scalePosts() {
    if (!this.shouldRun()) return; // Get default post width and height from the grid's data set

    const defaultPostWidth = parseInt(this.grid.defaultPostWidth, 10);
    const defaultPostHeight = parseInt(this.grid.defaultPostHeight, 10);
    const defaultGridVMargin = parseInt(this.grid.defaultGridVMargin, 10);
    const grid = this.grid;
    this.posts.forEach((post, index, postsArr) => {
      // Get the current post width and calculate scale factor
      const postWidth = post.offsetWidth;
      let scaleFactor = parseFloat(postWidth / defaultPostWidth).toFixed(2); // Apply the limit to the scale factor

      if (window.innerWidth < this.scaleBreakPt_x1) {
        scaleFactor = Math.min(scaleFactor, this.postMaxScale_x1);
      } else if (window.innerWidth < this.scaleBreakPt_x2) {
        scaleFactor = Math.min(scaleFactor, this.postMaxScale_x2);
      } else {
        scaleFactor = Math.min(scaleFactor, this.postMaxScale_x3);
      } // Calculate and apply a vertical compensation of the post wrapper


      const postHeight = parseInt(defaultPostHeight * scaleFactor, 10);
      post.style.height = `${postHeight}px`; // Apply scale to the blog-post-scalable content container

      const scalablePost = post.querySelector(".blog-post-scalable");
      scalablePost.style.transform = `scale(${scaleFactor})`; // Calculate and apply vertical compensation to the blog grid

      if (index === postsArr.length - 1) {
        const gridVerticalCompensation = parseInt((postHeight - defaultPostHeight) / 2, 10);

        if (gridVerticalCompensation < 0) {
          const calculatedMarginTop = defaultGridVMargin + gridVerticalCompensation;

          if (calculatedMarginTop >= 0) {
            grid.style.marginTop = `${calculatedMarginTop}px`;
          } else {
            grid.style.marginTop = "0";
          }
        } else {
          grid.style.marginTop = `${defaultGridVMargin}px`;
        }
      }
    });
  }

  shouldRun() {
    return this.grid && this.posts ? true : false;
  }

}

function blogInit() {
  // Singleton instance in use
  return new Blog();
}

export { blogInit };