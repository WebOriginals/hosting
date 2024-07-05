<script setup lang="ts">

</script>

<template>
  <section class="schemeWork">
    <div class="schemeWork__container">
      <h2>{{ $t('page.referral.schemeWork.title') }}</h2>
      <ul class="schemeWork__grid">
        <li class="schemeWork__item schemeWork-item">
          <div class="schemeWork-item__body">
            <div>1</div>
            <p>{{ $t('page.referral.schemeWork.li1') }}</p>
          </div>
        </li>
        <li class="schemeWork__item schemeWork-item">
          <div class="schemeWork-item__body">
            <div>2</div>
            <p>{{ $t('page.referral.schemeWork.li2') }}</p>
          </div>
        </li>
        <li class="schemeWork__item schemeWork-item">
          <div class="schemeWork-item__body">
            <div>3</div>
            <p>{{ $t('page.referral.schemeWork.li3') }}</p>
          </div>
        </li>
        <li class="schemeWork__item schemeWork-item">
          <div class="schemeWork-item__body">
            <div>4</div>
            <p>{{ $t('page.referral.schemeWork.li4') }}</p>
          </div>
        </li>
      </ul>
      <ui-base-button class="schemeWork__btn" label="Стать партнером" variant="solid" size="xl" />
    </div>
  </section>
</template>

<style scoped lang="scss">

.schemeWork {
  @apply py-16;

  &__container{
    @apply relative
  }

  h2 {
    @apply mb-10;
  }

  &__grid {
    @apply grid gap-16 w-full lg:grid-cols-4 lg:mt-24;
  }

  &-item {
    @apply relative;


    &__body{
      @apply max-w-[312px] sm:max-w-[412px] lg:max-w-[312px] ;

      div {
        @apply w-10 h-10 rounded-lg bg-purple-600 text-2xl text-white font-medium flex items-center justify-center mb-2;
      }

      p {
        @apply text-base;
      }

    }


    &:nth-child(even) {
      .schemeWork-item__body{
        @apply max-lg:text-right grid max-lg:justify-items-end max-lg:items-end max-lg:justify-end ml-auto ;
      }

      @media only screen and (max-width: 1023px) {
        &:before {
          content: '';
          position: absolute;
          left: 0.5rem;
          bottom: -60px;
          width: 100px;
          height: 208px;
          background: url("/img/leftArrM.svg") no-repeat;
          background-size: cover;
          transform: rotate(50deg);
        }
      }
      @media only screen and (min-width: 1024px) {
        &:before {
          content: '';
          position: absolute;
          right: -5rem;
          top: 1rem;
          width: 236px;
          height: 100px;
          background: url("/img/downArrD.svg") no-repeat;
          background-size: contain;
          transform: rotate(11deg);
        }
      }
    }

    &:last-child{
      @media only screen and (min-width: 1024px) {
        &:before {
          content: '';
          position: absolute;
          left: -5rem;
          top: -6rem;
          width: 111px;
          height: 100px;
          background: url("/img/rightArrD.svg") no-repeat;
          background-size: contain;
          transform: rotate(-47deg);
        }
      }
      @media only screen and (min-width: 1280px) {
        &:before {
          left: -2rem;
          top: -7rem;
          transform: rotate(-23deg);
        }
      }
    }

    &:nth-child(odd) {
      .schemeWork-item__body {
        @apply lg:mt-20;
      }

      @media only screen and (min-width: 1024px) {
        &:before {
          content: '';
          position: absolute;
          right: -1rem;
          top: 2rem;
          width: 180px;
          height: 89px;
          background: url("/img/topArrD.svg") no-repeat;
          background-size: contain;
          transform: rotate(-12deg);
        }
      }
    }
  }

  &__btn {
    @apply max-lg:mt-16 w-2/3 mx-auto block lg:absolute lg:top-0 lg:right-4 lg:max-w-[200px];
  }
}
</style>