<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section class="whyUs">
    <div class="whyUs__container">
      <h2>{{ $t('page.waf.whyUs.title') }}</h2>
      <div class="whyUs__grid">
        <div class="whyUs__col whyUs__col1 whyUs-col1">
          <h4>{{ $t('page.waf.whyUs.col1.title') }}</h4>
          <p>{{ $t('page.waf.whyUs.col1.text') }}</p>
        </div>
        <div class="whyUs__col whyUs__col2">
          <h4>{{ $t('page.waf.whyUs.col2.title') }}</h4>
          <p>{{ $t('page.waf.whyUs.col2.text') }}</p>
        </div>
        <div class="whyUs__col whyUs__col3">
          <h4>{{ $t('page.waf.whyUs.col3.title') }}</h4>
          <p>{{ $t('page.waf.whyUs.col3.text') }}</p>
        </div>
        <div class="whyUs__col whyUs__col4">
          <h4>{{ $t('page.waf.whyUs.col4.title') }}</h4>
          <p>{{ $t('page.waf.whyUs.col4.text') }}</p>
        </div>
        <div class="whyUs__col whyUs__col5">
          <h4>{{ $t('page.waf.whyUs.col5.title') }}</h4>
          <p>{{ $t('page.waf.whyUs.col5.text') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.whyUs {
  @apply py-16;

  &__grid{
    @apply grid gap-6 mt-10;
    grid: "col1"
		      "col2"
		      "col3"
		      "col5"
		      "col4";

    @media only screen and (min-width: 480px){
      grid: "col1 col1"
            "col2 col3"
            "col4 col5";
    }

    @media only screen and (min-width: 976px){
      grid: "col1 col3 col4"
            "col2 col3 col5";
    }
  }

  &__col{
    @apply border border-primary-100 rounded-md py-11 px-10 overflow-hidden;

    p{
      @apply mt-5 text-base;
    }
  }

  &-col1{
    grid-area: col1 ;
    @apply bg-[url('/img/pageTow1.svg')] bg-no-repeat bg-cover bg-[50%_120%]  ;
  }

  &__col2 {
    grid-area: col2;
    @apply bg-[url('/img/pageTow2.svg')] bg-no-repeat  bg-center bg-cover relative;
  }

  &__col3{
    grid-area: col3;
    @apply bg-[url('/img/pageTow3.svg')] bg-no-repeat bg-center bg-cover relative text-white;

    p{
      @apply text-white
    }
  }

  &__col4{
    grid-area: col4;
    @apply bg-[url('/img/pageTow4.svg')] bg-no-repeat bg-bottom bg-cover relative ;
  }

  &__col5{
    grid-area: col5;
    @apply  bg-[url('/img/pageTow5.svg')] bg-no-repeat bg-bottom bg-cover relative ;
  }
}

</style>