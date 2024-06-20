<script setup lang="ts">
const emit = defineEmits();
const localePath = useLocalePath();
const IsOpenMenu = ref(false);
const openMenu = () => {
  IsOpenMenu.value = !IsOpenMenu.value;
  emit('lockScroll', IsOpenMenu);
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <nuxt-link class="header-logo" :to="localePath('/')">
        <icons-the-logo />
      </nuxt-link>
      <nav class="header__nav header-nav">
        <ui-dropdown-header />
        <NuxtLink class="header-nav__link" :to="localePath('#fifty')">{{ $t('nav.FAQ') }}</NuxtLink>
        <NuxtLink class="header-nav__link" :to="localePath('/contacts')">{{ $t('nav.contacts') }}</NuxtLink>
        <NuxtLink class="header-nav__link" :to="localePath('/referal')">{{ $t('nav.bonuses') }}</NuxtLink>
      </nav>
      <div class="header__right">
        <ui-the-lang-switcher />
        <ui-base-button :label="$t('button.callBack')" variant="soft" color="sky" size="xl"
                        icon="minute:telegram-fill" />
      </div>
      <icons-the-burger-menu class="md:hidden"
                             @click="openMenu"></icons-the-burger-menu>
      <div v-if="IsOpenMenu" class="header__mobile header-mobile lg:hidden" :class="{ IsOpenMenu: open }">
        <div class="header-mobile__body">
          <div class="header-mobile__wrapper">
            <ui-base-button :label="$t('button.callBack')"
                            variant="soft"
                            color="sky"
                            size="lg"
                            icon="minute:telegram-fill" />
            <UiTheLangSwitcher class="h-9 langSelect"></UiTheLangSwitcher>
            <icons-the-burger-menu class="md:hidden"
                                   :class="{ open: IsOpenMenu }"
                                   @click="openMenu"></icons-the-burger-menu>
          </div>
          <nav class="header-mobile__nav header-mobile-nav">
            <ui-dropdown-header />
            <NuxtLink class="header-nav__link" :to="localePath('#fifty')">{{ $t('nav.FAQ') }}</NuxtLink>
            <NuxtLink class="header-nav__link" :to="localePath('/contacts')">{{ $t('nav.contacts') }}</NuxtLink>
            <NuxtLink class="header-nav__link" :to="localePath('/referal')">{{ $t('nav.bonuses') }}</NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  @apply py-6 md:py-12;

  &__container {
    @apply grid grid-cols-[1fr_30px] md:grid-cols-[1fr_3fr_3fr] lg:grid-cols-3 justify-between items-center;
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
        @apply py-4 px-6;

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