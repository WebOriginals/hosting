<template>
  <section class="question" id="question">
    <div class="question__container">
      <h2>{{ $t('page.main.question.title') }}</h2>
      <div class="question__wrapper">
        <ui-spoiler-card
          v-for="(item, index) in $tm('page.waf.question.questionItems')"
          :key="index"
          :item="item"
          size="xl"
          border="border-0"
        ></ui-spoiler-card>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
</script>

<style scoped lang="scss">

.question {
  @apply py-16;

  h2 {
    @apply pb-11;
  }
  &__wrapper {
    @apply grid gap-4;
  }
}
</style>
