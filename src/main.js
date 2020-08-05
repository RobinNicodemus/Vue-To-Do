import Vue from 'vue'
import App from './App.vue'
import { MdField, MdButton, MdCheckbox, MdList, MdIcon, MdLayout } from 'vue-material/dist/components';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/black-green-dark.css'

Vue.use(MdField);
Vue.use(MdButton);
Vue.use(MdList);
Vue.use(MdCheckbox);
Vue.use(MdIcon);
Vue.use(MdLayout);
Vue.use(VueMaterial);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
