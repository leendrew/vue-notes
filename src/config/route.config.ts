export const routeConfig = {
  home: {
    name: 'home',
    path: '/',
  },
  error: {
    name: '404',
    path: '/:pathMatch(.*)*',
  },
} as const;
