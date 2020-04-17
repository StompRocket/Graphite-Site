import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Graphite Writer | Create documents online for free',
      metaTags: [
        {
          name: 'description',
          content: 'Graphite Writer is an open source web application that enables you to write, edit, view, and share documents from anywhere.'
        },
        {
          property: 'og:description',
          content: 'Graphite Writer is an open source web application that enables you to write, edit, view, and share documents from anywhere.'
        }
      ]
    }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    meta: {
      title: 'Graphite Writer | Privacy Policy',
      metaTags: [
        {
          name: 'description',
          content: 'Graphite Writer is an open source web application that enables you to write, edit, view, and share documents from anywhere.'
        },
        {
          property: 'og:description',
          content: 'Graphite Writer is an open source web application that enables you to write, edit, view, and share documents from anywhere.'
        }
      ]
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Privacy.vue')
  },
    {
      path: '/termsofservice',
      name: 'Terms',
      meta: {
        title: 'Graphite Writer | Terms and conditions',
        metaTags: [
          {
            name: 'description',
            content: 'Graphite Writer is an open source web application that enables you to write, edit, view, and share documents from anywhere.'
          },
          {
            property: 'og:description',
            content: 'Graphite Writer is an open source web application that enables you to write, edit, view, and share documents from anywhere.'
          }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Terms.vue')
    },
    {
      path: '*',
      redirect: "/"
    },
    {
      path: '/shared',
      name: 'Shared',
      meta: {
        title: 'Graphite Writer | Shared Document',
        metaTags: [
          {
            name: 'description',
            content: 'Graphite Writer is an open source web application that enables you to write, edit, view, and share documents from anywhere.'
          },
          {
            property: 'og:description',
            content: 'Graphite Writer is an open source web application that enables you to write, edit, view, and share documents from anywhere.'
          }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/shared.vue')
    },
    {
      path: '/edit',
      name: 'Edit',
      meta: {
        title: 'Graphite Writer | Document',
        metaTags: [
          {
            name: 'description',
            content: 'Graphite Writer is an open source web application that enables you to write, edit, view, and share documents from anywhere.'
          },
          {
            property: 'og:description',
            content: 'Graphite Writer is an open source web application that enables you to write, edit, view, and share documents from anywhere.'
          }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/doc.vue')
    },
    {
      path: '*',
      redirect: "/"
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});
export default router
