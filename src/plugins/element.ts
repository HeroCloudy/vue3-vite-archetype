import { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { camelCaseToLine } from '@/utils/str-utils'

const installElementIcons = (app: App) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(`el-icon${camelCaseToLine(key)}`, component)
  }
}

export const installElementPlus = (app: App) => {
  app.use(ElementPlus)
  installElementIcons(app)
}
