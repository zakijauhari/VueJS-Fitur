<template>
  <div class="feature-page">
    <FeatureCard title="Watchers">
      <p>Watchers memungkinkan Anda melakukan operasi asinkron sebagai respons terhadap perubahan data.</p>

      <div class="demo-section">
        <h3>Contoh : </h3>

        <div class="form-group">
          <label>Ajukan pertanyaan ya/tidak:</label>
          <input v-model="question" type="text" class="text-input" placeholder="Tanyakan apa saja kepada saya...">
        </div>

        <div class="answer-box" :class="{ thinking: isThinking }">
          <p v-if="answer">{{ answer }}</p>
          <p v-else-if="isThinking">Berpikir...</p>
          <p v-else>Jawaban Anda akan muncul di sini</p>
        </div>

        <div class="form-group mt-4">
          <label>Watch objek yang dalam : </label>
          <input v-model="user.name" type="text" class="text-input" placeholder="Ubah nama">
          <p class="small-text">Periksa Console Log untuk watch log</p>
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
      question: '',
      answer: '',
      isThinking: false,
      user: {
        name: 'Zaki',
        age: 30
      }
    }
  },
  watch: {
    
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    },

   
    user: {
      handler(newVal, oldVal) {
        console.log('User changed:', newVal)
      },
      deep: true
    }
  },
  methods: {
    async getAnswer() {
      this.isThinking = true
      this.answer = ''

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))

        const answers = [
          'Sudah pasti.',
          'Sudah pasti.',
          'Tanpa keraguan.',
          'Ya - pasti.',
          'Anda dapat mengandalkannya.',
          'Seperti yang saya lihat, ya.',
          'Kemungkinan besar.',
          'Prospeknya bagus.',
          'Ya.',
          'Tanda-tanda mengarah pada ya.',
          'Jawabannya tidak jelas, coba lagi. ',
          'Tanyakan lagi nanti.',
          'Lebih baik tidak memberi tahu Anda sekarang.',
          'Tidak bisa memprediksi sekarang.',
          'Berkonsentrasi dan tanyakan lagi.',
          'Jangan mengandalkannya.',
          'Jawaban saya adalah tidak.',
          'Sumber saya mengatakan tidak.',
          'Prospeknya kurang bagus.',
          'Sangat meragukan.'
        ]

        this.answer = answers[Math.floor(Math.random() * answers.length)]
      } finally {
        this.isThinking = false
      }
    }
  }
}
</script>

<style scoped>
.answer-box {
  background: rgba(129, 199, 132, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-left: 4px solid var(--success);
  transition: all 0.3s ease;
}

.answer-box.thinking {
  background: rgba(255, 183, 77, 0.1);
  border-left: 4px solid var(--warning);
}
</style>