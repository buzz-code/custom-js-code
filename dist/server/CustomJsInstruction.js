/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var CustomJsInstruction_exports = {};
__export(CustomJsInstruction_exports, {
  default: () => CustomJsInstruction
});
module.exports = __toCommonJS(CustomJsInstruction_exports);
var import_plugin_workflow = require("@nocobase/plugin-workflow");
class CustomJsInstruction extends import_plugin_workflow.Instruction {
  async run(node, input, processor) {
    const { code } = node.config;
    try {
      const context = {
        input,
        execution: processor.execution,
        node,
        processor
      };
      const fn = new Function("context", `
        try {
          ${code}
        } catch (error) {
          throw new Error('Code execution failed: ' + error.message);
        }
      `);
      const result = await fn(context);
      return {
        status: import_plugin_workflow.JOB_STATUS.RESOLVED,
        result
      };
    } catch (error) {
      return {
        status: import_plugin_workflow.JOB_STATUS.FAILED,
        error: error.message
      };
    }
  }
}
