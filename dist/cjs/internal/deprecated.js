"use strict";var a=Object.defineProperty;var t=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var s=(e,r)=>{for(var n in r)a(e,n,{get:r[n],enumerable:!0})},o=(e,r,n,d)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of c(r))!p.call(e,i)&&i!==n&&a(e,i,{get:()=>r[i],enumerable:!(d=t(r,i))||d.enumerable});return e};var l=e=>o(a({},"__esModule",{value:!0}),e);var m={};s(m,{deprecated:()=>f});module.exports=l(m);function f(e){let r=`[@faker-js/faker]: ${e.deprecated} is deprecated`;e.since&&(r+=` since v${e.since}`),e.until&&(r+=` and will be removed in v${e.until}`),e.proposed&&(r+=`. Please use ${e.proposed} instead.`),console.warn(`${r}.`)}0&&(module.exports={deprecated});
