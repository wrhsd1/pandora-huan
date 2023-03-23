"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[554],{76554:function(t,e,n){n.r(e),n.d(e,{getLocalhostPluginHttpApiCallData:function(){return l},makeLocalhostPluginHttpApiCall:function(){return c}});var r=n(61706),a=n(31501),o=n(45813),s=n(8844),i=n(68619);function l(t){var e,n=null===(e=t.metadata)||void 0===e?void 0:e.http_api_call_data;if(void 0!==n){if(t.author.role!==i.uU.Assistant){console.error("Refusing to make localhost plugin HTTP call from non-assistant message",t);return}if("object"!=typeof n||"string"!=typeof n.namespace||0===n.namespace.length||"string"!=typeof n.function_name||0===n.function_name.length||"string"!=typeof n.parent_message_id||0===n.parent_message_id.length||"string"!=typeof n.url||0===n.url.length||"string"!=typeof n.method||!["get","post","put","delete","patch"].includes(n.method)||!Array.isArray(n.qs_params)||n.qs_params.some(function(t){return!Array.isArray(t)||2!==t.length||"string"!=typeof t[0]||"string"!=typeof t[1]})||"object"!=typeof n.headers||Object.keys(n.headers).some(function(t){return"string"!=typeof t})||Object.values(n.headers).some(function(t){return"string"!=typeof t})||!(null===n.body||"object"==typeof n.body&&Object.keys(n.body).every(function(t){return"string"==typeof t}))||"string"!=typeof n.api_function_type||!["kwargs","chat"].includes(n.api_function_type)){console.error("Refusing to make localhost plugin HTTP call with invalid metadata",t);return}if(!/^https?:\/\/localhost:/.test(n.url)){console.error("Refusing to make localhost plugin HTTP call with non-localhost URL",t);return}return n}}function c(t){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(function(t){var e,n;return(0,o.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,function(t){return p.apply(this,arguments)}(t)];case 1:return[2,n.sent()];case 2:return e=n.sent(),console.error("Error making localhost plugin HTTP call",e),[2,[{id:(0,s.Z)(),author:{role:i.uU.System},role:i.uU.Tool,content:{content_type:"text",parts:["Error making localhost plugin HTTP call: ".concat(e)]},metadata:{parent_message_id:t.parent_message_id,is_complete:!0}}]];case 3:return[2]}})})).apply(this,arguments)}function p(){return(p=(0,r.Z)(function(t){var e,n,r,l,c,u;function p(t){return Object.keys(t).map(function(t){return t.toLowerCase()})}return(0,o.__generator)(this,function(o){switch(o.label){case 0:var l,u;if(e={"content-type":"application/json"},u=(l=[p(t.headers),p(e)]).flat(),new Set(u).size!==u.length)throw Error("Refusing to make localhost plugin HTTP call with duplicate header keys");return n=t.url,t.qs_params.length>0&&(n=n+"?"+new URLSearchParams(t.qs_params)),r=void 0,null!==t.body&&(r=JSON.stringify(t.body)),[4,fetch(n,{method:t.method,headers:(0,a.Z)({},e,t.headers),body:r})];case 1:return[4,o.sent().text()];case 2:if(c=o.sent(),"chat"===t.api_function_type)return[2,[JSON.parse(c)]];if("kwargs"===t.api_function_type)return[2,[{id:(0,s.Z)(),author:{role:i.uU.Tool,name:"".concat(t.namespace,".").concat(t.function_name)},role:i.uU.Tool,content:{content_type:"text",parts:[c]},metadata:{parent_message_id:t.parent_message_id,is_complete:!0}}]];throw Error("Not implemented")}})})).apply(this,arguments)}}}]);