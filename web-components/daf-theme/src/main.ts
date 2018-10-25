import Vue from 'vue';
import App from './DAFTheme.vue';
// import wrap from '@vue/web-component-wrapper';
const wrapper = require('@vue/web-component-wrapper');

const CustomElement = wrapper.wrap(Vue, App);

window.customElements.define('daf-theme', CustomElement);
