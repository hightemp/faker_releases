"use strict";var n=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var f=(t,e)=>{for(var r in e)n(t,r,{get:e[r],enumerable:!0})},p=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of h(e))!m.call(t,a)&&a!==r&&n(t,a,{get:()=>e[a],enumerable:!(o=c(e,a))||o.enumerable});return t};var u=t=>p(n({},"__esModule",{value:!0}),t);var y={};f(y,{Company:()=>i});module.exports=u(y);var s=require("../../internal/deprecated");class i{constructor(e){this.faker=e;for(const r of Object.getOwnPropertyNames(i.prototype))r==="constructor"||typeof this[r]!="function"||(this[r]=this[r].bind(this))}suffixes(){return this.faker.definitions.company.suffix.slice(0)}name(e){const r=["{{name.lastName}} {{company.companySuffix}}","{{name.lastName}} - {{name.lastName}}","{{name.lastName}}, {{name.lastName}} and {{name.lastName}}"];return e!=null&&(0,s.deprecated)({deprecated:"faker.company.name(format)",proposed:"faker.company.name()",since:"7.4",until:"8.0"}),typeof e!="number"&&(e=this.faker.datatype.number(r.length-1)),this.faker.helpers.fake(r[e])}companyName(e){return(0,s.deprecated)({deprecated:"faker.company.companyName()",proposed:"faker.company.name()",since:"7.4",until:"8.0"}),this.name(e)}companySuffix(){return this.faker.helpers.arrayElement(this.suffixes())}catchPhrase(){return[this.catchPhraseAdjective(),this.catchPhraseDescriptor(),this.catchPhraseNoun()].join(" ")}bs(){return[this.bsBuzz(),this.bsAdjective(),this.bsNoun()].join(" ")}catchPhraseAdjective(){return this.faker.helpers.arrayElement(this.faker.definitions.company.adjective)}catchPhraseDescriptor(){return this.faker.helpers.arrayElement(this.faker.definitions.company.descriptor)}catchPhraseNoun(){return this.faker.helpers.arrayElement(this.faker.definitions.company.noun)}bsAdjective(){return this.faker.helpers.arrayElement(this.faker.definitions.company.bs_adjective)}bsBuzz(){return this.faker.helpers.arrayElement(this.faker.definitions.company.bs_verb)}bsNoun(){return this.faker.helpers.arrayElement(this.faker.definitions.company.bs_noun)}}0&&(module.exports={Company});
