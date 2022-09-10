import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'tsx-demo',
  setup () {
    const count = ref(0)
    const onBtnClick = () => {
      count.value++
    }

    return () => (
        <div>
          <h3>{count.value}</h3>
          <el-button onClick={onBtnClick}>TEST BUTTON</el-button>
        </div>
    )
  }
})
