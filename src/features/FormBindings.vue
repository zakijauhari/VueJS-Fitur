<template>
  <div class="feature-page">
    <FeatureCard title="Form Bindings">
      <p>Vue provides <code>v-model</code> for two-way binding on form inputs.</p>
      
      <div class="demo-section">
        <h3>Example:</h3>
        
        <div class="form-group">
          <label>Text Input:</label>
          <input v-model="textValue" type="text" class="text-input">
          <p>Value: {{ textValue }}</p>
        </div>
        
        <div class="form-group">
          <label>Checkbox:</label>
          <input v-model="checked" type="checkbox">
          <p>Checked: {{ checked }}</p>
        </div>
        
        <div class="form-group">
          <label>Radio Buttons:</label>
          <div>
            <input v-model="radioValue" type="radio" value="Option 1" id="option1">
            <label for="option1">Option 1</label>
          </div>
          <div>
            <input v-model="radioValue" type="radio" value="Option 2" id="option2">
            <label for="option2">Option 2</label>
          </div>
          <p>Selected: {{ radioValue }}</p>
        </div>
        
        <div class="form-group">
          <label>Select:</label>
          <select v-model="selectedOption" class="select-input">
            <option disabled value="">Please select</option>
            <option>Option A</option>
            <option>Option B</option>
            <option>Option C</option>
          </select>
          <p>Selected: {{ selectedOption }}</p>
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