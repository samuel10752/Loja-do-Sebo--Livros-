/* Please ❤ this and follow me if you like it! */

/*! modernizr 3.4.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-csstransforms3d-csstransitions-preserve3d-touchevents !*/
 !function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,s,i,a;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),S.push((o?"":"no-")+a.join("-"))}}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(){var e=t.body;return e||(e=s(_?"svg":"body"),e.fake=!0),e}function a(e,n,r,o){var a,l,u,f,d="modernizr",p=s("div"),c=i();if(parseInt(r,10))for(;r--;)u=s("div"),u.id=o?o[r]:d+(r+1),p.appendChild(u);return a=s("style"),a.type="text/css",a.id="s"+d,(c.fake?c:p).appendChild(a),c.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",f=T.style.overflow,T.style.overflow="hidden",T.appendChild(c)),l=n(p,e),c.fake?(c.parentNode.removeChild(c),T.style.overflow=f,T.offsetHeight):p.parentNode.removeChild(p),!!l}function l(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,n){var o;for(var s in e)if(e[s]in t)return n===!1?e[s]:(o=t[e[s]],r(o,"function")?f(o,n||t):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function m(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(t[o])+":"+r+")");return s=s.join(" or "),a("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return n}function h(e,t,o,i){function a(){d&&(delete j.style,delete j.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var f=m(e,o);if(!r(f,"undefined"))return f}for(var d,p,c,h,v,g=["modernizr","tspan","samp"];!j.style&&g.length;)d=!0,j.modElem=s(g.shift()),j.style=j.modElem.style;for(c=e.length,p=0;c>p;p++)if(h=e[p],v=j.style[h],l(h,"-")&&(h=u(h)),j.style[h]!==n){if(i||r(o,"undefined"))return a(),"pfx"==t?h:!0;try{j.style[h]=o}catch(y){}if(j.style[h]!=v)return a(),"pfx"==t?h:!0}return a(),!1}function v(e,t,n,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+k.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,o,s):(a=(e+" "+E.join(i+" ")+i).split(" "),d(a,t,n))}function g(e,t,r){return v(e,n,n,t,r)}var y=[],C={_version:"3.4.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var S=[],w=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=w;var x="CSS"in e&&"supports"in e.CSS,b="supportsCSS"in e;Modernizr.addTest("supports",x||b);var T=t.documentElement,_="svg"===T.nodeName.toLowerCase();Modernizr.addTest("preserve3d",function(){var t,n,r=e.CSS,o=!1;return r&&r.supports&&r.supports("(transform-style: preserve-3d)")?!0:(t=s("a"),n=s("a"),t.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",n.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",t.appendChild(n),T.appendChild(t),o=n.getBoundingClientRect(),T.removeChild(t),o=o.width&&o.width<4)});var z=C.testStyles=a;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",w.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");z(r,function(e){n=9===e.offsetTop})}return n});var P="Moz O ms Webkit",k=C._config.usePrefixes?P.split(" "):[];C._cssomPrefixes=k;var E=C._config.usePrefixes?P.toLowerCase().split(" "):[];C._domPrefixes=E;var A={elem:s("modernizr")};Modernizr._q.push(function(){delete A.elem});var j={style:A.elem.style};Modernizr._q.unshift(function(){delete j.style}),C.testAllProps=v,C.testAllProps=g,Modernizr.addTest("csstransforms3d",function(){var e=!!g("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in T.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",z(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&g("transform","scale(1)",!0)}),Modernizr.addTest("csstransitions",g("transition","all",!0)),o(),delete C.addTest,delete C.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);



 (function() {
 
   document.getElementsByTagName("html")[0].className = "js";
 
   if (Modernizr && Modernizr.csstransforms && Modernizr.csstransforms3d && Modernizr.csstransitions) {
 
     var book = document.getElementById("js-book"),
       bookFlipWrap = document.createElement("div"),
       bookBack = document.createElement("div"),
       bookSpine = document.createElement("div");
 
     bookFlipWrap.className = "flip-book";
     bookFlipWrap.innerHTML = "<span id=js-book-flip>Flip to Back</span>";
 
     book.onmouseover = book.ontouchstart = function() {
       book.className += " lift-cover";
     };
 
     book.onmouseout = book.ontouchend = function() {
       book.className = book.className.replace(/ lift-cover/g, "");
     };
 
     bookBack.className = "back face";
     bookSpine.className = "spine";
 
     document.getElementById("js-book-wrap").appendChild(bookFlipWrap);
     book.appendChild(bookBack);
     book.appendChild(bookSpine);
 
     var bookFlip = document.getElementById("js-book-flip");
 
     bookFlip.onmouseover = bookFlip.ontouchstart = function() {
       if (book.className.indexOf("flipped") > -1) {
         book.className = "book flipped turn";
       } else {
         book.className = "book turn";
       }
     };
 
     bookFlip.onmouseout = bookFlip.ontouchend = function() {
       if (book.className.indexOf("flipped") > -1) {
         book.className = "book flipped";
       } else {
         book.className = "book";
       }
     };
 
     bookFlip.onclick = function() {
       if (book.className.indexOf("flipped") > -1) {
         book.className = "book";
         bookFlip.innerHTML = "Flip to Back";
       } else {
         book.className = "book flipped";
         bookFlip.innerHTML = "Flip to Front";
       }
     };
   }
 
 })();
 
 
 
 // Working with credits
 
 var cpCreditsUrl = "https://codepen.io/PickJBennett/details/PGqAwE";
 var cpCreditsTitle = "CSS3 3D Rotating Book";
 var cpCreditsTwitter = document.getElementById("js-tweet-this");
