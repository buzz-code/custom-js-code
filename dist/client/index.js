/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

(function(e,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("@nocobase/client"),require("react/jsx-runtime"),require("@ant-design/icons"),require("@nocobase/plugin-workflow/client")):typeof define=="function"&&define.amd?define(["exports","@nocobase/client","react/jsx-runtime","@ant-design/icons","@nocobase/plugin-workflow/client"],t):(e=typeof globalThis!="undefined"?globalThis:e||self,t(e["@buzz-code/custom-js-node"]={},e["@nocobase/client"],e.jsxRuntime,e["@ant-design/icons"],e["@nocobase/plugin-workflow"]))})(this,function(e,t,o,a,c){"use strict";var J=Object.defineProperty;var h=(e,t,o)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var i=(e,t,o)=>h(e,typeof t!="symbol"?t+"":t,o);var f=(e,t,o)=>new Promise((a,c)=>{var s=n=>{try{u(o.next(n))}catch(r){c(r)}},d=n=>{try{u(o.throw(n))}catch(r){c(r)}},u=n=>n.done?a(n.value):Promise.resolve(n.value).then(s,d);u((o=o.apply(e,t)).next())});const s="custom-js-node";class d extends c.Instruction{constructor(){super(...arguments);i(this,"title",`{{t("Custom JavaScript", { ns: "${s}" })}}`);i(this,"type","custom-js");i(this,"group","extended");i(this,"description",`{{t("Execute custom JavaScript code with access to workflow context", { ns: "${s}" })}}`);i(this,"icon",o.jsx(a.CodeOutlined,{}));i(this,"fieldset",{code:{type:"string",title:`{{t("JavaScript Code", { ns: "${s}" })}}`,"x-decorator":"FormItem","x-component":"Input.TextArea","x-component-props":{rows:10,placeholder:`// Available variables:
// context.input - Input data from previous node
// context.execution - Current workflow execution
// context.node - Current node instance
// context.processor - Workflow processor

// Example:
const { input } = context;
return {
  result: input.value * 2
};`},required:!0,default:`// Write your code here
return {};`}})}useVariables({key:v,title:S},{types:p,fieldNames:l=c.defaultFieldNames}){return p&&!p.some(m=>m in c.BaseTypeSets||Object.values(c.BaseTypeSets).some(C=>C.has(m)))?null:{[l.value]:v||"key",[l.label]:S||"title"}}}const u={"custom-js-node":{"Custom JavaScript":"Custom JavaScript","Execute custom JavaScript code with access to workflow context":"Execute custom JavaScript code with access to workflow context","JavaScript Code":"JavaScript Code"}},n={"custom-js-node":{"Custom JavaScript":"自定义 JavaScript","Execute custom JavaScript code with access to workflow context":"使用工作流上下文执行自定义 JavaScript 代码","JavaScript Code":"JavaScript 代码"}};class r extends t.Plugin{load(){return f(this,null,function*(){this.app.i18n.addResources("en-US",s,u[s]),this.app.i18n.addResources("zh-CN",s,n[s]),this.pm.get("workflow").registerInstruction("custom-js",d)})}}e.CustomJsNodeClient=r,e.default=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
