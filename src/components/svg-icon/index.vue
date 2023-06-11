<!--
 * @Title: index.vue
 * @Description:
 * @Author: dscloudy 小云哥
 * @Date: 2022/10/3 22:10
 *     Date          UpdateBy        Description
 * 2022/10/3 22:10   dscloudy    Create File.
 -->
<template>
  <div v-if="isOnlineSvg"
       :style="{ '--svg-icon-url': `url(${icon})` }"
       class="svg-icon svg-icon-online"
       :class="className"/>
  <svg v-else
       class="svg-icon"
       :class="className"
       aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"/>
  </svg>
</template>

<script lang="ts" setup name="svg-icon">
import { computed } from 'vue'

const props = defineProps({
  // SVG 图标名称或在线URL
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  className: {
    type: String,
    default: ''
  }
})

const isOnlineSvg = computed(() => /^(https?:)/.test(props.icon))
</script>

<style scoped lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}

.svg-icon-online {
  background-color: currentColor;
  mask-image: var(--svg-icon-url);
  -webkit-mask-image: var(--svg-icon-url);
  mask-size: cover;
  -webkit-mask-size: cover;
  display: inline-block;
}
</style>
