"use strict";var s=Object.create;var t=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty;var d=(o,e)=>{for(var r in e)t(o,r,{get:e[r],enumerable:!0})},n=(o,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let m of b(e))!c.call(o,m)&&m!==r&&t(o,m,{get:()=>e[m],enumerable:!(i=u(e,m))||i.enumerable});return o};var f=(o,e,r)=>(r=o!=null?s(h(o)):{},n(e||!o||!o.__esModule?t(r,"default",{value:o,enumerable:!0}):r,o)),D=o=>n(t({},"__esModule",{value:!0}),o);var _={};d(_,{default:()=>P});module.exports=D(_);var p=f(require("./area_code")),a=f(require("./formats"));const N={area_code:p.default,formats:a.default};var P=N;0&&(module.exports={});
