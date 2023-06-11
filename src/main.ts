import { createApp } from 'vue'
import App from './App.vue'
import { installElementPlus } from '@/plugins/element'
import { installComponents } from '@/components'
import router, { installRouter } from '@/router'
import { installRouterGuards } from '@/router/guard'
import { installStore } from '@/store'
import { installAssets } from '@/plugins/assets'

const startApp = () => {
  const app = createApp(App)

  // 静态资源
  installAssets(app)
  // 路由 VueRouter
  installRouter(app)
  // 路由守卫
  installRouterGuards(router)
  // 全局状态管理 Pinia
  installStore(app)
  // Element Plus
  installElementPlus(app)
  // 自定义组件库
  installComponents(app)

  app.mount('#app')
}

startApp()
