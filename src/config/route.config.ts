export const BASE_PATH = '/vue-notes';

export const routeConfig = {
  home: {
    name: 'home',
    path: `${BASE_PATH}/`,
  },
  notes: {
    name: 'notes',
    path: `${BASE_PATH}/notes`,
    meta: {
      private: true,
    },
  },
  error: {
    name: '404',
    path: `${BASE_PATH}/:pathMatch(.*)*`,
  },
} as const;
