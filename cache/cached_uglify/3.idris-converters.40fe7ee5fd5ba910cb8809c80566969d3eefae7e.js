webpackJsonp([3],{101:function(n,t,e){"use strict";function o(n,t){if(window.DOMParser){t(null,(new window.DOMParser).parseFromString(n,"text/xml"))}else t('Your browser does not support "DOMParser"')}var i=e(253);n.exports=function(n,t){o(n,function(n,e){n?t(n):i(e,function(n,e){t(n,e)})})}},253:function(n,t,e){"use strict";function o(n,t){a(0,n.children,[],function(n){t(n)})}function i(n,t){c(0,n.children,[],function(n){t(n)})}function u(n,t){f(0,n.children,[],function(n){t(n)})}function r(n,t){for(var e={},o=n.attributes,i=0;i<o.length;i++)"lat"===o[i].name&&(e.lat=+o[i].value),"lon"===o[i].name&&(e.lon=+o[i].value);for(var u=n.children,r=0;r<u.length;r++)if("ele"===u[r].nodeName&&(e.ele=+u[r].textContent),"time"===u[r].nodeName){var a=new Date(u[r].textContent);e.time=Date.parse(a)}t(e.lat&&e.lon?e:null)}function a(n,t,e,o){n===t.length?o(e):"trk"===t[n].tagName?i(t[n],function(i){i.forEach(function(n){e.push(n)}),a(n+1,t,e,o)}):a(n+1,t,e,o)}function c(n,t,e,o){n===t.length?o(e):"trkseg"===t[n].tagName?u(t[n],function(i){i.forEach(function(n){e.push(n)}),c(n+1,t,e,o)}):c(n+1,t,e,o)}function f(n,t,e,o){n===t.length?o(e):"trkpt"===t[n].tagName?r(t[n],function(i){i&&e.push(i),Math.floor(n/1e3)===n/1e3?setTimeout(function(){f(n+1,t,e,o)},1):f(n+1,t,e,o)}):f(n+1,t,e,o)}n.exports=function(n,t){var e=n.children[0];"gpx"!==e.nodeName?t("Not a valid GPX file"):o(e,function(n){t(null,n)})}}});