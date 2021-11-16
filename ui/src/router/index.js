import Vue from 'vue';
import VueRouter from 'vue-router';

import app from '@/main';
import store from '@/store';

import { checkLogin } from '@/api/auth.api';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    component: () => import(/* webpackChunkName: "404" */ '@/views/notfound/Notfound.vue'),
  },
  {
    path: '/',
    name: 'Login',
    meta: {
      name: 'login',
      requiresAuth: false,
      requiredLevel: [],
      showBackTop: false,
      showFooter: false,
      showNavi: false,
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue'),
  },
  {
    path: '/start',
    name: 'Start',
    meta: {
      name: 'start',
      requiresAuth: true,
      requiredLevel: ['admin'],
      showBackTop: false,
      showFooter: false,
      showNavi: false,
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/start/Start.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      name: 'dashboard',
      requiresAuth: true,
      requiredLevel: [/*"cameras:access", */ 'dashboard:access'],
      showBackTop: true,
      showFooter: true,
      showNavi: true,
    },
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/Dashboard.vue'),
  },
  {
    path: '/cameras',
    name: 'Cameras',
    meta: {
      name: 'cameras',
      requiresAuth: true,
      requiredLevel: ['cameras:access'],
      showBackTop: true,
      showFooter: true,
      showNavi: true,
    },
    component: () => import(/* webpackChunkName: "cameras" */ '@/views/cameras/Cameras.vue'),
  },
  {
    path: '/cameras/:name',
    name: 'Camera',
    meta: {
      name: 'camera',
      requiresAuth: true,
      requiredLevel: ['cameras:access'],
      showBackTop: true,
      showFooter: true,
      showNavi: true,
    },
    component: () => import(/* webpackChunkName: "camera" */ '@/views/camera/Camera.vue'),
  },
  {
    path: '/recordings',
    name: 'Recordings',
    meta: {
      name: 'recordings',
      requiresAuth: true,
      requiredLevel: ['recordings:access'],
      showBackTop: true,
      showFooter: true,
      showNavi: true,
    },
    component: () => import(/* webpackChunkName: "recordings" */ '@/views/recordings/Recordings.vue'),
  },
  {
    path: '/notifications',
    name: 'Notifications',
    meta: {
      name: 'notifications',
      requiresAuth: true,
      requiredLevel: ['notifications:access'],
      showBackTop: true,
      showFooter: true,
      showNavi: true,
    },
    component: () => import(/* webpackChunkName: "notifications" */ '@/views/notifications/Notifications.vue'),
  },
  {
    path: '/camview',
    name: 'Camview',
    meta: {
      name: 'camview',
      requiresAuth: true,
      requiredLevel: [/*"cameras:access", */ 'camview:access'],
      showBackTop: false,
      showFooter: false,
      showNavi: false,
    },
    component: () => import(/* webpackChunkName: "camview" */ '@/views/camview/Camview.vue'),
  },
  {
    path: '/settings',
    redirect: '/settings/profile',
    name: 'settings',
    meta: {
      name: 'settings',
      requiresAuth: true,
      requiredLevel: ['settings:access'],
      showBackTop: true,
      showFooter: true,
      showNavi: true,
    },
    component: () => import(/* webpackChunkName: "settings" */ '@/views/settings/Settings.vue'),
    children: [
      {
        path: 'profile',
        component: () => import(/* webpackChunkName: "settings" */ '@/views/settings/pages/profile.vue'),
        meta: {
          name: 'profile',
          parentName: 'settings',
          transitionName: 'slide',
          requiresAuth: true,
          requiredLevel: ['settings:profile:access'],
          showBackTop: true,
          showFooter: true,
          showNavi: true,
        },
      },
      {
        path: 'general',
        component: () => import(/* webpackChunkName: "settings" */ '@/views/settings/pages/general.vue'),
        meta: {
          name: 'general',
          parentName: 'settings',
          transitionName: 'slide',
          requiresAuth: true,
          requiredLevel: ['settings:general:access'],
          showBackTop: true,
          showFooter: true,
          showNavi: true,
        },
      },
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "settings" */ '@/views/settings/pages/dashboard.vue'),
        meta: {
          name: 'dashboard',
          parentName: 'settings',
          transitionName: 'slide',
          requiresAuth: true,
          requiredLevel: ['settings:dashboard:access'],
          showBackTop: true,
          showFooter: true,
          showNavi: true,
        },
      },
      {
        path: 'cameras',
        component: () => import(/* webpackChunkName: "settings" */ '@/views/settings/pages/cameras.vue'),
        meta: {
          name: 'cameras',
          parentName: 'settings',
          transitionName: 'slide',
          requiresAuth: true,
          requiredLevel: ['settings:cameras:access'],
          showBackTop: true,
          showFooter: true,
          showNavi: true,
        },
      },
      {
        path: 'recordings',
        component: () => import(/* webpackChunkName: "settings" */ '@/views/settings/pages/recordings.vue'),
        meta: {
          name: 'recordings',
          parentName: 'settings',
          transitionName: 'slide',
          requiresAuth: true,
          requiredLevel: ['settings:recordings:access'],
          showBackTop: true,
          showFooter: true,
          showNavi: true,
        },
      },
      {
        path: 'notifications',
        component: () => import(/* webpackChunkName: "settings" */ '@/views/settings/pages/notifications.vue'),
        meta: {
          name: 'notifications',
          parentName: 'settings',
          transitionName: 'slide',
          requiresAuth: true,
          requiredLevel: ['settings:notifications:access'],
          showBackTop: true,
          showFooter: true,
          showNavi: true,
        },
      },
      {
        path: 'camview',
        component: () => import(/* webpackChunkName: "settings" */ '@/views/settings/pages/camview.vue'),
        meta: {
          name: 'camview',
          parentName: 'settings',
          transitionName: 'slide',
          requiresAuth: true,
          requiredLevel: ['settings:camview:access'],
          showBackTop: true,
          showFooter: true,
          showNavi: true,
        },
      },
      {
        path: 'system',
        component: () => import(/* webpackChunkName: "settings" */ '@/views/settings/pages/system.vue'),
        meta: {
          name: 'system',
          parentName: 'settings',
          transitionName: 'slide',
          requiresAuth: true,
          requiredLevel: ['admin'],
          showBackTop: true,
          showFooter: true,
          showNavi: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0, behavior: 'smooth' });
      }, 250);
    });
  },
});

router.beforeEach(async (to, from, next) => {
  const user = store.getters['auth/user'];

  if (user && user.access_token) {
    try {
      await checkLogin();

      if (to.meta.requiredLevel.length > 0) {
        const granted = user.permissionLevel.some(
          (level) => to.meta.requiredLevel.includes(level) || level === 'admin'
        );
        if (!granted) {
          app.$toast.error(`${app.$t(to.meta.name)}: ${app.$t('permission_required')}`);
          return next(false);
        }
      }

      const lastRouteName = localStorage.getItem('lastPage');
      const shouldRedirect = Boolean(to.meta.name === 'login' && lastRouteName);

      if (shouldRedirect) {
        next({ path: lastRouteName });
      } else {
        next();
      }
    } catch (err) {
      console.log(err);

      await store.dispatch('auth/logout');
      next('/');
    }
  } else {
    if (to.meta.name !== 'login') {
      next('/');
    } else {
      next();
    }
  }
});

router.afterEach((to) => {
  if (to.meta.name !== 'login') {
    localStorage.setItem('lastPage', to.path);
  }
});

export default router;
