"use strict";var i=Object.create;var a=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var F=Object.getPrototypeOf,G=Object.prototype.hasOwnProperty;var H=(e,o)=>{for(var r in o)a(e,r,{get:o[r],enumerable:!0})},n=(e,o,r,m)=>{if(o&&typeof o=="object"||typeof o=="function")for(let l of s(o))!G.call(e,l)&&l!==r&&a(e,l,{get:()=>o[l],enumerable:!(m=k(o,l))||m.enumerable});return e};var c=(e,o,r)=>(r=e!=null?i(F(e)):{},n(o||!e||!e.__esModule?a(r,"default",{value:e,enumerable:!0}):r,e)),_=e=>n(a({},"__esModule",{value:!0}),e);var w={};H(w,{faker:()=>b});module.exports=_(w);var t=require("../faker"),f=c(require("../locales/en")),p=c(require("../locales/en_GH"));const b=new t.Faker({locale:"en_GH",localeFallback:"en",locales:{en_GH:p.default,en:f.default}});0&&(module.exports={faker});
