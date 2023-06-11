<script setup lang="ts" name="hello-world">
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
    <div class="color-red text-30px">测试使用 UnoCSS 1</div>
    <div class="text-20px">测试使用 UnoCSS 2</div>
    <div class="i-ic-baseline-21mp"></div>
    <div class="i-ic-baseline-21mp color-blue text-50px"></div>
  </div>
  <p class="read-the-docs">by 程序员优雅哥</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
