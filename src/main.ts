import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import pinia from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'virtual:svg-icons-register'
import { camelCaseToLine } from '@/utils/str-utils'
import '@/router/guard/index'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon${camelCaseToLine(key)}`, component)
}

const env = import.meta.env
console.log(env)

app.mount('#app')
