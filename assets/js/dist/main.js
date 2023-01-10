function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function () { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function (obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function (skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function () { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function (exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function (type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function (record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function (finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function (tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function (iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
import { blogInit } from "./module_blog.js";
import { vimeoLoader } from "./module_videoEmbed.js";
import { galleryHandler_Images, galleryHandler_PostPageImgs, galleryHandler_Videos, galleryHandler_Testimonials } from "./module_gallery.js";
import { bookACallHandler, latestBlogPostsSlider, hrefToClass, jQueryRemovePassiveListeners, heroCounter } from "./module_helpers.js";

/**
 * This is the Single page application (SPA) script for the main menu.
 * It replaces the content of <div id="body-content">,
 * without page reload.
 */
const nodes = {
  content: document.getElementById("body-content"),
  mainMenu: document.getElementById("main-menu"),
  menuItems: document.querySelectorAll("a.spa-menu-item:not(.spa-handled)"),
  mobileMenuButton: document.querySelector("#mobile-menu-button .button-3x"),
  scrollToTopButton: document.getElementById("scroll-to-top-button")
};

// Detect whether the browser is Safari or not
function browserDetect() {
  // const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isSafari = window.safari !== undefined;
  if (isSafari) {
    document.body.classList.add("browser-safari");
  } else {
    document.body.classList.add("browser-not-safari");
  }
}

// Array of the possible body classes, that will be used by the SPA functionality.
const bodyClasses = [];

// Add class .sticky {position:fixed} to the main menu when the page is scrolled.
// Detect the scroll direction and add class .scrolling-up or .scrolling-down
let lastScrollTop = 0;
function addStickyClass() {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollTop >= 56 && !nodes.mainMenu.classList.contains("sticky")) {
    nodes.mainMenu.classList.add("sticky");
  } else if (currentScrollTop < 36 && nodes.mainMenu.classList.contains("sticky")) {
    nodes.mainMenu.classList.remove("sticky");
  }
  nodes.mainMenu.classList.remove("scrolling-none");
  if (!document.body.classList.contains("no-scroll")) {
    if (currentScrollTop > lastScrollTop) {
      nodes.mainMenu.classList.remove("scrolling-up");
      nodes.mainMenu.classList.add("scrolling-down");
    } else {
      nodes.mainMenu.classList.remove("scrolling-down");
      nodes.mainMenu.classList.add("scrolling-up");
    }
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
}

// Handle scroll to top button
function scrollToTop() {
  nodes.scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
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

// Set the main menu functionality
function addSpaFuncToTheMenus() {
  nodes.menuItems.forEach(item => {
    bodyClasses.push(hrefToClass(item));
    item.classList.add("spa-handled");
    item.addEventListener("click", addSpaFuncToNavNode);
  });
}

// Scan the current page <div id="body-content"> for items like <a class="spa-menu-item">
// !!! Probably it is better to query all internal links, and add the SPA functionality to them.
function addSpaFuncToPageContent() {
  const spaMenuItems = nodes.content.querySelectorAll("#body-content a.spa-menu-item:not(.spa-handled)");
  spaMenuItems.forEach(item => {
    item.classList.add("spa-handled");
    item.addEventListener("click", addSpaFuncToNavNode);
  });
}

// These functions are executed at 
// each interaction with the main menu,
// and at the page load.
function interfaceSetUp(callFrom = 0) {
  latestBlogPostsSlider();
  vimeoLoader();
  galleryHandler_Testimonials();
  galleryHandler_Videos();
  galleryHandler_Images();
  galleryHandler_PostPageImgs();
  mobileMenuClose();
  blogInit();
  bookACallHandler();
  addSpaFuncToPageContent();

  // console.log(callFrom);
  nodes.mainMenu.classList.remove("scrolling-up");
  nodes.mainMenu.classList.remove("scrolling-down");
  nodes.mainMenu.classList.add("scrolling-none");
}

// Process single menu element (this is the main function)
const addSpaFuncToNavNode = e => {
  var item, scrollFromTop, response, html, bodyClassList, bodyClass;
  return _regeneratorRuntime().async(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        e.preventDefault();

        // const item = e.currentTarget.parentNode.querySelector("a");
        item = e.currentTarget; // Break if it is the current selected item
        if (!item.classList.contains("selected-item")) {
          _context.next = 4;
          break;
        }
        return _context.abrupt("return");
      case 4:
        // Scroll to the beginning of the view or to the top of the page
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
        // Ugly compensation of the main menu height
        // https://stackoverflow.com/questions/24665602/scrollintoview-scrolls-just-too-far
        scrollFromTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollFromTop > 480) {
          nodes.content.scrollIntoView(true, {
            behavior: "auto"
          });
          // Ugly compensation of the main menu height
          if (window.innerWidth <= 480) {
            window.scrollBy(0, -54);
          } else {
            window.scrollBy(0, -64);
          }
        } else {
          window.scrollTo({
            top: 0
          });
        }

        // The actual change of the page content
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
        nodes.content.innerHTML = html;

        // Change the relevant body class
        bodyClassList = [...document.body.classList]; //  https://stackoverflow.com/a/33121880/6543935
        for (bodyClass of [...new Set(bodyClasses)]) {
          bodyClassList = bodyClassList.filter(value => bodyClass != value);
        }
        bodyClassList.push(hrefToClass(item));
        bodyClassList = bodyClassList.join(" ").replace(/index.php\s*/, "");
        document.body.className = bodyClassList;

        // Find the "current active" menu item and remove the class
        nodes.menuItems.forEach(node => {
          node.classList.remove("selected-item");
          if (node.href === item.href) {
            node.classList.add("selected-item");
          }
        });

        // Evaluate the new page content
        setTimeout(() => {
          interfaceSetUp(1);
        }, 100);

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

            // Evaluate the page content restored from the history
            setTimeout(() => {
              interfaceSetUp(1);
            }, 100);
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
};

// Trigger the initial page state
window.addEventListener("load", function () {
  // Set the main menu functionality
  addSpaFuncToTheMenus();

  // Handle the case when URI is "/" or "index.php"
  setTimeout(function () {
    const bodyClasses = [...document.body.classList];
    if (bodyClasses.indexOf("index.php") > -1 || bodyClasses.indexOf("home") > -1) {
      // Set the "home" class to the body
      document.body.classList.replace("index.php", "home");
      // Set the "home" menu item to the active state
      document.querySelector(".main-menu__logo a.spa-menu-item").classList.add("selected-item");
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
  browserDetect();
  interfaceSetUp(3);
  addStickyClass();
  scrollToTop();
  heroCounter();
  window.addEventListener("scroll", function () {
    addStickyClass();
  });
  setTimeout(() => {
    jQueryRemovePassiveListeners();
  }, 1000);
});