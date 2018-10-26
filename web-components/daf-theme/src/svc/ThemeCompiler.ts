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
        return 'Compiled theme';
    }
}
