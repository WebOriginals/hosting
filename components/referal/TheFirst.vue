<script setup lang="ts">

</script>

<template>
  <section class="internalFirst">
    <div class="internalFirst__container">
      <div class="internalFirst__gradient">
        <h1>{{$t('page.referral.first.title')}}</h1>
        <p>{{$t('page.referral.first.subTitle')}}</p>
      </div>
      <div class="internalFirst__img">
        <img src="/img/referralIc.svg" alt="">
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
    @apply bg-gradient-to-r from-primary-500 to-primary-400 text-white p-10 pb-16 sm:pb-40 lg:py-28 lg:px-16 rounded-3xl relative grid gap-4;

    h1{
      @apply lg:w-2/3;
    }

    &:before{
      content: "";
      z-index: 0;
      @apply bg-[url('/img/interiorFirst.svg')]  bg-no-repeat bg-[36%_10%]  bg-[length:120%] absolute w-full h-full top-0 right-0
    }

    p{
      @apply text-white lg:w-2/3;
    }
  }

  &__img{
    @media only screen and (min-width: 1024px) {
      animation: swing 3s linear infinite;
    }

    @apply absolute -bottom-[40%] -right-0 w-[164px]  sm:w-[250px] sm:top-48 sm:-right-6  lg:w-[660px] lg:-right-40 lg:-top-24 xl:w-[800px] xl:-right-60;
  }
}
@keyframes swing {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-10deg);
  }
}
</style>