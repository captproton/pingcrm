// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()

import '../styles/application.scss'

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

import Vue from 'vue'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import PortalVue from 'portal-vue'
Vue.use(PortalVue)

import axios from 'axios'

// Tell Axios to send the CSRF token (taken from the cookie)
// in the header named as "X-CSRF-Token", as this is the name
// expected by Rails
axios.defaults.xsrfHeaderName = 'X-CSRF-Token'

import MatomoTracker from '@/utils/matomo-tracker'
const matomo = new MatomoTracker()

// Matomo integration is tricky, because Inertia doesn't have hooks yet
if (matomo.enabled) {
  Vue.mixin({
    mounted() {
      if (this._vueMeta === true) {
        // A Vue component with vueMeta seems to be a Page, so track the visit -
        // but wait a bit to allow VueMeta to update the document.title
        setTimeout(() => {
          matomo.trackPageView()
        }, 100)
      }
    }
  })
}

import {
  InertiaApp
} from '@inertiajs/inertia-vue'
Vue.use(InertiaApp)

import Routes from '../routes.js';
Vue.prototype.$routes = Routes

const app = document.getElementById('app')

new Vue({
  metaInfo: {
    title: 'Loading…',
    titleTemplate: '%s | PingCRM',
  },
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(app)
