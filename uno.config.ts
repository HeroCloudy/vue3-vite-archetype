import { defineConfig, presetUno, presetAttributify, presetIcons, transformerDirectives } from 'unocss'

export default defineConfig({
  rules: [
    // [/^text-([\d]+)px$/, ([_, num]) => ({ 'font-size': `${num}px` })]
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ],
  transformers: [
    transformerDirectives()
  ]
})
