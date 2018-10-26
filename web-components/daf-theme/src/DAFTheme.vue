<template>
  <div id="app">
    <div id="nav">
      {{theme}} {{Test}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator';
import { ThemeConfiguration } from '@fathym-forge/daf-schema-typescript';
import IoC, { IoCType } from './inversify.config';
import { ThemeCompiler, IThemeCompilerType, IThemeCompiler } from './svc/ThemeCompiler';
import { Container } from 'inversify';

@Component({
  components: {
  },
  provide: {
  },
})
export default class DAFTheme extends Vue {
  //  Attributes
  @Prop({default: () => ({})})
  public theme: ThemeConfiguration;

  //  Fields
  protected themeCompiler: IThemeCompiler;

  //  Properties
  public get Test(): string {
    return this.themeCompiler.CompileTheme({});
  }

  //  Constructors
  constructor() {
    super();

    this.themeCompiler = IoC.get<IThemeCompiler>(IThemeCompilerType);
  }

  //  Life Cycle

  //  API Methods

  //  Helpers
}
</script>

<style lang="scss">
</style>
