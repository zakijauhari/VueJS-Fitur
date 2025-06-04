<template>
  <div class="feature-page">
    <FeatureCard title="Computed Property">
      <p>Computed properties di-cache berdasarkan ketergantungan reaktif dan hanya mengevaluasi ulang bila diperlukan.</p>
      
      <div class="demo-section">
        <h3>Contoh:</h3>
        
        <div class="form-group">
          <label>Nama Awal : </label>
          <input v-model="firstName" type="text" class="text-input">
        </div>
        
        <div class="form-group">
          <label>Nama Akhir : </label>
          <input v-model="lastName" type="text" class="text-input">
        </div>
        
        <div class="result-box">
          <h4>Nama Lengkap (Computed):</h4>
          <p>{{ fullName }}</p>
          <p class="small-text">Ini diperbarui secara otomatis ketika salah satu nama berubah</p>
        </div>
        
        <div class="form-group mt-4">
          <label>Input Angka : </label>
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
      firstName: 'Zaki',
      lastName: 'Jauhari',
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