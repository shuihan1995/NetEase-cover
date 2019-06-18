import MSite from '../pages/MSite/MSite.vue'
import Categorys from '../pages/Categorys/Categorys.vue'
import Shops from '../pages/Shops/Shops.vue'
import Cart from '../pages/Cart/Cart.vue'
import Personal from '../pages/Personal/Personal.vue'

export default [
  {
    path: '/msite',
    component: MSite,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/categorys',
    component: Categorys,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/shops',
    component: Shops,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/personal',
    component: Personal,
    meta: {
      isShowFoot: true
    }
  },
  { // 当访问根路径自动重定向到/miste
    path: '/',
    redirect: '/msite'
  }
]
