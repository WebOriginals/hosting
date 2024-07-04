<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section class="whyUs">
    <div class="whyUs__container">
      <h2>{{ $t('page.referral.whyUs.title') }}</h2>
      <div class="whyUs__grid">
        <div class="whyUs__col whyUs__col3">
          <h4>{{ $t('page.referral.whyUs.col1.title') }}</h4>
          <p>{{ $t('page.referral.whyUs.col1.text') }}</p>
        </div>
        <div class="whyUs__col whyUs__col2">
          <h4>{{ $t('page.referral.whyUs.col2.title') }}</h4>
          <p>{{ $t('page.referral.whyUs.col2.text') }}</p>
        </div>

        <div class="whyUs__col whyUs__col3">
          <h4>{{ $t('page.referral.whyUs.col3.title') }}</h4>
          <p>{{ $t('page.referral.whyUs.col3.text') }}</p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.whyUs {
  @apply py-16;

  &__grid{
    @apply grid gap-6 mt-10 lg:grid-cols-3;
  }

  &__col{
    @apply border border-primary-100 rounded-md py-11 px-10 overflow-hidden relative;

    p{
      @apply mt-5 text-base;
    }
  }


  &__col2 {
    @apply bg-[url('/img/pageTow2.svg')] bg-no-repeat bg-center bg-cover relative;
  }

  &__col3{
    @apply bg-[url('/img/pageTow4.svg')] bg-no-repeat bg-center bg-cover relative;
  }
}

</style>