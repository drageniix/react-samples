!function(c){function e(e){for(var t,n,r=e[0],o=e[1],a=e[2],u=0,i=[];u<r.length;u++)n=r[u],d[n]&&i.push(d[n][0]),d[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(c[t]=o[t]);for(h&&h(e);i.length;)i.shift()();return s.push.apply(s,a||[]),l()}function l(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==d[a]&&(r=!1)}r&&(s.splice(t--,1),e=p(p.s=n[0]))}return e}var n={},f={0:0},d={0:0},s=[];function p(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.e=function(s){var e=[];f[s]?e.push(f[s]):0!==f[s]&&{2:1,3:1,4:1}[s]&&e.push(f[s]=new Promise(function(e,r){for(var t=({}[s]||s)+"-568a54d3e7e8273accab.css",o=p.p+t,n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var u=(c=n[a]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===t||u===o))return e()}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){var c;if((u=(c=i[a]).getAttribute("data-href"))===t||u===o)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var t=e&&e.target&&e.target.src||o,n=new Error("Loading CSS chunk "+s+" failed.\n("+t+")");n.request=t,delete f[s],l.parentNode.removeChild(l),r(n)},l.href=o,document.getElementsByTagName("head")[0].appendChild(l)}).then(function(){f[s]=0}));var t,n=d[s];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,t){n=d[s]=[e,t]});e.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,p.nc&&a.setAttribute("nonce",p.nc),a.src=p.p+"./scripts/"+({}[t=s]||t)+".js",o=function(e){a.onerror=a.onload=null,clearTimeout(u);var t=d[s];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+s+" failed.\n("+n+": "+r+")");o.type=n,o.request=r,t[1](o)}d[s]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(e)},p.m=c,p.c=n,p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(t,e){if(1&e&&(t=p(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(p.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)p.d(n,r,function(e){return t[e]}.bind(null,r));return n},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/",p.oe=function(e){throw console.error(e),e};var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var h=r;s.push([128,1]),l()}({128:function(e,t,n){n(129),e.exports=n(306)},306:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(123),u=n.n(a),i=n(63),c=n.n(i),l=function(){return o.a.createElement("div",null)},s=n(308),f=n(309),d=n(310),p=c()({loader:function(){return n.e(4).then(n.bind(null,318))},loading:l}),h=c()({loader:function(){return n.e(3).then(n.bind(null,317))},loading:l}),m=c()({loader:function(){return n.e(2).then(n.bind(null,316))},loading:l}),v=function(){return o.a.createElement(s.a,null,o.a.createElement("div",{className:"main-layout"},o.a.createElement("main",{className:"main-layout__body"},o.a.createElement(f.a,null,o.a.createElement(d.a,{path:"/trillo",component:h}),o.a.createElement(d.a,{path:"/natours",component:m}),o.a.createElement(d.a,{path:"/wiakc",component:function(){return window.location="https://wiakc.org",null}}),o.a.createElement(d.a,{path:"/3dt",component:function(){return window.location="https://3darktowers.netlify.com",null}}),o.a.createElement(d.a,{exact:!0,path:"/",component:p})))))},g=n(92),y=n(33),w=n(91);function b(e,t,n,r,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}var E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.c;(function(){var i,t=(i=regeneratorRuntime.mark(function e(t){var n,r,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/assets/data/trillo.json").then(function(e){return e.json()});case 2:return n=e.sent,e.next=5,fetch("/assets/data/natours.json").then(function(e){return e.json()});case 5:return r=e.sent,e.next=8,fetch("/assets/data/home.json").then(function(e){return e.json()});case 8:if(o=e.sent,a=function(){return 0<arguments.length&&void 0!==arguments[0]?arguments[0]:{trillo:n,natours:r,home:o}},t&&"undefined"==typeof window)return e.abrupt("return",Object(y.d)(a,E(Object(y.a)(w.a))));e.next=14;break;case 14:return e.abrupt("return",window.store?window.store:window.store=Object(y.d)(a,E(Object(y.a)(w.a))));case 15:case"end":return e.stop()}},e,this)}),function(){var e=this,u=arguments;return new Promise(function(t,n){var r=i.apply(e,u);function o(e){b(r,t,n,o,a,"next",e)}function a(e){b(r,t,n,o,a,"throw",e)}o(void 0)})});return function(e){return t.apply(this,arguments)}})()().then(function(e){u.a.render(o.a.createElement(function(){return o.a.createElement(g.a,{store:e},o.a.createElement(v,null))},null),document.getElementById("content"))})}});
//# sourceMappingURL=index.js.map