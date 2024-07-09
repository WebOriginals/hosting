<script setup lang="ts">
const emit = defineEmits();
const localePath = useLocalePath();
const IsOpenMenu = ref(false);
const router = useRouter();
const URL_CONTACT = "/ru/contacts"

const openMenu = () => {
  IsOpenMenu.value = !IsOpenMenu.value;
  emit('lockScroll', IsOpenMenu);
};

const scrollToSection = () => {
  router.push({ hash: '#question' });
};



</script>

<template>
  <header class="header">
    <div class="header__container">
      <nuxt-link class="header-logo" :to="localePath('/')">
        <icons-the-logo />
      </nuxt-link>
      <nav class="header__nav header-nav">
        <ui-drop-down-list/>
        <NuxtLink to="#question"
                  @click.prevent="scrollToSection"
                  v-if="router.currentRoute.value.path !== URL_CONTACT"
        >{{ $t('nav.FAQ') }}</NuxtLink>
        <NuxtLink class="header-nav__link" :to="localePath('/contacts')">{{ $t('nav.contacts') }}</NuxtLink>
        <NuxtLink class="header-nav__link" :to="localePath('/referal')">{{ $t('nav.bonuses') }}</NuxtLink>
      </nav>
      <div class="header__right">
        <ui-the-lang-switcher />
        <button class="header-btn-telega ">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.3749 6.8879C6.74359 4.62993 10.3236 3.14134 12.1148 2.42212C17.2292 0.36862 18.2919 0.0119045 18.9846 0.00012559C19.1369 -0.00246506 19.4776 0.0339819 19.6982 0.206816C19.8845 0.352754 19.9358 0.549895 19.9603 0.68826C19.9848 0.826626 20.0154 1.14183 19.9911 1.38811C19.714 4.1992 18.5147 11.021 17.9046 14.1694C17.6465 15.5017 17.1382 15.9484 16.6461 15.9921C15.5766 16.0871 14.7645 15.3098 13.7287 14.6543C12.1078 13.6287 11.1921 12.9902 9.61879 11.9893C7.80053 10.8327 8.97923 10.1969 10.0154 9.15799C10.2866 8.88609 14.9987 4.74867 15.0899 4.37335C15.1013 4.32641 15.1119 4.15143 15.0042 4.05904C14.8965 3.96664 14.7376 3.99824 14.6229 4.02337C14.4604 4.05898 11.871 5.71112 6.85486 8.97978C6.11988 9.46697 5.45416 9.70435 4.8577 9.69191C4.20015 9.6782 2.93528 9.33301 1.99498 9.03795C0.84166 8.67605 -0.074973 8.48471 0.00484519 7.87009C0.0464194 7.54996 0.503103 7.22256 1.3749 6.8879Z" fill="#4FAFDB"/>
          </svg>
          {{$t('button.callBack')}}
        </button>
      </div>
      <icons-the-burger-menu class="md:hidden"
                             @click="openMenu"></icons-the-burger-menu>
      <div v-if="IsOpenMenu" class="header__mobile header-mobile lg:hidden" :class="{ IsOpenMenu: open }">
        <div class="header-mobile__body">
          <icons-the-burger-menu class="md:hidden ml-auto mb-4"
                                 :class="{ open: IsOpenMenu }"
                                 @click="openMenu"></icons-the-burger-menu>
          <div class="header-mobile__wrapper">
            <button class="header-btn-telega ">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.3749 6.8879C6.74359 4.62993 10.3236 3.14134 12.1148 2.42212C17.2292 0.36862 18.2919 0.0119045 18.9846 0.00012559C19.1369 -0.00246506 19.4776 0.0339819 19.6982 0.206816C19.8845 0.352754 19.9358 0.549895 19.9603 0.68826C19.9848 0.826626 20.0154 1.14183 19.9911 1.38811C19.714 4.1992 18.5147 11.021 17.9046 14.1694C17.6465 15.5017 17.1382 15.9484 16.6461 15.9921C15.5766 16.0871 14.7645 15.3098 13.7287 14.6543C12.1078 13.6287 11.1921 12.9902 9.61879 11.9893C7.80053 10.8327 8.97923 10.1969 10.0154 9.15799C10.2866 8.88609 14.9987 4.74867 15.0899 4.37335C15.1013 4.32641 15.1119 4.15143 15.0042 4.05904C14.8965 3.96664 14.7376 3.99824 14.6229 4.02337C14.4604 4.05898 11.871 5.71112 6.85486 8.97978C6.11988 9.46697 5.45416 9.70435 4.8577 9.69191C4.20015 9.6782 2.93528 9.33301 1.99498 9.03795C0.84166 8.67605 -0.074973 8.48471 0.00484519 7.87009C0.0464194 7.54996 0.503103 7.22256 1.3749 6.8879Z" fill="#4FAFDB"/>
              </svg>
              {{$t('button.callBack')}}
            </button>
            <UiTheLangSwitcher class="h-9 langSelect"></UiTheLangSwitcher>
          </div>
          <nav class="header-mobile__nav header-mobile-nav">
            <ui-drop-down-list @closeMenu="openMenu"/>
            <NuxtLink class="header-mobile-nav__link"
                      to="#question"
                      @click.prevent="scrollToSection"
                      v-if="router.currentRoute.value.path !== URL_CONTACT"
                      @click="openMenu"
            >{{ $t('nav.FAQ') }}</NuxtLink>
            <NuxtLink class="header-mobile-nav__link" :to="localePath('/contacts')" @click="openMenu">{{ $t('nav.contacts') }}</NuxtLink>
            <NuxtLink class="header-mobile-nav__link" :to="localePath('/referal')" @click="openMenu">{{ $t('nav.bonuses') }}</NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  @apply py-6 md:py-12 relative z-20;

  &__container {
    @apply grid grid-cols-[1fr_30px] md:grid-cols-[1fr_3fr_3fr] lg:grid-cols-3 justify-between items-center;
  }

  &-btn-telega{
    @apply flex items-center gap-2  text-lg text-black bg-sky-200/50 font-normal rounded-lg py-3 px-6;
  }
  &__nav {
    @apply gap-4 items-center hidden md:flex;
  }

  &__right {
    @apply gap-4 justify-end items-center hidden md:flex;
  }

  &-mobile {
    height: 100vh;
    @apply w-full absolute left-0 top-0 z-20 backdrop-opacity-10 backdrop-invert bg-black/30 pt-28;

    &__body{
      height: calc(100vh - 112px);
      @apply  bg-white border-t-2 ring-0 border-0 p-6 rounded-t-[24px]
    }

    &-nav {
      @apply py-6 grid;

      &__link {
        @apply py-2  block text-base;

        @media (any-hover: hover) {
          &:hover {
            @apply text-sky-600 dark:text-sky-400;
          }
        }
      }
    }

    &__wrapper {
      @apply flex gap-4 justify-between ;
    }
  }
}
</style>