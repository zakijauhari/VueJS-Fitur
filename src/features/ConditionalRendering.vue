<template>
  <div class="feature-page">
    <FeatureCard title="Conditional Rendering">
      <p>Vue provides <code>v-if</code>, <code>v-else</code>, <code>v-else-if</code>, and <code>v-show</code> for conditional rendering.</p>
      
      <div class="demo-section">
        <h3>Example:</h3>
        
        <div class="button-group">
          <button @click="currentView = 'A'" class="action-btn">Show A</button>
          <button @click="currentView = 'B'" class="action-btn">Show B</button>
          <button @click="currentView = 'C'" class="action-btn">Show C</button>
        </div>
        
        <div class="conditional-section">
          <div v-if="currentView === 'A'" class="conditional-block a">
            <h4>Component A</h4>
            <p>This is shown when A is selected</p>
          </div>
          <div v-else-if="currentView === 'B'" class="conditional-block b">
            <h4>Component B</h4>
            <p>This is shown when B is selected</p>
          </div>
          <div v-else class="conditional-block c">
            <h4>Component C</h4>
            <p>This is shown when C is selected</p>
          </div>
        </div>
        
        <div class="mt-4">
          <button @click="toggleShow" class="action-btn">
            {{ showContent ? 'Hide' : 'Show' }} Content (v-show)
          </button>
          <div v-show="showContent" class="conditional-block">
            <p>This content is toggled with v-show (just changes display CSS property)</p>
          </div>
        </div>
      </div>
    </FeatureCard>
  </div>
</template>

<script>
import FeatureCard from '../components/FeatureCard.vue'

export default {
  components: { FeatureCard },
  data() {
    return {
      currentView: 'A',
      showContent: true
    }
  },
  methods: {
    toggleShow() {
      this.showContent = !this.showContent
    }
  }
}
</script>

<style scoped>
.button-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.conditional-section {
  min-height: 150px;
  position: relative;
}

.conditional-block {
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.conditional-block.a {
  background: rgba(129, 199, 132, 0.2);
  border-left: 4px solid var(--success);
}

.conditional-block.b {
  background: rgba(255, 183, 77, 0.2);
  border-left: 4px solid var(--warning);
}

.conditional-block.c {
  background: rgba(79, 195, 247, 0.2);
  border-left: 4px solid var(--accent);
}
</style>