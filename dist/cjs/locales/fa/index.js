"use strict";var b=Object.create;var t=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var F=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var j=(o,m)=>{for(var e in m)t(o,e,{get:m[e],enumerable:!0})},p=(o,m,e,f)=>{if(m&&typeof m=="object"||typeof m=="function")for(let i of x(m))!g.call(o,i)&&i!==e&&t(o,i,{get:()=>m[i],enumerable:!(f=v(m,i))||f.enumerable});return o};var r=(o,m,e)=>(e=o!=null?b(F(o)):{},p(m||!o||!o.__esModule?t(e,"default",{value:o,enumerable:!0}):e,o)),k=o=>p(t({},"__esModule",{value:!0}),o);var z={};j(z,{default:()=>w});module.exports=k(z);var n=r(require("./address")),a=r(require("./cell_phone")),c=r(require("./color")),l=r(require("./commerce")),d=r(require("./company")),s=r(require("./date")),h=r(require("./finance")),_=r(require("./internet")),u=r(require("./lorem")),y=r(require("./name")),D=r(require("./phone_number")),L=r(require("./vehicle"));const q={title:"Farsi",address:n.default,cell_phone:a.default,color:c.default,commerce:l.default,company:d.default,date:s.default,finance:h.default,internet:_.default,lorem:u.default,name:y.default,phone_number:D.default,vehicle:L.default};var w=q;0&&(module.exports={});
