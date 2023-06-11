<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>counter: {{counter}}</h3>
    <el-button @click="add">
      <el-icon-plus></el-icon-plus>
    </el-button>

<div>
  <yyg-svg-icon icon="http://www.yygnb.com/demo/car.svg"></yyg-svg-icon>
  <yyg-svg-icon icon="car"></yyg-svg-icon>

  <yyg-svg-icon class-name="icon" icon="http://www.yygnb.com/demo/car.svg"></yyg-svg-icon>
  <yyg-svg-icon class-name="icon" icon="car"></yyg-svg-icon>
</div>

  </div>
</template>

<script lang="ts" setup>
import useDemoStore from '@/store/modules/demo'
import { storeToRefs } from 'pinia'

const demoStore = useDemoStore()
const { counter } = storeToRefs(demoStore)

const add = () => {
  demoStore.increment()
}

</script>
<style scoped>
.icon {
  color: cornflowerblue;
  font-size: 30px;
}
</style>
