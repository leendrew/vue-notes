import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { routeConfig, envConfig } from '@/config';

const routes = [
  {
    name: routeConfig.home.name,
    path: routeConfig.home.path,
    component: () => import('@/pages/HomePage.vue'),
  },
] satisfies RouteRecordRaw[];

export const router = createRouter({
  history: envConfig.isDev ? createWebHistory() : createWebHashHistory(),
  routes,
});
