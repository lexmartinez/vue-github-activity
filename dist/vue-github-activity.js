!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("axios")):"function"==typeof define&&define.amd?define("github-feed",["axios"],e):"object"==typeof exports?exports["github-feed"]=e(require("axios")):t["github-feed"]=e(t.axios)}(this,function(t){return function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){n(1);var i=n(6)(n(7),n(10),"data-v-266211d2",null);t.exports=i.exports},function(t,e,n){var i=n(2);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);n(4)("51d28e6b",i,!0)},function(t,e,n){e=t.exports=n(3)(!1),e.push([t.id,".feed[data-v-266211d2]{position:relative;display:table;height:100%;min-height:200px;width:100%;min-width:500px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-size:1rem;color:#373a3c}.header-wrapper[data-v-266211d2]{display:table-row;height:1px}.header[data-v-266211d2]{display:table-cell;top:1px;left:1px;padding:10px;border-bottom:1px solid #ddd}.avatar-wrapper[data-v-266211d2]{display:inline;float:right;margin-right:10px;padding-right:20px;max-width:60px;height:67px}.avatar[data-v-266211d2]{padding:3px;height:100%;border:1px solid #ddd;box-shadow:1px 1px 3px #ccc}.github-octicon[data-v-266211d2]{font:normal normal 40px octicons}.github-icon[data-v-266211d2]{display:inline;float:left;padding:9px 0 0;width:35px;height:35px}.github-username[data-v-266211d2]{font-size:20px;font-style:normal;font-weight:300;line-height:24px;color:#666}.github-profile[data-v-266211d2]{display:inline-block;float:left;margin:0 auto;padding:6px 10px 5px;color:#495961;font-size:20px;text-decoration:none;margin-left:10px}.footer-wrapper[data-v-266211d2]{padding:5px;font-weight:700;font-size:13px;border-top:1px solid #ddd;font-family:Helvetica,arial,freesans,clean,sans-serif}.events-wrapper[data-v-266211d2]{height:100%;display:table-row}.feed-list[data-v-266211d2]{overflowY:auto;position:relative;display:table-cell}.event-list[data-v-266211d2]{position:absolute;width:100%;min-height:100px}.github-event[data-v-266211d2]{border-top:1px solid #f1f1f1;padding:1em 0 0;padding:1.5em 0 1.5em 25px}.event-octicon[data-v-266211d2]{color:#bbb;margin-right:10px}.event-time[data-v-266211d2]{display:inline-block;font-size:12px;margin-left:3px;color:#bbb}",""])},function(t,e){function n(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var r=i(a),o=a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"});return[n].concat(o).concat([r]).join("\n")}return[n].join("\n")}function i(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+e;return"/*# "+n+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(i[r]=!0)}for(a=0;a<t.length;a++){var o=t[a];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=l[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(r(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(r(n.parts[a]));l[n.id]={id:n.id,refs:1,parts:o}}}}function a(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function r(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(v)return h;i.parentNode.removeChild(i)}if(g){var r=f++;i=p||(p=a()),e=o.bind(null,i,r,!1),n=o.bind(null,i,r,!0)}else i=a(),e=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function o(t,e,n,i){var a=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=m(e,a);else{var r=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function s(t,e){var n=e.css,i=e.media,a=e.sourceMap;if(i&&t.setAttribute("media",i),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document,c=n(5),l={},u=d&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,v=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){v=n;var a=c(t,e);return i(a),function(e){for(var n=[],r=0;r<a.length;r++){var o=a[r],s=l[o.id];s.refs--,n.push(s)}e?(a=c(t,e),i(a)):a=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete l[s.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},a=0;a<e.length;a++){var r=e[a],o=r[0],s=r[1],d=r[2],c=r[3],l={id:t+":"+a,css:s,media:d,sourceMap:c};i[o]?i[o].parts.push(l):n.push(i[o]={id:o,parts:[l]})}return n}},function(t,e){t.exports=function(t,e,n,i){var a,r=t=t||{},o=typeof t["default"];"object"!==o&&"function"!==o||(a=t,r=t["default"]);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),i){var d=Object.create(s.computed||null);Object.keys(i).forEach(function(t){var e=i[t];d[t]=function(){return e}}),s.computed=d}return{esModule:a,exports:r,options:s}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(8),r=i(a);e["default"]={name:"github-feed",props:{login:{required:!0}},data:function(){return{user:{},events:[],loading:!1,error:!1,actionType:"pushed",octicon:"octicon-issue-closed dashboard-event-icon",actionUrl:""}},created:function(){var t=this;r["default"].user(this.login).then(function(e){t.user=e.data,r["default"].events(t.login).then(function(e){t.loading=!1,t.error=!1,t.events=e.data})["catch"](function(e){t.loading=!1,t.error=!0})})["catch"](function(e){t.loading=!1,t.error=!0})}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(9),r=i(a),o=r["default"].create({baseURL:"https://api.github.com/users/"});e["default"]={user:function(t){return o.get(t)},events:function(t){return o.get(t+"/events")}}},function(e,n){e.exports=t},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feed"},[n("div",{staticClass:"header-wrapper"},[n("div",{staticClass:"header"},[t._m(0),t._v(" "),n("a",{staticClass:"github-profile",attrs:{href:t.user.html_url,target:"_blank"}},[n("div",{staticStyle:{"font-size":"26px","line-height":"30px"}},[t._v("\n                    "+t._s(t.user.name)+"\n                ")]),t._v(" "),n("div",{staticClass:"github-username"},[t._v("\n                    "+t._s(t.user.login)+"\n                ")])]),t._v(" "),n("div",{staticClass:"avatar-wrapper"},[n("img",{staticClass:"avatar",attrs:{src:t.user.avatar_url}})])])]),t._v(" "),n("div",{staticClass:"events-wrapper"},[n("div",{staticClass:"feed-list"},[n("div",{staticClass:"event-list"},t._l(t.events,function(e){return n("div",{key:e.id,staticClass:"github-event"},[n("span",{staticClass:"event-octicon octicon","class":t.octicon}),t._v(" "),e?n("div",{staticStyle:{display:"inline-block","font-size":"13px"}},[n("a",[t._v(t._s(e.actor.login))]),t._v(" "+t._s(t.actionType)+"\n                            "),n("a",{staticStyle:{color:"#0275d8"},attrs:{href:t.actionUrl?t.actionUrl:e.repo.url}},[t._v(" "+t._s(e.repo.name)+" ")])]):t._e(),t._v(" "),e?n("div",{staticClass:"event-time"},[t._v("\n                            "+t._s(t.moment(e.created_at).fromNow())+"\n                        ")]):t._e()])}))])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"github-icon"},[n("span",{staticClass:"github-octicon octicon octicon-mark-github"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-wrapper"},[n("p",{staticStyle:{display:"inline"}},[t._v("Public Activity")]),t._v(" "),n("a",{staticStyle:{"float":"right",color:"#232323"},attrs:{target:"_blank",href:"https://github.com/lexmartinez/vue-github-activity"}},[t._v("GitHub Activity Feed")])])}]}}])});