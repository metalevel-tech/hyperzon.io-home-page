function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function () { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function (obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function (skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function () { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function (exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function (type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function (record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function (finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function (tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function (iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

/**
 * Hyperzon.io main.js, miscellaneous functions
 */
function closeInfoModal() {
  $.featherlight.close();
}

function openCookiesModal() {
  $.featherlight(base_url + "info/cookies");
}

function resizeWindow() {
  $(".measure").css("height", window.innerHeight);
}

resizeWindow();
$(window).on("resize", function () {
  resizeWindow();
});
/**
 * Book a call button handler
 */

(function () {
  document.querySelectorAll(".js-book-a-call").forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      Calendly.initPopupWidget({
        url: "https://calendly.com/hyperzon/30-minute-call-website?hide_gdpr_banner=1"
      });
    });
  });
})();
/**
 * This is the AJAX script for the main menu.
 * It replaces the content of <div id="body-content">,
 * without page reload.
 */


(function () {
  const nodes = {
    content: document.getElementById("body-content"),
    mainMenu: document.getElementById("main-menu"),
    menuItems: document.querySelectorAll("a.main-menu-item"),
    mobileMenuButton: document.querySelector("#mobile-menu-button .button-3x"),
    galleryOverlay: document.getElementById("gallery-preview-overlay"),
    galleryContent: document.getElementById("gallery-preview-overlay").querySelector(".gallery-preview-content"),
    galleryButtonClose: document.getElementById("gallery-preview-overlay").querySelector(".button-3x"),
    galleryButtonNext: document.getElementById("gallery-preview-overlay").querySelector(".gallery-preview-next"),
    galleryButtonBack: document.getElementById("gallery-preview-overlay").querySelector(".gallery-preview-back")
  }; // Add class .white{position:sticky;} to the main menu when the page is scrolled.
  // Within this condition we should create back to top button to pop up.

  function addStickyClass() {
    if (window.pageYOffset >= 56 && !nodes.mainMenu.classList.contains("sticky")) {
      nodes.mainMenu.classList.add("sticky");
    } else if (window.pageYOffset < 36 && nodes.mainMenu.classList.contains("sticky")) {
      nodes.mainMenu.classList.remove("sticky");
    }
  }

  addStickyClass();
  window.addEventListener("scroll", function () {
    addStickyClass();
  }); // Handle the mobile menu

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
  }); // These functions are defined in the code below,
  // but we need run them much times them together,
  // especially when manipulating the menu
  // and the browser's states.

  function interfaceSetUp() {
    testimonialsSlider();
    latestBlogPostsSlider();
    videoLoader();
    videoGalleryHandler();
    imageGalleryHandler();
    mobileMenuClose();
  } // Process single menu element


  const changeMenuElementFunctionality = e => {
    var item, scrollFromTop, response, html, bodyClassList, bodyClass;
    return _regeneratorRuntime().async(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault(); // const item = e.currentTarget.parentNode.querySelector("a");

          item = e.currentTarget; // Break if it is the current selected item

          if (!item.classList.contains("selected-item")) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return");

        case 4:
          // Scroll to the beginning of the view or to the top of the page
          // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
          scrollFromTop = document.body.scrollTop || document.documentElement.scrollTop;

          if (scrollFromTop > 480) {
            nodes.content.scrollIntoView({
              behavior: "auto"
            });
          } else {
            window.scrollTo({
              top: 0
            });
          } // The actual change of the page content


          _context.prev = 6;
          _context.next = 9;
          return _regeneratorRuntime().awrap(fetch(`${item.href}?content`));

        case 9:
          response = _context.sent;

          if (response.ok) {
            _context.next = 12;
            break;
          }

          throw new Error(`Network error: ${response}`);

        case 12:
          _context.next = 14;
          return _regeneratorRuntime().awrap(response.text());

        case 14:
          html = _context.sent;
          // Change the <div id="body-content"> content
          nodes.content.innerHTML = html; // Change the relevant body class

          bodyClassList = [...document.body.classList]; //  https://stackoverflow.com/a/33121880/6543935

          for (bodyClass of [...new Set(bodyClasses)]) {
            bodyClassList = bodyClassList.filter(value => bodyClass != value);
          }

          bodyClassList.push(hrefToClass(item));
          bodyClassList = bodyClassList.join(" ").replace(/index.php\s*/, "");
          document.body.className = bodyClassList; // Find the "current active" menu item and remove the class

          nodes.menuItems.forEach(node => {
            node.classList.remove("selected-item");

            if (node.href === item.href) {
              node.classList.add("selected-item");
            }
          }); // Run the sliders scripts,
          // see the function definitions below

          interfaceSetUp(); // Change the URI

          window.history.pushState({
            "html": html,
            "pageTitle": document.title,
            "bodyClassList": bodyClassList,
            "mainMenu": nodes.mainMenu.innerHTML
          }, "", item.href); // detect the back/forward button navigation

          window.onpopstate = function (e) {
            if (e.state) {
              nodes.content.innerHTML = e.state.html;
              nodes.mainMenu.innerHTML = e.state.mainMenu;
              document.title = e.state.pageTitle;
              document.body.className = e.state.bodyClassList;
              interfaceSetUp();
            }
          };

          _context.next = 30;
          break;

        case 27:
          _context.prev = 27;
          _context.t0 = _context["catch"](6);
          console.error(`Error in the main menu function: ${_context.t0.message}`);

        case 30:
        case "end":
          return _context.stop();
      }
    }, null, null, [[6, 27]], Promise);
  }; // Helper function to convert href of menu item to body class


  function hrefToClass(element) {
    return element.getAttribute("href").replace(/^\/|\/$/g, "");
  } // Array of the possible body classes, that will be filed by the


  const bodyClasses = []; // The main trigger of the menu processing,
  // Process the menu elements

  nodes.menuItems.forEach(item => {
    // console.log(item);
    bodyClasses.push(hrefToClass(item));
    item.addEventListener("click", changeMenuElementFunctionality);
  }); // Trigger the initial page state

  window.addEventListener("load", function () {
    // Handle the case when URI is index.php -> home
    setTimeout(function () {
      const bodyClasses = [...document.body.classList];

      if (bodyClasses.indexOf("index.php") > -1 || bodyClasses.indexOf("home") > -1) {
        // nodes.homeButton.click();
        document.body.classList.replace("index.php", "home");
        document.querySelector(".main-menu__logo a.main-menu-item").classList.add("selected-item"); // Change the URI

        window.history.pushState("", "", "home"); // detect the back/forward button navigation

        window.onpopstate = function (e) {
          if (e.state) {
            nodes.content.innerHTML = e.state.html;
            document.title = e.state.pageTitle;
          }
        };
      }
    }, 100);
    interfaceSetUp();
  });
  /**
   * @ includes/Testimonials.php
   */

  function testimonialsSlider() {
    setTimeout(function () {
      try {
        $(".testimonials__slider").slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          autoplay: false,
          autoplaySpeed: 5000,
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }]
        });
      } catch (error) {}
    }, 50);
  }
  /**
   * @ includes/BlogPostsLatest.php
   */


  function latestBlogPostsSlider() {
    setTimeout(function () {
      $(".latest-blog-posts__grid").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            infinite: true,
            centerMode: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }]
      });
      $(".blog__single").on("mouseenter", function (e) {
        let clip_path_id = $(this).attr("data-clip");
        $(this).addClass("active");
        let morphing = anime({
          targets: "#svgPath-" + clip_path_id + " path",
          d: [{
            value: "M 1.021 0.979 c 0.204 0.012 -0.031 -0.548 0.027 -0.623 c 0.056 -0.177 0.012 -0.201 0.015 -0.291 c -0.06 -0.182 -0.097 -0.179 -0.631 -0.175 C 0.255 -0.124 -0.06 -0.186 -0.113 -0.072 C -0.153 0.012 -0.201 0.955 -0.08 0.97 s 0.437 -0.015 0.784 -0 Z"
          }],
          duration: 2000,
          easing: "easeInOutSine",
          loop: false
        });
      });
      $(".blog__single").on("mouseleave", function (e) {
        let clip_path_id = $(this).attr("data-clip");
        $(this).addClass("active");
        let morphing = anime({
          targets: "#svgPath-" + clip_path_id + " path",
          d: [{
            value: "M 0.784 0.987 c 0.254 -0.009 0.274 -0.441 0.266 -0.578 c 0.092 -0.073 0.05 -0.052 0.017 -0.153 c -0.06 -0.182 -0.187 -0.155 -0.336 -0.231 C 0.464 -0.048 0.274 0.091 0.198 0.217 C -0.002 0.49 0.047 0.897 0.227 0.963 s 0.288 0.003 0.416 0.014 Z"
          }],
          duration: 2000,
          easing: "easeInOutSine",
          loop: false
        });
      });
    }, 50);
  }
  /**
   * @author    Spas Z. Spasov <spas.z.spasov@metalevel.tech>
   * @copyright 2022 Spas Z. Spasov
   * @license   https://www.gnu.org/licenses/gpl-3.0.html GNU General Public License, version 3 (or later)
   * @home      https://wiki.metalevel.tech/wiki/Template:Media
   *
   * @refs      https://help.vimeo.com/hc/en-us/articles/360001494447-Using-Player-Parameters
   *            https://www.delftstack.com/howto/javascript/iframe-onload/
   *            https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   *            https://stackoverflow.com/questions/51689010/vimeo-iframe-play-pause-out-of-viewport
   *            https://poselab.com/en/blog/vimeo-javascript-player-api/
   */


  function videoLoader() {
    const videoNodes = document.querySelectorAll(".video-container.vimeo-embed"); // Define fadeout effect for the splash image

    const fadeOut = {
      "effect": [{
        opacity: "1",
        filter: "blur(1px)",
        transform: "scale(1.05)"
      }, {
        opacity: "0",
        filter: "blur(100px)",
        transform: "scale(2)"
      }],
      "timing": {
        duration: 1000,
        iterations: 1,
        fill: "forwards"
      }
    }; // Process each video container on the page

    videoNodes.forEach(function (node) {
      const videoId = node.dataset.videoId;
      const videoTitle = node.dataset.videoTitle;
      const videoAppId = node.dataset.videoAppId;
      createVideoPlayer(node, videoId, videoTitle, videoAppId, 0);
    });

    function createVideoPlayer(node, videoId, videoTitle, videoAppId, autoplay = 1) {
      function embedVideo() {
        if (node.querySelector("iframe.video-embed-iframe")) {
          // While we do not save window state of the video container,
          // we never fall in this condition but it is good to have it.
          fadeoutSplashImage(50);
        } else {
          const iframe = generateIframe();
          node.appendChild(iframe);
          iframe.addEventListener("load", function () {
            fadeoutSplashImage(350);
          });
        } // Remove the event listeners!


        document.removeEventListener("scroll", autoEmbedVideo);
        window.removeEventListener("resize", autoEmbedVideo);
        window.removeEventListener("orientationChange", autoEmbedVideo);
        node.removeEventListener("click", embedVideo);
      }

      function autoEmbedVideo() {
        if (isFullyVisible(node, 100)) embedVideo();
      }

      const splashImg = node.querySelector("img");

      function fadeoutSplashImage(timeout) {
        setTimeout(function () {
          // Apply fade out effect to the splash image
          splashImg.animate(fadeOut.effect, fadeOut.timing).finished.then(animate => {
            splashImg.remove();
          }).catch(error => {
            throw new Error(`Animate error: ${error}`);
          });
        }, timeout);
      }

      function generateIframe() {
        const iframe = document.createElement("iframe");
        iframe.className = "video-embed-iframe";
        iframe.setAttribute("badge", "0");
        iframe.setAttribute("autopause", "0");
        iframe.setAttribute("app_id", videoAppId);
        iframe.setAttribute("player_id", "0");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture"); // iFrame.setAttribute("allowfullscreen", "");

        iframe.setAttribute("mozallowfullscreen", "");
        iframe.setAttribute("webkitallowfullscreen", "");
        iframe.setAttribute("scrolling", "no");
        iframe.setAttribute("src", `https://player.vimeo.com/video/${videoId}?autoplay=${autoplay}&portrait=0&title=0&pip=1&byline=0&title=0`);
        iframe.setAttribute("allow", "autoplay");
        iframe.setAttribute("title", videoTitle);
        return iframe;
      }

      document.addEventListener("scroll", autoEmbedVideo);
      window.addEventListener("resize", autoEmbedVideo);
      window.addEventListener("orientationChange", autoEmbedVideo);
      autoEmbedVideo(); // in cast it is already on the viewport

      node.addEventListener("click", embedVideo);
    }
  }
  /**
   * Detect does an element is visible
   * Ref: https://stackoverflow.com/a/125106/6543935
   * @param {*} node
   * @returns boolean
   */


  function isPartVisible(node) {
    let top = node.offsetTop;
    let left = node.offsetLeft;
    let width = node.offsetWidth;
    let height = node.offsetHeight;

    while (node.offsetParent) {
      node = node.offsetParent;
      top += node.offsetTop;
      left += node.offsetLeft;
    }

    return top < window.pageYOffset + window.innerHeight && left < window.pageXOffset + window.innerWidth && top + height > window.pageYOffset && left + width > window.pageXOffset;
  }

  function isFullyVisible(node, verticalAdjustment = 0) {
    let top = node.offsetTop;
    let left = node.offsetLeft;
    let width = node.offsetWidth;
    let height = node.offsetHeight;

    while (node.offsetParent) {
      node = node.offsetParent;
      top += node.offsetTop;
      left += node.offsetLeft;
    }

    return top >= window.pageYOffset && left >= window.pageXOffset && top + height <= window.pageYOffset + window.innerHeight + verticalAdjustment && left + width <= window.pageXOffset + window.innerWidth;
  }
  /**
   * Gallery Handler scripts begin
   */
  // Gallery accumulator class, used by the gallery handlers below
  // The following functions could be methods of this class


  class galleryUrlArray {
    constructor(current = false, list = []) {
      this.current = current;
      this.list = list;
    }

    findNext() {
      const index = this.list.indexOf(this.current);
      if (index === -1) return false;
      return this.list[index + 1] || this.list[0];
    }

    findBack() {
      const index = this.list.indexOf(this.current);
      if (index === -1) return false;
      return this.list[index - 1] || this.list[this.list.length - 1];
    }

  } // Function to clear the gallery overlay


  function galleryOverlayClear() {
    // Clear videos
    nodes.galleryOverlay.querySelectorAll("video").forEach(function (video) {
      try {
        video.pause();
        video.load();
        video.src = "";
        video.remove();
      } catch (error) {
        console.log(error);
      }
    });
    nodes.galleryButtonBack.removeEventListener("click", changeVideo);
    nodes.galleryButtonNext.removeEventListener("click", changeVideo);
    window.removeEventListener("resize", setHeight_16_9); // Clear images

    nodes.galleryOverlay.querySelectorAll("img").forEach(function (image) {
      try {
        image.src = "";
        image.remove();
      } catch (error) {
        console.log(error);
      }
    });
    nodes.galleryButtonBack.removeEventListener("click", changeImage);
    nodes.galleryButtonNext.removeEventListener("click", changeImage); // Clear additional classes from DOM

    document.body.classList.remove("no-scroll");
    nodes.galleryOverlay.classList.remove("active");
    nodes.galleryButtonClose.classList.remove("active");
    nodes.galleryButtonNext.classList.remove("active");
    nodes.galleryButtonBack.classList.remove("active");
  } // Function to change the image within the gallery overlay


  function changeImage(currentGallery, forward = true) {
    const imagePreview = nodes.galleryContent.querySelector("img.image-preview");
    if (!imagePreview) return false;
    const newImage = forward ? currentGallery.findNext() : currentGallery.findBack();
    if (!newImage) return false;
    currentGallery.current = newImage;
    imagePreview.classList.add("static");
    setTimeout(function () {
      imagePreview.setAttribute("src", "");
      setTimeout(function () {
        imagePreview.setAttribute("src", newImage);
        imagePreview.classList.remove("static");
      }, 150);
    }, 150);
  } // Function to change the video within the gallery overlay


  function changeVideo(currentGallery, forward = true) {
    const videoPlayer = nodes.galleryContent.querySelector("video.video-preview");
    if (!videoPlayer) return false;
    const newVideo = forward ? currentGallery.findNext() : currentGallery.findBack();
    if (!newVideo) return false;
    currentGallery.current = newVideo; // videoPlayer.classList.add("static");
    // videoPlayer.pause();

    videoPlayer.src = newVideo; // setTimeout(function () {
    //     videoPlayer.classList.remove("static");
    // }, 110);
  } // Function to open the gallery overlay and prepare for image preview


  function overlaySetUp_Image(image, currentGallery) {
    galleryOverlayClear(); // actually this is the anchor <a> that holds link to the HQ image

    currentGallery.current = image.href;
    const imagePreview = document.createElement("img");
    imagePreview.setAttribute("class", "image-preview");
    imagePreview.setAttribute("src", currentGallery.current); // imageContainer.appendChild(imagePreview);

    nodes.galleryContent.appendChild(imagePreview);
  } // Function to open the gallery overlay and prepare for video preview


  function overlaySetUp_Video(video, currentGallery) {
    galleryOverlayClear();
    currentGallery.current = video.querySelector("source").src;
    const videoPlayer = document.createElement("video");
    videoPlayer.setAttribute("autoplay", "");
    videoPlayer.setAttribute("controls", "");
    videoPlayer.setAttribute("playsinline", "");
    videoPlayer.setAttribute("muted", "");
    videoPlayer.setAttribute("class", "video-preview"); // videoPlayer.setAttribute("loop", "");  // auto change is not possible with loop

    videoPlayer.volume = 0.4;
    videoPlayer.setAttribute("src", currentGallery.current);

    videoPlayer.onended = e => {
      // playNext(currentGallery)
      changeVideo(currentGallery, true);
    };

    nodes.galleryContent.appendChild(videoPlayer);
    setTimeout(function () {
      setHeight_16_9(videoPlayer);
    }, 100);
    window.addEventListener("resize", setHeight_16_9.bind(this, videoPlayer));
  } // Function to automatically set video height, based on width * 9/16


  function setHeight_16_9(node) {
    if (!node) return false;
    node.style.height = `${Math.floor(node.offsetWidth * 9 / 16 + 2)}px`; // `+ n` px to compensate the border width
  }
  /**
   * Image (Photo) Gallery handler
   * Little bit ugly solution but it works for now.
   */


  function imageGalleryHandler() {
    const imageGalleriesOnAPage = document.querySelectorAll(".image-gallery");
    if (!imageGalleriesOnAPage.length) return;
    imageGalleriesOnAPage.forEach(function (gallery) {
      const imageItemsList = [...gallery.querySelectorAll(".image-item")];
      const currentGallery = new galleryUrlArray(false, imageItemsList.map(item => item.href)); // Close the gallery Button functionality

      nodes.galleryButtonClose.addEventListener("click", function (e) {
        galleryOverlayClear();
      }); // Process each image in the gallery

      imageItemsList.forEach(image => {
        image.addEventListener("click", e => {
          e.preventDefault();
          galleryOverlayClear();
          const image = e.target;
          overlaySetUp_Image(image.closest(".image-item"), currentGallery);
          document.body.classList.add("no-scroll");
          nodes.galleryOverlay.classList.add("active");
          setTimeout(function () {
            nodes.galleryButtonClose.classList.add("active");
            nodes.galleryButtonNext.classList.add("active");
            nodes.galleryButtonBack.classList.add("active");
          }, 100);
          nodes.galleryButtonNext.addEventListener("click", changeImage.bind(this, currentGallery, true));
          nodes.galleryButtonBack.addEventListener("click", changeImage.bind(this, currentGallery, false));
        });
      });
    });
  }
  /**
   * Video Gallery handler
   * Little bit ugly solution but it works for now.
   */


  function videoGalleryHandler() {
    const videoGalleriesOnAPage = document.querySelectorAll(".video-gallery");
    if (!videoGalleriesOnAPage.length) return; // Process each video gallery on the page

    videoGalleriesOnAPage.forEach(gallery => {
      const videoItemsList = [...gallery.querySelectorAll(".video-item")];
      const currentGallery = new galleryUrlArray(false, videoItemsList.map(item => item.querySelector("source").src)); // Close the gallery Button functionality

      nodes.galleryButtonClose.addEventListener("click", function (e) {
        galleryOverlayClear();
      }); // Process each video in the gallery

      videoItemsList.forEach(video => {
        video.addEventListener("mouseenter", function () {
          try {
            video.play();
          } catch (error) {
            console.log(error);
          }
        });
        video.addEventListener("mouseleave", function () {
          try {
            video.pause();
          } catch (error) {
            console.log(error);
          }
        });
        video.addEventListener("click", e => {
          e.preventDefault();
          galleryOverlayClear();
          const video = e.target;
          overlaySetUp_Video(video, currentGallery);
          document.body.classList.add("no-scroll");
          nodes.galleryOverlay.classList.add("active");
          setTimeout(function () {
            nodes.galleryButtonClose.classList.add("active");
            nodes.galleryButtonNext.classList.add("active");
            nodes.galleryButtonBack.classList.add("active");
          }, 100);
          nodes.galleryButtonNext.addEventListener("click", changeVideo.bind(this, currentGallery, true));
          nodes.galleryButtonBack.addEventListener("click", changeVideo.bind(this, currentGallery, false));
        });
      });
    });
  }
})();
/**
 * Fix it and removes the PageSpeed Insight warning,
 * "Does not use passive listeners to improve scrolling performance" @jquery
 * Refs: https://stackoverflow.com/a/62177358/6543935
 */


jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchstart", handle, {
      passive: !ns.includes("noPreventDefault")
    });
  }
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchmove", handle, {
      passive: !ns.includes("noPreventDefault")
    });
  }
};
jQuery.event.special.wheel = {
  setup: function (_, ns, handle) {
    this.addEventListener("wheel", handle, {
      passive: true
    });
  }
};
jQuery.event.special.mousewheel = {
  setup: function (_, ns, handle) {
    this.addEventListener("mousewheel", handle, {
      passive: true
    });
  }
};