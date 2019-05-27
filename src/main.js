// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './assets/css/tailwind.css'

import DefaultLayout from '~/layouts/Default.vue'

//export default function (Vue, { router, head, isClient }) {
  export default function (Vue, { head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  // Add attributes to BODY tag
  head.bodyAttrs = { class: 'bg-gray-600' }


}
