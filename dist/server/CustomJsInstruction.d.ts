import { Instruction } from '@nocobase/plugin-workflow';
export default class CustomJsInstruction extends Instruction {
    run(node: any, input: any, processor: any): Promise<{
        status: 1;
        result: any;
        error?: undefined;
    } | {
        status: -1;
        error: any;
        result?: undefined;
    }>;
}
