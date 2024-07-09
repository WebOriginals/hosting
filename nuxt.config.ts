// https://nuxt.com/docs/api/configuration/nuxt-config

import en from './locales/en.json';
import ru from './locales/ru.json';
import de from './locales/de.json';

export default defineNuxtConfig({
  devtools: { enabled: true },
  // runtimeConfig: {
  //   public: {
  //     baseUrl: 'https://',
  //     amazonUrl: 'https://',
  //   },
  // },

  router: {
    options: {
      scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return { ...savedPosition, behavior: 'smooth' };
        } else if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth',
          };
        } else {
          return { top: 0, behavior: 'smooth' };
        }
      },
    },
  },

  css: ['~/assets/css/tailwind.scss'],

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-swiper',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    '@nuxt/ui',
  ],



  pinia: {
    autoImports: ['defineStore'],
  },

  build: {
    transpile: ['@vuepic/vue-datepicker'],
  },

  pinia: {
    autoImports: ['defineStore'],
  },

  i18n: {
    langDir: 'locales',
    strategy: 'prefix',
    dynamicRouteParams: false,
    compilation: {
      strictMessage: false,
      escapeHtml: true,
    },
    messages: {
      en,
      ru,
      de,
    },
    locales: [
      {
        flag: '/img/ru.svg',
        code: 'ru',
        iso: 'ru_RU',
        name: 'Русский',
        file: 'ru.json',
      },
      {
        flag: '/img/en.svg',
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
      },
      {
        flag: '/img/de.svg',
        code: 'de',
        iso: 'de-DE',
        name: 'German',
        file: 'de.json',
      },
    ],

    defaultLocale: 'en',
  },

  extends: 'content-wind',
  experimental: {
    watcher: 'parcel',
  },
})
