<script setup lang="ts">
const numberClients = ref<null | number>(null)
const averageClientExpenses = ref<null |number>(null)
const COEFFICIENT = 0.15
const SIX_MONTH = 6
const TWELVE_MONTH = 12

const checkForNull = () => {
  if(numberClients.value === null || averageClientExpenses.value === null){
    numberClients.value = 0
    averageClientExpenses.value = 0
  }
}

const oneMonth = computed(() => {
  checkForNull()
  return Math.floor(numberClients.value * averageClientExpenses.value * COEFFICIENT).toFixed(0);
});

const sixMonth = computed(() => {
  checkForNull()
  return Math.floor(numberClients.value * averageClientExpenses.value * COEFFICIENT * SIX_MONTH).toFixed(0)
});

const twelveMonth = computed(() => {
  checkForNull()
  return Math.floor(numberClients.value * averageClientExpenses.value * COEFFICIENT * TWELVE_MONTH).toFixed(0)
});
const currencyMask = (month: number) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(month);
};

</script>

<template>
  <section class="calc">
    <div class="calc__container">
      <h2 class="calc__title">{{$t('page.referral.calc.title')}}</h2>
      <div class="calc__grid calc-grid">
        <div class="calc-grid__item calc-grid-item">
          <input v-model="numberClients" placeholder="0">
          <p>{{$t('page.referral.calc.numberClients')}}</p>
        </div>
        <div class="calc-grid__item calc-grid-item">
          <input v-model="averageClientExpenses" placeholder="0">
          <p>{{$t('page.referral.calc.averageClientExpenses')}}</p>
        </div>
        <div class="calc-grid__item calc-grid-item calc-grid-item--result">
            <div class="calc-grid-item__col1">
              <p>{{$t('page.referral.calc.oneMonth')}}</p>
              <span>{{currencyMask(oneMonth)}}</span>
            </div>
            <div class="calc-grid-item__col2">
              <p>{{$t('page.referral.calc.sixMonth')}}</p>
              <span>{{currencyMask(sixMonth)}}</span>
            </div>
            <div class="calc-grid-item__col3">
              <p>{{$t('page.referral.calc.twelveMonth')}}</p>
              <span>{{currencyMask(twelveMonth)}}</span>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.calc{
  @apply py-16;

  h2{
    @apply mb-10;
  }

  &-grid{
    @apply grid gap-6 md:grid-cols-2 lg:grid-cols-[2fr_2fr_3fr];

    &-item{
      @apply grid gap-14 text-center border-sky-300 border rounded-lg py-6 px-8 pt-10;

      input{
        @apply text-6xl text-center w-full
      }

      p{
        @apply text-black/30 text-sm
      }

      &--result{
        grid: "one"
              "tow"
              "three";

        @media only screen and (min-width: 480px){
          grid: "one tow"
		            "three three";
        }
        @media only screen and (min-width: 768px){
          grid-column: span 2;
          grid: "one three"
		            "tow three";
        }
        @media only screen and (min-width: 1024px){
          grid-column: span 1;
        }

        @apply bg-[url('/img/col55.png')] bg-no-repeat  bg-cover bg-center  ;

        p{
          @apply text-white/50
        }
        span{
          @apply text-white text-2xl md:text-3xl font-medium
        }
      }

      &__col1{
        grid-area: one;
      }
      &__col2{
        grid-area: tow;
      }
      &__col3{
        grid-area: three;
        @apply bg-white grid items-center justify-center p-4 rounded-lg;

        p{
          @apply text-black/50
        }
        span{
          @apply text-black
        }
      }
    }
  }
}
</style>