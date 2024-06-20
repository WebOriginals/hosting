<script setup lang="ts">
</script>

<template>
  <section class="first">
    <div class="first__container">
      <div class="first__grid first-grid">
        <div class="first-grid__text">
          <h1>{{ $t('page.main.TheFirst.Title1')}}<br>
            <span>{{ $t('page.main.TheFirst.Title2')}}</span>
          </h1>
          <p>{{ $t('page.main.TheFirst.text')}}</p>
          <ui-base-button class="w-max" :label="$t('page.main.TheFirst.button')" size="xl" variant="outline" />
        </div>
        <div class="first-grid__img">
          <icons-the-first-icon/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
h1 {
  span {
    @apply text-purple-650
  }
  @apply mb-7 md:mb-10 max-md:text-center
}
.first{

  &-grid{
    @apply grid md:grid-cols-[1fr_415px] gap-4 md:gap-44 justify-items-center;

    &__text{
      @apply grid gap-7 md:gap-10 max-md:justify-items-center
    }
  }
}
</style>