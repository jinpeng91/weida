;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-yonghu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M392.446 594.126c0 36.209 0 71.029 0 100.113 10.907-8.734 24.472-18.994 37.343-30.061 14.254-12.255 28.28-17.686 48.654-13.782 22.018 4.22 46.101 4.263 68.107 0.024 20.356-3.919 34.693 1.088 48.653 13.694 12.572 11.35 25.151 22.691 38.68 34.897 0-34.307 0-69.437 0-105.431 34.684 10.604 68.135 17.379 98.581 30.915 50.535 22.466 73.526 68.37 88.642 118.643 2.911 9.682 3.262 20.103 5.384 30.056 5.564 26.097-4.080 47.358-26.823 57.681-33.981 15.422-69.119 30.232-105.321 38.47-132.929 30.254-265.927 26.585-397.548-8.839-24.938-6.713-48.953-18.192-72.019-30.132-21.022-10.882-29.998-29.874-26.934-54.452 5.761-46.216 21.94-87.7 53.546-122.379 17.645-19.36 39.328-31.424 65.3-37.287 24.651-5.562 48.635-14.074 75.748-22.13z"  ></path>' +
    '' +
    '<path d="M638.308 452.787c-1.511 26.002-6.654 47.853-25.097 65.937-6.293 6.169-5.996 20.169-6.705 30.726-2.607 38.775-43.327 86.767-81.874 92.265-13.114 1.87-29.181 0.415-40.508-5.752-36.016-19.604-67.339-43.509-65.915-91.825 0.346-11.74-9.22-23.73-14.047-35.679-6.983-17.286-13.8-34.638-21.456-53.898-15.333 2.323-30.84-1.892-36.378-22.66-6.311-23.67-16.433-47.171 5.548-69.47 4.302-4.365 2.851-16.27 1.349-24.186-10.238-53.965 3.447-101.485 39.185-142.193 39.579-45.084 90.578-51.749 147.997-46.762 99.916 8.678 149.731 110.944 130.815 192.962-2.228 9.66-2.242 16.091 6.302 26.117 17.563 20.611 7.894 45.793-0.808 68.706-6.483 17.070-20.174 19.62-38.407 15.711z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)