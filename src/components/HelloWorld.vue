<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Thanks for using yyg-cli !!
    </p>
  </div>
  <p class="read-the-docs">by 程序员优雅哥</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
