import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _42097ddd = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _41da859c = () => interopDefault(import('../pages/addresses/index.vue' /* webpackChunkName: "pages/addresses/index" */))
const _4f0f131f = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _6d36e18e = () => interopDefault(import('../pages/carpark/index.vue' /* webpackChunkName: "pages/carpark/index" */))
const _4bd64565 = () => interopDefault(import('../pages/cars/index.vue' /* webpackChunkName: "pages/cars/index" */))
const _3193b97e = () => interopDefault(import('../pages/conditions/index.vue' /* webpackChunkName: "pages/conditions/index" */))
const _484f67ce = () => interopDefault(import('../pages/contacts/index.vue' /* webpackChunkName: "pages/contacts/index" */))
const _12491da2 = () => interopDefault(import('../pages/en/index.vue' /* webpackChunkName: "pages/en/index" */))
const _6f796bab = () => interopDefault(import('../pages/reviews/index.vue' /* webpackChunkName: "pages/reviews/index" */))
const _e261db42 = () => interopDefault(import('../pages/tariffs/index.vue' /* webpackChunkName: "pages/tariffs/index" */))
const _0c8a61de = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _4a25e9a4 = () => interopDefault(import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _ce78220c = () => interopDefault(import('../pages/admin/comments/index.vue' /* webpackChunkName: "pages/admin/comments/index" */))
const _2765684c = () => interopDefault(import('../pages/admin/editcar/index.vue' /* webpackChunkName: "pages/admin/editcar/index" */))
const _7a017d3e = () => interopDefault(import('../pages/admin/images/index.vue' /* webpackChunkName: "pages/admin/images/index" */))
const _1bf57bc7 = () => interopDefault(import('../pages/admin/new-post-all/index.vue' /* webpackChunkName: "pages/admin/new-post-all/index" */))
const _6f422f62 = () => interopDefault(import('../pages/admin/orderedgoods/index.vue' /* webpackChunkName: "pages/admin/orderedgoods/index" */))
const _da87b526 = () => interopDefault(import('../pages/en/about/index.vue' /* webpackChunkName: "pages/en/about/index" */))
const _7ff1c67c = () => interopDefault(import('../pages/en/addresses/index.vue' /* webpackChunkName: "pages/en/addresses/index" */))
const _5bdde51e = () => interopDefault(import('../pages/en/carpark/index.vue' /* webpackChunkName: "pages/en/carpark/index" */))
const _7bdc8aee = () => interopDefault(import('../pages/en/contacts/index.vue' /* webpackChunkName: "pages/en/contacts/index" */))
const _5e206f3b = () => interopDefault(import('../pages/en/reviews/index.vue' /* webpackChunkName: "pages/en/reviews/index" */))
const _7d7615ef = () => interopDefault(import('../pages/en/tariffs/index.vue' /* webpackChunkName: "pages/en/tariffs/index" */))
const _4578fe7a = () => interopDefault(import('../pages/admin/orderedgoods/_postId/index.vue' /* webpackChunkName: "pages/admin/orderedgoods/_postId/index" */))
const _38e34109 = () => interopDefault(import('../pages/en/carpark/_id/index.vue' /* webpackChunkName: "pages/en/carpark/_id/index" */))
const _640d4d6c = () => interopDefault(import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _78eef50e = () => interopDefault(import('../pages/carpark/_id/index.vue' /* webpackChunkName: "pages/carpark/_id/index" */))
const _8cd7b460 = () => interopDefault(import('../pages/cars/_id/index.vue' /* webpackChunkName: "pages/cars/_id/index" */))
const _1f6fdd9f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _42097ddd,
      name: "about"
    }, {
      path: "/addresses",
      component: _41da859c,
      name: "addresses"
    }, {
      path: "/admin",
      component: _4f0f131f,
      name: "admin"
    }, {
      path: "/carpark",
      component: _6d36e18e,
      name: "carpark"
    }, {
      path: "/cars",
      component: _4bd64565,
      name: "cars"
    }, {
      path: "/conditions",
      component: _3193b97e,
      name: "conditions"
    }, {
      path: "/contacts",
      component: _484f67ce,
      name: "contacts"
    }, {
      path: "/en",
      component: _12491da2,
      name: "en"
    }, {
      path: "/reviews",
      component: _6f796bab,
      name: "reviews"
    }, {
      path: "/tariffs",
      component: _e261db42,
      name: "tariffs"
    }, {
      path: "/user",
      component: _0c8a61de,
      name: "user"
    }, {
      path: "/admin/auth",
      component: _4a25e9a4,
      name: "admin-auth"
    }, {
      path: "/admin/comments",
      component: _ce78220c,
      name: "admin-comments"
    }, {
      path: "/admin/editcar",
      component: _2765684c,
      name: "admin-editcar"
    }, {
      path: "/admin/images",
      component: _7a017d3e,
      name: "admin-images"
    }, {
      path: "/admin/new-post-all",
      component: _1bf57bc7,
      name: "admin-new-post-all"
    }, {
      path: "/admin/orderedgoods",
      component: _6f422f62,
      name: "admin-orderedgoods"
    }, {
      path: "/en/about",
      component: _da87b526,
      name: "en-about"
    }, {
      path: "/en/addresses",
      component: _7ff1c67c,
      name: "en-addresses"
    }, {
      path: "/en/carpark",
      component: _5bdde51e,
      name: "en-carpark"
    }, {
      path: "/en/contacts",
      component: _7bdc8aee,
      name: "en-contacts"
    }, {
      path: "/en/reviews",
      component: _5e206f3b,
      name: "en-reviews"
    }, {
      path: "/en/tariffs",
      component: _7d7615ef,
      name: "en-tariffs"
    }, {
      path: "/admin/orderedgoods/:postId",
      component: _4578fe7a,
      name: "admin-orderedgoods-postId"
    }, {
      path: "/en/carpark/:id",
      component: _38e34109,
      name: "en-carpark-id"
    }, {
      path: "/admin/:postId",
      component: _640d4d6c,
      name: "admin-postId"
    }, {
      path: "/carpark/:id",
      component: _78eef50e,
      name: "carpark-id"
    }, {
      path: "/cars/:id",
      component: _8cd7b460,
      name: "cars-id"
    }, {
      path: "/",
      component: _1f6fdd9f,
      name: "index"
    }],

    fallback: false
  })
}
