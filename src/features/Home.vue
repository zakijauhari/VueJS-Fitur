<template>
  <div class="home-page">
    <div class="logo-container">
      <!-- Logo Vue -->
      <img src="/vue.svg" alt="Vue.js Logo" class="logo vue-logo">

      <!-- Logo Vite -->
      <img src="/vite.svg" alt="Vite Logo" class="logo vite-logo">

      <h1>Selamat Datang di Aplikasi Demo Vue + Vite</h1>
      <p>Gunakan menu di samping untuk melihat berbagai fitur Vue.js</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #0d1117;
  color: white;
  text-align: center;
  padding: 2rem;
}

.logo-container {
  max-width: 600px;
}

.logo {
  width: 150px;
  margin: 1rem auto;
  display: block;
}

.vue-logo {
  filter: drop-shadow(0 0 5px #42b983);
}

.vite-logo {
  filter: drop-shadow(0 0 5px #646cff);
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

p {
  font-size: 1rem;
  color: #888;
}
</style>