<template>
  <div class="feature-page">
    <FeatureCard title="List Rendering">
      <p>Vue menyediakan <code>v-for</code> untuk rendering daftar item.</p>
      
      <div class="demo-section">
        <h3>Contoh : </h3>
        
        <div class="form-group">
          <input v-model="newItem" type="text" class="text-input" placeholder="Tambahkan item baru" @keyup.enter="addItem">
          <button @click="addItem" class="action-btn">Masukkan Item</button>
        </div>
        
        <ul class="item-list">
          <li v-for="(item, index) in items" :key="index" class="item">
            <span>{{ item }}</span>
            <button @click="removeItem(index)" class="remove-btn">×</button>
          </li>
        </ul>
        
        <div class="mt-4">
          <h4>Iterasi Objek : </h4>
          <ul class="object-list">
            <li v-for="(value, key) in user" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
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
      newItem: '',
      items: ['Vue', 'Vite', 'JavaScript', 'HTML', 'CSS'],
      user: {
        Nama: 'Zaki Jauhari',
        Umur: '21',
        Pekerjaan: 'Developer'
      }
    }
  },
  methods: {
    addItem() {
      if (this.newItem.trim()) {
        this.items.push(this.newItem)
        this.newItem = ''
      }
    },
    removeItem(index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.item-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #2a2a2a;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.item:hover {
  background: #333;
  transform: translateX(5px);
}

.remove-btn {
  background: var(--error);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.remove-btn:hover {
  transform: scale(1.1);
}

.object-list {
  list-style: none;
  padding: 0;
}

.object-list li {
  padding: 0.5rem;
  border-bottom: 1px solid #444;
}
</style>