<template>
  <div class="feature-page">
    <FeatureCard title="Declarative Rendering" highlight>
      <p>Vue extends standard HTML with a template syntax that allows us to declaratively describe HTML output based on JavaScript state.</p>
      
      <div class="demo-section">
        <h3>Example:</h3>
        <p>{{ message }}</p>
        <button @click="reverseMessage" class="action-btn">Reverse Message</button>
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
      message: 'Hello Vue!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>