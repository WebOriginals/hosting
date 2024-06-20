<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
<section class="whyUs">
  <div class="whyUs__container">
      <h2>{{$t('page.main.whyUs.title')}}</h2>
      <div class="whyUs__grid">

      </div>
  </div>
</section>
</template>

<style scoped lang="scss">
.whyUs{
  @apply py-16;
}
</style>