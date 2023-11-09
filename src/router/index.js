import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import UserIndex from '../views/users/index.vue'
import UserInfo from '../views/users/userinfo.vue'
import UserCreate from '../views/users/UserCreate.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      beforeEnter: (to, from, next) => {
        console.log('Before Enter START')
        console.log(to)
        console.log(from)
        console.log('Before Enter END')
        next()
      }
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    // { path: '/about/:id', component: AboutView },
    { path: '/about/:id/:name?', component: AboutView },
    {
      path: '/users',
      name: 'users',
      component: UserIndex,
      children: [
        {
          path: ':id',
          component: UserInfo,
          name: 'userinfopath'
        },
        {
          path: 'create',
          component: UserCreate,
          name: 'createpath'
        }
      ]
    },

    // { path: '/users/:id', component: UserInfo },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

router.beforeEach((to, from, next) => {
  console.clear()
  console.log(from)
  console.log('*********************')
  console.log(to)
  console.log('*********************')

  if (to.name === 'createpath') {
    next({
      name: 'home',
      query: {
        access: 'denied'
      }
    })
  }
  next()
})

export default router
