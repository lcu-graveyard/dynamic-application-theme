import { Container } from 'inversify';
import 'reflect-metadata';
import { IThemeCompiler, IThemeCompilerType, ThemeCompiler } from './svc/ThemeCompiler';

const IoC: Container = new Container();

IoC.bind<IThemeCompiler>(IThemeCompilerType).to(ThemeCompiler);

export default IoC;

export const IoCType = Symbol.for('IoC');
