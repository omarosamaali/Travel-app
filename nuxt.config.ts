export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      { code: 'ar', name: 'English', iso: 'en-US', file: 'en.json', dir: 'ltr' },
      { code: 'en', name: 'Arabic', iso: 'ar-SA', file: 'ar.json', dir: 'rtl' }
    ],
    defaultLocale: 'ar',
    lazy: true,
    langDir: 'lang/',
    vueI18n: './i18n.ts' // تحديد مسار ملف التهيئة
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.tailwindcss.com'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js'
        }
      ]
    }
  },
})
