import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  presetTypography,
} from 'unocss'

import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      // use axios with an https proxy
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
