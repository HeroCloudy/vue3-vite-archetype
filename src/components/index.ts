import { App } from 'vue'
import SvgIcon from './svg-icon/index.vue'
import HelloWorld from './hello-world/index.vue'

const components = [
  SvgIcon,
  HelloWorld
]

export const installComponents = (app: App) => {
  components.forEach(c => {
    app.component(`yyg-${c.name}`, c)
  })
}

export {
  SvgIcon
}
