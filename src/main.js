// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './assets/css/tailwind.css'
import DefaultLayout from '~/layouts/Default.vue'
import VueScrollactive from 'vue-scrollactive';
import VueCollapse from 'vue2-collapse'

//export default function (Vue, { router, head, isClient }) {

export default function (Vue, { head }) {

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  Vue.use(VueCollapse);

  Vue.use(VueScrollactive);

  //Vue.prototype.$NavScroll = NavScroll;

  // Add attributes to BODY tag
  head.bodyAttrs = { class: 'bg-white' };

    head.link.push({
      rel: 'stylesheet',
      href: "https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    });
    head.link.push({
      href: "/assets/css/lk.css"
    });

  }
