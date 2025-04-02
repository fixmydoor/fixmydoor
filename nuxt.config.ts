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
    'nuxt-gtag',
    'yandex-metrika-module-nuxt3',
  ],
  css: ['~/styles/main.css'],

  app: {
    head: {
      title:
        'Ремонт дверей в Минске | Межкомнатные, входные, балконные двери | Ремонт окон ПВХ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Ремонт дверей в Минске: входные, межкомнатные, балконные двери. Замена замков, утепление, реставрация, регулировка. Ремонт окон: ПВХ и деревянных. Быстрое и качественное обслуживание. FixMyDoors.',
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
      script: [
        {
          hid: 'gtag',
          src: 'https://www.googletagmanager.com/gtag/js?id=G-E9DCH4X3H9',
          async: true,
        },
        {
          hid: 'gtag-config',
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E9DCH4X3H9');
          `,
        }
      ]

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

  routeRules: {
    '/': { prerender: true },
  },

  site: {
    url: 'https://fixmydoors.by',
    name: 'FixMyDoors',
    description:
      'Ремонт дверей в Минске: входные, межкомнатные, балконные двери. Замена замков, утепление, реставрация, регулировка. Ремонт окон: ПВХ и деревянных. Быстрое и качественное обслуживание. FixMyDoors.',
  },

  gtag: {
    id: 'G-E9DCH4X3H9',
  },

  yandexMetrika: {
    id: '98851724',
  },
})
