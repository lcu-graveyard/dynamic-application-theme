<template>
  <div id="app">
    <div id="nav">
      Hi
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ThemeConfiguration } from '@fathym-forge/daf-schema-typescript';

@Component({
  components: {
  },
})
export default class DAFTheme extends Vue {
  //  Fields

  //  Properties
  @Prop({default: new ThemeConfiguration()})
  public Theme: ThemeConfiguration;

  //  Constructors
  constructor() {
    super();

    this.Theme = new ThemeConfiguration();
  }

  //  API Methods

  //  Helpers
  
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
