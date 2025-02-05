import { CodeOutlined } from '@ant-design/icons';
import { BaseTypeSets, defaultFieldNames, Instruction } from '@nocobase/plugin-workflow/client';
import React from 'react';
import { NAMESPACE } from './locale';

export default class extends Instruction {
  title = `{{t("Custom JavaScript", { ns: "${NAMESPACE}" })}}`;
  type = 'custom-js';
  group = 'extended';
  description = `{{t("Execute custom JavaScript code with access to workflow context", { ns: "${NAMESPACE}" })}}`;
  icon = (<CodeOutlined />);

  fieldset = {
    code: {
      type: 'string',
      title: `{{t("JavaScript Code", { ns: "${NAMESPACE}" })}}`,
      'x-decorator': 'FormItem',
      'x-component': 'Input.TextArea',
      'x-component-props': {
        rows: 10,
        placeholder: `// Available variables:
// context.input - Input data from previous node
// context.execution - Current workflow execution
// context.node - Current node instance
// context.processor - Workflow processor

// Example:
const { input } = context;
return {
  result: input.value * 2
};`
      },
      required: true,
      default: '// Write your code here\nreturn {};',
    }
  };

  useVariables({ key, title }, { types, fieldNames = defaultFieldNames }) {
    if (
      types &&
      !types.some((type) => type in BaseTypeSets || Object.values(BaseTypeSets).some((set) => set.has(type)))
    ) {
      return null;
    }
    return {
      [fieldNames.value]: key || 'key',
      [fieldNames.label]: title || 'title',
    };
  }
}