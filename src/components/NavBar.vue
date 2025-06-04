<template>
  <nav class="navbar">
    <router-link 
      v-for="route in routes" 
      :key="route.path" 
      :to="route.path"
      class="nav-link"
      active-class="active"
    >
      {{ route.name }}
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { path: '/', name: 'Home' },
        { path: '/declarative-rendering', name: 'Declarative Rendering' },
        { path: '/attribute-bindings', name: 'Attribute Bindings' },
        { path: '/form-bindings', name: 'Form Bindings' },
        { path: '/conditional-rendering', name: 'Conditional Rendering' },
        { path: '/list-rendering', name: 'List Rendering' },
        { path: '/computed-property', name: 'Computed Property' },
        { path: '/lifecycle-template-refs', name: 'Lifecycle & Template Refs' },
        { path: '/watchers', name: 'Watchers' }
      ]
    }
  }
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 1rem 2rem;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-link {
  color: #e6e6e6;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.active {
  background: rgba(0, 150, 255, 0.2);
  color: #4fc3f7;
  font-weight: bold;
}

/* Scrollbar styling */
.navbar::-webkit-scrollbar {
  height: 6px;
}

.navbar::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

.navbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}
</style>