import Vue from 'vue';
import DAFTheme from './DAFTheme.vue';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

import wrap from '@vue/web-component-wrapper';

const CustomElement = wrap(Vue, DAFTheme);

window.customElements.define('daf-theme', CustomElement);
