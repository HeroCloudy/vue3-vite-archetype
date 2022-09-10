<template>
  <div class="home">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo"/>
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo"/>
      </a>
      <a href="https://pinia.web3doc.top/" target="_blank">
        <img src="https://pinia.web3doc.top/logo.svg" class="logo pinia" alt="Pinia logo"/>
      </a>
    </div>
    <HelloWorld msg="Vite + Vue + Pinia"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'home',
  components: {
    HelloWorld
  }
})
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.logo.pinia:hover {
  filter: drop-shadow(0 0 2em rgb(245, 208, 88));
}
</style>
