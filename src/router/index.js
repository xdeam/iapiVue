import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,

    redirect: { name: 'HomeMenu' },
    children: [
      {
        path: 'home',
        name: 'HomeMenu',
        meta: {
          title: '首页入口'
        },
        component: () => import('../components/CenterCard')
      },
      {
        path: 'ocr',
        name: 'OCR',
        meta: {
          title: 'OCR识别'
        },
        component: () => import('../components/OCRCard')
      },
      {
        path: 'tts',
        name: 'TTS',
        meta: {
          title: 'TTS语音合成'
        },
        component: () => import('../components/TTSCard')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '首页入口'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ocr',
    name: 'Ocr',
    component: () => import('../components/HelloWorld')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
