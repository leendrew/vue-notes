import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '@/store';
import { routeConfig } from '@/config';

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
    meta: routeConfig.notes.meta,
  },
  {
    name: routeConfig.error.name,
    path: routeConfig.error.path,
    component: () => import('@/pages/404Page.vue'),
  },
] satisfies RouteRecordRaw[];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore();

  if (to?.meta?.private && !authStore.isAuth) {
    return next({ name: routeConfig.home.name });
  }

  return next();
});
