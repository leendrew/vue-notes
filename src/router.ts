import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { routeConfig, envConfig } from '@/config';

const routes = [
  {
    name: routeConfig.home.name,
    path: routeConfig.home.path,
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    name: routeConfig.notes.name,
    path: routeConfig.notes.path,
    component: () => import('@/pages/NotesPage.vue'),
  },
  {
    name: routeConfig.error.name,
    path: routeConfig.error.path,
    component: () => import('@/pages/404Page.vue'),
  },
] satisfies RouteRecordRaw[];

export const router = createRouter({
  history: envConfig.isDev ? createWebHistory() : createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   //
// });
