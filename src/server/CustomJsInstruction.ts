import { Instruction, JOB_STATUS } from '@nocobase/plugin-workflow';

export default class CustomJsInstruction extends Instruction {
  async run(node, input, processor) {
    const { code } = node.config;

    try {
      // Create a context object that will be available in the code
      const context = {
        input,
        execution: processor.execution,
        node,
        processor,
      };

      // Create a new function with the context as parameter
      const fn = new Function('context', `
        try {
          ${code}
        } catch (error) {
          throw new Error('Code execution failed: ' + error.message);
        }
      `);

      // Execute the function with the context
      const result = await fn(context);

      return {
        status: JOB_STATUS.RESOLVED,
        result
      };
    } catch (error) {
      return {
        status: JOB_STATUS.FAILED,
        error: error.message
      };
    }
  }
}