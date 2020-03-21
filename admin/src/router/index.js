import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import CategoryEdit from '../views/CategoryEdit.vue';
import CategoryList from '../views/CategoryList.vue';
import ItemList from '../views/ItemList.vue';
import ItemEdit from '../views/ItemEdit.vue';
import HeroList from '../views/HeroList.vue';
import HeroEdit from '../views/HeroEdit.vue';
import ArticleList from '../views/ArticleList.vue';
import ArticleEdit from '../views/ArticleEdit.vue';
import AdList from '../views/AdList.vue';
import AdEdit from '../views/AdEdit.vue';
import AdminUserList from '../views/AdminUserList.vue';
import AdminUserEdit from '../views/AdminUserEdit.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  // 客户端要对访问进行鉴权
  // 使用 导航守卫
  // 登陆页面
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // 通过该元数据进行鉴权
    meta: { isPublic: true }
  },
  // 主页面
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/categories/create',
        component: CategoryEdit
      },
      {
        path: '/categories/list',
        component: CategoryList
      },
      {
        path: '/categories/edit/:id',
        component: CategoryEdit,
        props: true
      },
      {
        path: '/items/create',
        component: ItemEdit
      },
      {
        path: '/items/list',
        component: ItemList
      },
      {
        path: '/items/edit/:id',
        component: ItemEdit,
        props: true
      },
      {
        path: '/articles/create',
        component: ArticleEdit
      },
      {
        path: '/articles/list',
        component: ArticleList
      },
      {
        path: '/articles/edit/:id',
        component: ArticleEdit,
        props: true
      },
      {
        path: '/heroes/create',
        component: HeroEdit
      },
      {
        path: '/heroes/list',
        component: HeroList
      },
      {
        path: '/heroes/edit/:id',
        component: HeroEdit,
        props: true
      },
      {
        path: '/ads/create',
        component: AdEdit
      },
      {
        path: '/ads/list',
        component: AdList
      },
      {
        path: '/ads/edit/:id',
        component: AdEdit,
        props: true
      },
      {
        path: '/admin_users/create',
        component: AdminUserEdit
      },
      {
        path: '/admin_users/list',
        component: AdminUserList
      },
      {
        path: '/admin_users/edit/:id',
        component: AdminUserEdit,
        props: true
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login');
  }
  next();
});

export default router;
