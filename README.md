# NocoBase Custom JavaScript Node Plugin

This plugin adds a custom JavaScript node to NocoBase workflows, allowing users to execute custom JavaScript code within their workflows.

## Installation

```bash
npm install @buzz-code/custom-js-node
```

## Features

- Execute custom JavaScript code in workflows
- Access workflow context variables
- Full TypeScript support
- Internationalization support (English and Chinese)

## Usage

1. Add the plugin to your NocoBase application
2. Create or edit a workflow
3. Add a "Custom JavaScript" node
4. Write your JavaScript code in the code editor
5. Use the context object to access:
   - `context.input` - Input data from previous node
   - `context.execution` - Current workflow execution
   - `context.node` - Current node instance
   - `context.processor` - Workflow processor

### Example Code

```javascript
// Double the input value
const { input } = context;
return {
  result: input.value * 2
};
```

### Error Handling

The code execution is wrapped in a try-catch block. If your code throws an error, the node will fail gracefully and report the error message.

```javascript
// Example with error handling
try {
  const { input } = context;
  if (!input.value) {
    throw new Error('Input value is required');
  }
  return {
    result: input.value * 2
  };
} catch (error) {
  throw new Error('Calculation failed: ' + error.message);
}
```

## Security Considerations

The code is executed in a sandboxed environment using the Function constructor. However, you should still be careful about what code you allow to be executed, as it has access to the workflow context.

## License

MIT
