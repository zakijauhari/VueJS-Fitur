<template>
  <div class="feature-card" :class="{ 'pulse': highlight }">
    <h2 class="feature-title">{{ title }}</h2>
    <div class="feature-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    highlight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.feature-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid var(--accent);
}

.feature-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
}

.feature-title {
  color: var(--accent);
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-size: 1.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.75rem;
}

.feature-content {
  color: var(--text-primary);
  line-height: 1.7;
}

.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}
</style>