<template>
  <div class="feature-page">
    <FeatureCard title="Attribute Bindings">
      <p>Vue menggunakan sistem <code>v-bind</code> directive atau <code>:</code> singkatan untuk mengikat atribut secara dinamis ke expression.</p>
      
      <div class="demo-section">
        <h3>Contoh:</h3>
        <div :class="{ active: isActive }" class="bindable-div">
         Klik togel maka akan terjadi perubahan
        </div>
        <button @click="toggleActive" class="action-btn">
          Toggle Active Class
        </button>
        
        <div class="mt-4">
          <input v-model="imageUrl" type="text" placeholder="Enter image URL" class="text-input">
          <img :src="imageUrl" alt="Dynamic image" class="bound-image" v-if="imageUrl">
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
      isActive: false,
      imageUrl: 'https://picsum.photos/200/100'
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
.bindable-div {
  padding: 1rem;
  margin: 1rem 0;
  background: #2a2a2a;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.bindable-div.active {
  background: var(--accent-dark);
  color: white;
  transform: scale(1.02);
}

.bound-image {
  margin-top: 1rem;
  max-width: 100%;
  border-radius: 4px;
  border: 2px solid var(--accent);
}
</style>