export const routeConfig = {
  home: {
    name: 'home',
    path: '/vue-notes/',
  },
  notes: {
    name: 'notes',
    path: '/vue-notes/notes',
  },
  error: {
    name: '404',
    path: '/vue-notes/:pathMatch(.*)*',
  },
} as const;
