import { Plugin } from '@nocobase/client';
import WorkflowPlugin from '@nocobase/plugin-workflow/client';
import CustomJsInstruction from './CustomJsInstruction';
import { NAMESPACE } from './locale';
import enUS from '../locale/en-US.json';
import zhCN from '../locale/zh-CN.json';

export class CustomJsNodeClient extends Plugin {
  async load() {
    // Register translations
    this.app.i18n.addResources('en-US', NAMESPACE, enUS[NAMESPACE]);
    this.app.i18n.addResources('zh-CN', NAMESPACE, zhCN[NAMESPACE]);

    // Get workflow plugin instance
    const workflow = this.pm.get('workflow') as WorkflowPlugin;
    
    // Register our custom JavaScript instruction
    workflow.registerInstruction('custom-js', CustomJsInstruction);
  }
}

export default CustomJsNodeClient;
