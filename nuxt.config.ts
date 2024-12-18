// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    'nuxt-svgo',
    'nuxt-swiper',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/image',
    '@nuxtjs/seo',
    'nuxt-gtag',
    'yandex-metrika-module-nuxt3',
  ],
  css: ['~/styles/main.css'],

  app: {
    head: {
      title:
        'Ремонт дверей и окон в Минске | FixMyDoors – Быстро, Качественно и Недорого',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'FixMyDoors – профессиональный ремонт дверей и окон в Минске. Быстрое обслуживание, доступные цены и надежная гарантия на все работы. Закажите ремонт дверей и окон с выездом мастера!',
        },

        {
          name: 'keywords',
          content:
            'ремонт дверей Минск, ремонт окон Минск, пластиковые двери Минск, деревянные двери Минск, ремонт балконов, выезд мастера Минск, профессиональный ремонт дверей, услуги по ремонту дверей и окон, ремонт дверей любой сложности, установка окон, замена дверей, замена окон, регулировка окон, регулировка пвх окон и дверей, утепление дверей, утепление окон, обшивка дверей, облицовка дверей кожей, не закрывается дверь ремонт, не закрывается окно ремонт, перетяжка массажной кушетки, обивка массажной кушетки, починка замка, замена замка, ремонт ручек дверей, замена фурнитуры на дверях, регулировка входной двери, ремонт межкомнатной двери, реставрация дверей',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/snipped.png',
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'yandex-verification',
          content: '34e8ef7aba113de7',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },

  build: {
    transpile: ['trpc-nuxt'],
  },

  robots: {
    allow: ['/'],
  },

  nitro: {
    prerender: {
      crawlLinks: false,
      failOnError: false,
    },
  },

  site: {
    url: 'https://fixmydoors.by/',
    name: 'FixMyDoors',
    description:
      'FixMyDoors – профессиональный ремонт дверей и окон в Минске. Быстрое обслуживание, доступные цены и надежная гарантия на все работы. Закажите ремонт дверей и окон с выездом мастера!',
  },

  gtag: {
    id: 'G-E9DCH4X3H9',
  },

  yandexMetrika: {
    id: '98851724',
  },
})
