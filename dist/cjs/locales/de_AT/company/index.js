"use strict";var y=Object.create;var n=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var C=(o,m)=>{for(var i in m)n(o,i,{get:m[i],enumerable:!0})},p=(o,m,i,t)=>{if(m&&typeof m=="object"||typeof m=="function")for(let f of c(m))!x.call(o,f)&&f!==i&&n(o,f,{get:()=>m[f],enumerable:!(t=l(m,f))||t.enumerable});return o};var r=(o,m,i)=>(i=o!=null?y(u(o)):{},p(m||!o||!o.__esModule?n(i,"default",{value:o,enumerable:!0}):i,o)),D=o=>p(n({},"__esModule",{value:!0}),o);var g={};C(g,{default:()=>d});module.exports=D(g);var e=r(require("./legal_form")),a=r(require("./name")),s=r(require("./suffix"));const _={legal_form:e.default,name:a.default,suffix:s.default};var d=_;0&&(module.exports={});
