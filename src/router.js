import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: () => import('./features/Home.vue'),
    meta: { title: 'Home' }
  },
  { 
    path: '/declarative-rendering', 
    name: 'DeclarativeRendering', 
    component: () => import('./features/DeclarativeRendering.vue'),
    meta: { title: 'Declarative Rendering' }
  },
  { 
    path: '/attribute-bindings', 
    name: 'AttributeBindings', 
    component: () => import('./features/AttributeBindings.vue'),
    meta: { title: 'Attribute Bindings' }
  },
  { 
    path: '/form-bindings', 
    name: 'FormBindings', 
    component: () => import('./features/FormBindings.vue'),
    meta: { title: 'Form Bindings' }
  },
  { 
    path: '/conditional-rendering', 
    name: 'ConditionalRendering', 
    component: () => import('./features/ConditionalRendering.vue'),
    meta: { title: 'Conditional Rendering' }
  },
  { 
    path: '/list-rendering', 
    name: 'ListRendering', 
    component: () => import('./features/ListRendering.vue'),
    meta: { title: 'List Rendering' }
  },
  { 
    path: '/computed-property', 
    name: 'ComputedProperty', 
    component: () => import('./features/ComputedProperty.vue'),
    meta: { title: 'Computed Property' }
  },
  { 
    path: '/watchers', 
    name: 'Watchers', 
    component: () => import('./features/Watchers.vue'),
    meta: { title: 'Watchers' }
  },
 
 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update document title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | Vue Features` : 'Vue Features'
  next()
})

export default router