import { Plugin } from '@nocobase/server';
import WorkflowPlugin from '@nocobase/plugin-workflow';
import CustomJsInstruction from './CustomJsInstruction';

export class CustomJsNodeServer extends Plugin {
  async load() {
    // Get the workflow plugin instance
    const workflowPlugin = this.app.getPlugin<WorkflowPlugin>(WorkflowPlugin);
    
    // Register our custom JavaScript instruction
    workflowPlugin.registerInstruction('custom-js', CustomJsInstruction);
  }
}

export default CustomJsNodeServer;
