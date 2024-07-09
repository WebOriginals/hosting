<script setup lang="ts">

</script>

<template>
<section class="internalFirst">
  <div class="internalFirst__container">
    <div class="internalFirst__gradient">
      <h1>{{$t('page.waf.title')}}</h1>
      <p>{{$t('page.waf.text')}}</p>
    </div>
    <div class="internalFirst__img">
      <img src="/img/pageTow.svg" alt="">
    </div>
  </div>

</section>
</template>

<style scoped lang="scss">
.internalFirst{
  @apply pb-40 pt-8 lg:py-24 relative;

  &__container{
    @apply relative;
  }

  &__gradient{
    @apply bg-gradient-to-r from-primary-500 to-primary-400 text-white p-9 pb-60 sm:pb-40 lg:py-28 lg:px-16 rounded-3xl relative grid gap-4 max-sm:text-center;

    &:before{
      content: "";
      z-index: 0;
      @apply bg-[url('/img/interiorFirst.svg')]  bg-no-repeat bg-[36%_10%]  bg-[length:120%] absolute w-full h-full top-0 right-0
    }

    p{
      @apply text-white;
    }
  }

  &__img{
    @media only screen and (min-width: 1024px) {
      animation: swing 4s linear infinite;
    }

    @apply absolute top-28 -right-16  sm:w-2/3 sm:top-2 sm:-right-36  lg:-right-60 lg:-top-32
  }
}
@keyframes swing {
  0%, 100% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
}
</style>