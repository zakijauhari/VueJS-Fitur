<template>
  <div class="feature-page">
    <FeatureCard title="Form Bindings">
      <p>Vue menyediakan <code>v-model</code> untuk two-way binding pada formulir input.</p>
      
      <div class="demo-section">
        <h3>Contoh : </h3>
        
        <div class="form-group">
          <label>Masukkan Teks : </label>
          <input v-model="textValue" type="text" class="text-input">
          <p>Nilai : {{ textValue }}</p>
        </div>
        
        <div class="form-group">
          <label>Centang Kotak : </label>
          <input v-model="checked" type="checkbox">
          <p>Memeriksa : {{ checked }}</p>
        </div>
        
        <div class="form-group">
          <label>Radio Button : </label>
          <div>
            <input v-model="radioValue" type="radio" value="Option 1" id="option1">
            <label for="option1">Pilihan 1</label>
          </div>
          <div>
            <input v-model="radioValue" type="radio" value="Option 2" id="option2">
            <label for="option2">Pilihan 2</label>
          </div>
          <p>Pilihan : {{ radioValue }}</p>
        </div>
        
        <div class="form-group">
          <label>Pilih : </label>
          <select v-model="selectedOption" class="select-input">
            <option disabled value="">Silahkan pilih</option>
            <option>Pilihan A</option>
            <option>Pilihan B</option>
            <option>Pilihan C</option>
          </select>
          <p>Pilihan : {{ selectedOption }}</p>
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
      textValue: '',
      checked: false,
      radioValue: 'Option 1',
      selectedOption: ''
    }
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--accent);
}

.text-input, .select-input {
  width: 100%;
  padding: 0.5rem;
  background: #2a2a2a;
  border: 1px solid #444;
  border-radius: 4px;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.text-input:focus, .select-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 2px rgba(79, 195, 247, 0.2);
}
</style>