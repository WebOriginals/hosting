<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section class="whyUs">
    <div class="whyUs__container">
      <h2>{{ $t('page.main.whyUs.title') }}</h2>
      <div class="whyUs__grid">
        <div class="whyUs__col whyUs__col1 whyUs-col1">
          <div class="whyUs-col1__wrapper">
            <h4>{{ $t('page.main.whyUs.col1.title') }}</h4>
            <p>{{ $t('page.main.whyUs.col1.text') }}</p>
          </div>
        </div>
        <div class="whyUs__col whyUs__col2">
          <h4>{{ $t('page.main.whyUs.col2.title') }}</h4>
          <p>{{ $t('page.main.whyUs.col2.text') }}</p>
        </div>
        <div class="whyUs__col whyUs__col3">
          <h4>{{ $t('page.main.whyUs.col3.title') }}</h4>
          <p>{{ $t('page.main.whyUs.col3.text') }}</p>
        </div>
        <div class="whyUs__col whyUs__col4">
          <h4>{{ $t('page.main.whyUs.col4.title') }}</h4>
          <p>{{ $t('page.main.whyUs.col4.text') }}</p>
        </div>
        <div class="whyUs__col whyUs__col5">
          <h4>{{ $t('page.main.whyUs.col5.title') }}</h4>
          <p>{{ $t('page.main.whyUs.col5.text') }}</p>
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
      grid: "col1 col1 col5"
		      "col2 col4 col5"
		      "col3 col4 col5";
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
    @apply bg-[url('/img/col1.png')] bg-no-repeat max-sm:pb-40 bg-[length:80%] bg-[50%_120%] sm:bg-[120%_150%] sm:bg-[length:50%] lg:bg-[20rem] lg:bg-[length:80%] ;

    &__wrapper{
      @apply md:w-2/4
    }
  }

  &__col2 {
    grid-area: col2;
    @apply bg-[url('/img/col2.png')] bg-no-repeat bg-center bg-cover relative;
    &:before{
      content: "";
      z-index: -1;
      @apply bg-[url('/img/col22.png')] bg-no-repeat  bg-cover bg-bottom absolute w-full h-full top-0 left-0
    }
  }

  &__col3{
    grid-area: col3;
    @apply bg-[url('/img/col3.png')] bg-no-repeat bg-center bg-cover relative;
    &:before{
      content: "";
      z-index: -1;
      @apply bg-[url('/img/col33.png')] bg-no-repeat  bg-cover bg-bottom absolute w-full h-full top-0 left-0
    }
  }

  &__col4{
    grid-area: col4;
    @apply bg-[url('/img/col4.png')] bg-no-repeat bg-bottom relative pb-60 sm:pb-80 max-lg:bg-[length:100%];

    &:before{
      content: "";
      z-index: -1;
      @apply bg-[url('/img/col44.png')] bg-no-repeat  bg-cover bg-bottom absolute w-full h-full top-0 left-0
    }
  }

  &__col5{
    grid-area: col5;
    @apply text-white bg-[url('/img/col5.png')] bg-no-repeat bg-bottom relative pb-96 sm:pb-80  max-lg:bg-[length:100%];

    p{
      @apply text-white;
    }

    &:before{
      content: "";
      z-index: -1;
      @apply bg-[url('/img/col55.png')] bg-no-repeat  bg-cover bg-bottom absolute w-full h-full top-0 left-0
    }
  }
}

</style>