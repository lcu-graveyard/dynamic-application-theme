<template>
  <div id="app">
    <div id="nav">
      {{theme}} {{Test}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator';
import { ThemeConfiguration } from '@smart-matrix/smart-schema-typescript';
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
  @Prop({default: false})
  public debug!: boolean;

  @Prop({default: () => ({})})
  public theme!: ThemeConfiguration;

  //  Fields
  protected themeCompiler: IThemeCompiler;

  //  Properties
  public get CompiledTheme(): string {
    return this.themeCompiler.CompileTheme(this.theme);
  }

  //  Constructors
  constructor() {
    super();

    this.themeCompiler = IoC.get<IThemeCompiler>(IThemeCompilerType);

    this.theme = {
      Variables: [
      ],
      Theme: {
        body: {
          height: '100%',
          margin: '0',
        },
      },
    };
  }

  //  Life Cycle

  //  API Methods

  //  Helpers
}
</script>

<style lang="scss">
</style>
