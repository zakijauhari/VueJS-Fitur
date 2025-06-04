<template>
  <div class="app-container">
    <aside class="sidebar">
      <div class="logo">Vue Features</div>
      <nav class="nav-menu">
        <router-link 
          v-for="route in routes" 
          :key="route.path" 
          :to="route.path"
          class="nav-link"
          active-class="active"
        >
          <span class="nav-icon">{{ route.icon }}</span>
          <span class="nav-text">{{ route.name }}</span>
        </router-link>
      </nav>
    </aside>
    
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { path: '/', name: 'Home', icon: '🏠' },
        { path: '/declarative-rendering', name: 'Declarative Rendering', icon: '✨' },
        { path: '/attribute-bindings', name: 'Attribute Bindings', icon: '🔗' },
        { path: '/form-bindings', name: 'Form Bindings', icon: '📝' },
        { path: '/conditional-rendering', name: 'Conditional Rendering', icon: '❓' },
        { path: '/list-rendering', name: 'List Rendering', icon: '📜' },
        { path: '/computed-property', name: 'Computed Property', icon: '🧮' },
        { path: '/watchers', name: 'Watchers', icon: '👀' }
      ]
    }
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
  background-color: var(--bg-color);
}

.sidebar {
  width: 250px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  padding: 1.5rem 1rem;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  transition: all 0.3s ease;
  z-index: 100;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  padding: 0 0.5rem;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  color: var(--text-primary);
  text-decoration: none;
  transition: all 0.3s ease;
  gap: 0.75rem;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.nav-link.active {
  background: rgba(79, 195, 247, 0.2);
  color: var(--accent);
  font-weight: 500;
}

.nav-icon {
  font-size: 1.1rem;
}

.main-content {
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
}

/* Animation */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar {
    width: 70px;
    padding: 1rem 0.5rem;
  }
  
  .logo {
    justify-content: center;
    font-size: 1.2rem;
  }
  
  .nav-text {
    display: none;
  }
  
  .nav-link {
    justify-content: center;
    padding: 0.75rem 0;
  }
  
  .main-content {
    margin-left: 70px;
    padding: 1.5rem;
  }
}
</style>