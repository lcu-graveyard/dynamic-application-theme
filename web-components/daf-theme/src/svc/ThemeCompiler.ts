import { IThemeCompiler } from './ThemeCompiler';
import { injectable } from 'inversify';
import { ThemeConfiguration } from '@fathym-forge/daf-schema-typescript';

export interface IThemeCompiler {
    CompileTheme(theme: ThemeConfiguration): string;
}

export const IThemeCompilerType = Symbol.for('IThemeCompiler');

@injectable()
export class ThemeCompiler implements IThemeCompiler {
    //  API Methods
    public CompileTheme(theme: ThemeConfiguration): string {
        return this.processThemeNode(theme.Theme);
    }

    //  Helpers
    protected processThemeNode(node: string | any, key?: string) {
        if (node.substring && !key)
            return `${node}\r\n`;
        else if (node.substring && key)
            return `${key}: ${node};\r\n`;
        else {
            const nodeKeys = Object.keys(node);

            const computed: string[] = [];

            if (key)
                computed.push(`\r\n${key} {\r\n`);

            computed.push(nodeKeys.map((k) => this.processThemeNode(node[k], k)).join(''));

            if (key)
                computed.push('}\r\n');

            return computed.join('');
        }
    }
}
