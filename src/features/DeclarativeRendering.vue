<template>
  <div class="feature-page">
    <FeatureCard title="Declarative Rendering" highlight>
      <p>Vue memperluas HTML standar dengan sintaks template yang memungkinkan kita mendeskripsikan keluaran HTML secara deklaratif berdasarkan status JavaScript.</p>
      
      <div class="demo-section">
        <h3>Contoh : </h3>
        <p>{{ message }}</p>
        <button @click="reverseMessage" class="action-btn">Pesan Terbalik</button>
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
      message: 'Jaki Is Goodboy'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>