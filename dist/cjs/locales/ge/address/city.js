"use strict";var f=Object.defineProperty;var t=Object.getOwnPropertyDescriptor;var r=Object.getOwnPropertyNames;var _=Object.prototype.hasOwnProperty;var m=(e,s)=>{for(var i in s)f(e,i,{get:s[i],enumerable:!0})},n=(e,s,i,d)=>{if(s&&typeof s=="object"||typeof s=="function")for(let a of r(s))!_.call(e,a)&&a!==i&&f(e,a,{get:()=>s[a],enumerable:!(d=t(s,a))||d.enumerable});return e};var x=e=>n(f({},"__esModule",{value:!0}),e);var y={};m(y,{default:()=>c});module.exports=x(y);var c=["{{address.city_prefix}} {{name.first_name}}{{address.city_suffix}}","{{address.city_prefix}} {{name.first_name}}","{{name.first_name}}{{address.city_suffix}}","{{name.first_name}}{{address.city_suffix}}","{{name.last_name}}{{address.city_suffix}}","{{name.last_name}}{{address.city_suffix}}"];0&&(module.exports={});
