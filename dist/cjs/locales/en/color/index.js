"use strict";var s=Object.create;var m=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var D=(o,r)=>{for(var i in r)m(o,i,{get:r[i],enumerable:!0})},f=(o,r,i,e)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of c(r))!C.call(o,t)&&t!==i&&m(o,t,{get:()=>r[t],enumerable:!(e=a(r,t))||e.enumerable});return o};var n=(o,r,i)=>(i=o!=null?s(u(o)):{},f(r||!o||!o.__esModule?m(i,"default",{value:o,enumerable:!0}):i,o)),d=o=>f(m({},"__esModule",{value:!0}),o);var y={};D(y,{default:()=>x});module.exports=d(y);var p=n(require("./human")),l=n(require("./space"));const h={human:p.default,space:l.default};var x=h;0&&(module.exports={});
