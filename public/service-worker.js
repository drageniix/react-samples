"use strict";var precacheConfig=[["/2-1759a0402c4bce15d74e.css","008dac8ca54429cc7198f648e1f7d6a6"],["/3-1759a0402c4bce15d74e.css","e9cd03e17a7f79cb8397edc5817373d3"],["/_redirects","6a02faf7ea2a9584134ffe15779a0e44"],["/assets/data/natours.json","f320cd56ee3830b8dccc8a22ca0cd696"],["/assets/data/trillo.json","8a438af783188efe298f691ca45b2c52"],["/assets/images/about-1-large.jpg","e057a826957fa4ba013333cfb8cb8185"],["/assets/images/about-1.jpg","23ad493468f8dc38e7e4d8a5f6ca3404"],["/assets/images/about-2-large.jpg","16be56cb65b495709b4db57d2235bb22"],["/assets/images/about-2.jpg","4a0e147b7e1502ffcfd9a75e60d68983"],["/assets/images/about-3-large.jpg","8ab0ddd9d52a7c3fd150b46479d4badb"],["/assets/images/about-3.jpg","15342e4ad8b87ac5bee52029d437d367"],["/assets/images/header-small.jpg.jpg","636f3031eab7979e4d0903a4a81b398b"],["/assets/images/header.jpg","d74f429b0f3f2555ae8bbd5a4981cd33"],["/assets/images/hotel-1.jpg","f014eb2afa8e5e21aaf25731049c7f4b"],["/assets/images/hotel-2.jpg","5dd33cac578c1329923e852ed1608fc1"],["/assets/images/hotel-3.jpg","12e01fc9669ac36b9957d5f8a51a4008"],["/assets/images/logo.png","3638639a003a72155db0fba32a5a6612"],["/assets/images/trillo-logo.png","2d601beed81e1aaa2a45360f84ad400b"],["/assets/images/user-1.jpg","760742177dc8fd417f22e189f79f1a04"],["/assets/images/user-2.jpg","03df656b1a134d61c05892f14c8e00a7"],["/assets/images/user-3.jpg","047e76eb4c6b9487f5a391a5d95924ac"],["/assets/images/user-4.jpg","76a4f224fdca4ac295a2c345b85dfe0b"],["/assets/images/user-5.jpg","a2ae095eea070516e1845056430bdd28"],["/assets/images/user-6.jpg","19abac75018f007a767175cd4e9630f2"],["/assets/images/user.jpg","71f34710e6a9f83cdf9c2942f2c025ec"],["/favicon.png","fe9a7cd57067d595fc8f31a1c2a9ab21"],["/icon_128x128.png","83726b2d60880a09e644af9211c13947"],["/icon_192x192.png","62ee78927b6d29d56f98a5345414423c"],["/icon_256x256.png","eab0a8b847a5958a1e8250535684c32a"],["/icon_384x384.png","45fed2822bc872215fae7f55929146e4"],["/icon_512x512.png","eaf0e1e3ab75fcd2ca1292647ec10433"],["/icon_96x96.png","5408bc6b7e5b6f07e78dd411e603a621"],["/index.html","3a38446d1ad7484d60065605997abcca"],["/manifest.json","156020055f02fcaba4b1bb742d66e44f"],["/scripts/2.js","62e4cc3f55a5f4c5eee4288cc8687170"],["/scripts/3.js","17b8fbb4dc2030da9e3ae48eddbe1ec6"],["/scripts/index.js","cc1812e2a235bc15cc909ea6a5913cb7"],["/scripts/vendors~index.js","3cad65f5d28444045aa6c5501669a28e"]],cacheName="sw-precache-v3-holiday-update-2018-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=a),s.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,s,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(s)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var s=new URL(a).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,a){var s=new URL(e);return s.hash="",s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],s=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,s,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!a.has(s)){var t=new Request(s,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+s+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(s,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(s){return Promise.all(s.map(function(s){if(!a.has(s.url))return e.delete(s)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,s=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(s))||(s=addDirectoryIndex(s,"index.html"),a=urlsToCacheKeys.has(s));var t="C:UsersjayloDocumentsAshley\react-samplespublicindex.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(s=new URL(t,self.location).toString(),a=urlsToCacheKeys.has(s)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});