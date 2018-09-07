
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/login', component: () => import('pages/user/login') },
      { path: '/profile', component: () => import('pages/user/profile') },
      { path: '/cadastro', component: () => import('pages/user/cadastro') },
      { path: '/myprojeto', component: () => import('pages/myProjeto') },
      { path: '/canvas', component: () => import('pages/ux/canva') },
      { path: '/canvavalor', component: () => import('pages/ux/canvavalor') },
      { path: '/pixar', component: () => import('pages/ux/pixar') },
      { path: '/press', component: () => import('pages/ux/pressrelease') },
      { path: '/pitch', component: () => import('pages/ux/pitch') },
      { path: '/personas', component: () => import('pages/ux/personas') },
      { path: '/mapausuario', component: () => import('pages/ux/mapausuario') },
      { path: '/duplodiamante', component: () => import('pages/ux/duplodiamante') },

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
