<template>
  <div class="feature-page">
    <FeatureCard title="Computed Property">
      <p>Computed properties are cached based on their reactive dependencies and only re-evaluate when needed.</p>
      
      <div class="demo-section">
        <h3>Example:</h3>
        
        <div class="form-group">
          <label>First Name:</label>
          <input v-model="firstName" type="text" class="text-input">
        </div>
        
        <div class="form-group">
          <label>Last Name:</label>
          <input v-model="lastName" type="text" class="text-input">
        </div>
        
        <div class="result-box">
          <h4>Full Name (Computed):</h4>
          <p>{{ fullName }}</p>
          <p class="small-text">This updates automatically when either name changes</p>
        </div>
        
        <div class="form-group mt-4">
          <label>Add Numbers:</label>
          <input v-model.number="number1" type="number" class="text-input" style="width: 80px;">
          <span> + </span>
          <input v-model.number="number2" type="number" class="text-input" style="width: 80px;">
          <span> = {{ sum }}</span>
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
      firstName: 'John',
      lastName: 'Doe',
      number1: 0,
      number2: 0
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    sum() {
      return this.number1 + this.number2
    }
  }
}
</script>

<style scoped>
.result-box {
  background: rgba(79, 195, 247, 0.1);
  padding: 1rem;
  border-radius: 4px;
  border-left: 4px solid var(--accent);
  margin: 1rem 0;
}

.small-text {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
}
</style>