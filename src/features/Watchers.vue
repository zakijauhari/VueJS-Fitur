<template>
  <div class="feature-page">
    <FeatureCard title="Watchers">
      <p>Watchers allow you to perform asynchronous operations in response to changing data.</p>
      
      <div class="demo-section">
        <h3>Example:</h3>
        
        <div class="form-group">
          <label>Ask a yes/no question:</label>
          <input v-model="question" type="text" class="text-input" placeholder="Ask me anything...">
        </div>
        
        <div class="answer-box" :class="{ thinking: isThinking }">
          <p v-if="answer">{{ answer }}</p>
          <p v-else-if="isThinking">Thinking...</p>
          <p v-else>Your answer will appear here</p>
        </div>
        
        <div class="form-group mt-4">
          <label>Watch deep object:</label>
          <input v-model="user.name" type="text" class="text-input" placeholder="Change name">
          <p class="small-text">Check console for deep watch logs</p>
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
        name: 'John',
        age: 30
      }
    }
  },
  watch: {
    // Watching a simple value
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    },
    
    // Deep watching an object
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
          'It is certain.',
          'It is decidedly so.',
          'Without a doubt.',
          'Yes - definitely.',
          'You may rely on it.',
          'As I see it, yes.',
          'Most likely.',
          'Outlook good.',
          'Yes.',
          'Signs point to yes.',
          'Reply hazy, try again.',
          'Ask again later.',
          'Better not tell you now.',
          'Cannot predict now.',
          'Concentrate and ask again.',
          'Don\'t count on it.',
          'My reply is no.',
          'My sources say no.',
          'Outlook not so good.',
          'Very doubtful.'
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