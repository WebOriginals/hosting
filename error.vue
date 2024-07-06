<template>
  <NuxtLayout>
    <div class="not-found">
      <div class="not-found__container">
        <div class="not-found__content">
          <div class="not-found__image">
            <img src="/img/404.svg" alt="" class="not-found__img light-theme" />
          </div>
          <div class="not-found__text">
            <div class="not-found__info">
              {{ $t('page.NotFoundPage.info') }} support@ou.digital
            </div>
            <div class="not-found__links">
              <NuxtLink to="/" class="not-found__link">{{ $t('page.NotFoundPage.link') }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
</script>
<style lang="scss" scoped>
@import '~/assets/css/mixins.scss';

.not-found {
  @include adaptiveValue(padding-top, 64, 32);
  @include adaptiveValue(padding-bottom, 64, 32);
  &__content {
    @apply grid text-center items-center justify-center lg:flex lg:gap-16 lg:grid-cols-2 lg:flex-row-reverse
  }
  &__title {
    @include adaptiveValue(font-size, 40, 24);
    line-height: 48px;
    @apply font-semibold;
    @include adaptiveValue(margin-bottom, 24, 16);
    transition: color 0.3s;
  }
  &__info {
    @apply mb-8 max-w-[46.5rem] text-sm;
    transition: color 0.3s !important;
  }
  &__image {
    max-width: 45rem;
    width: 100%;
    @include adaptiveValue(margin-bottom, 64, 32);
    & img {
      width: 100%;
      object-fit: contain;
    }
  }
  &__link {
    cursor: pointer;
    @apply flex-shrink-0 focus:outline-none disabled:cursor-not-allowed justify-center font-semibold rounded-lg text-base py-4 px-8 shadow-sm text-white bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 hover:bg-primary-600   sm:w-auto min-w-[240px] dark:focus-visible:outline-primary-400 dark:hover:bg-primary-600 disabled:bg-sky-300 disabled:text-sky-400 disabled:opacity-100 dark:disabled:bg-sky-300 inline-flex items-center;
  }
  &__text{
    @apply max-lg:-mt-32 max-w-[350px] grid justify-center justify-items-center  lg:text-start;
  }
}
.light {
  .dark-theme {
    display: none;
  }
}
.dark {
  .dark-theme {
    display: block;
  }
  .light-theme {
    display: none;
  }
}
</style>
