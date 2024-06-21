<script setup lang="ts">
const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  }
})
</script>

<template>
  <div class="cardWithPriceABC">
    <div class="cardWithPriceABC__title" :class="`title${props.index}`">{{props.info.name}}</div>
    <div class="cardWithPriceABC__subTitle">{{props.info.text}}</div>
    <div class="cardWithPriceABC__priceInMonth"><span>{{props.info.priceMonth}}</span> /{{$t('month')}}</div>
    <ui-base-button class="!w-full " label="Заказать" variant="solid" size="xl"/>
    <ul class="cardWithPriceABC__list">
      <li><span>CPU</span> {{props.info.equipment.protection}}</li>
      <li><span>RAM</span> {{props.info.equipment.domain}}</li>
      <li><span>NVME</span> {{props.info.equipment.regime_change}}</li>
      <li><span>{{$t('internet')}}</span> {{props.info.equipment.anti_ddos}}</li>
      <li><span>AntiDDos</span> <span v-html="props.info.equipment.web_socket"></span></li>
      <li><span>AntiDDos</span> {{props.info.equipment.reaction_time}}</li>
      <li><span>AntiDDos</span> <span v-html="props.info.equipment.balancing"></span></li>
    </ul>

  </div>
</template>

<style scoped lang="scss">
.cardWithPriceABC{
  @apply p-8 border border-primary-200 bg-primary-100/50 rounded-lg;

  &__title{
    @apply text-3xl font-semibold mb-4;

    &.title0 {
      @apply text-primary-300;
    }
    &.title1 {
      @apply text-primary-600;
    }
    &.title2 {
      @apply text-black;
    }
    &.title3 {
      @apply text-cyan-400;
    }

  }
  &__subTitle{
    @apply mb-8 text-sm;
  }
  &__server{
    @apply text-primary-600 bg-primary-200 rounded-3xl p-2 w-max text-sm mb-6;
  }
  &__priceInMonth{
    @apply mb-4;
    span{
      @apply text-3xl  font-semibold ;
    }
  }
  &__list{
    @apply pt-16 grid gap-4;

    li{
      @apply flex justify-between font-medium text-base gap-3;
      span{
        @apply text-neutral-500;
      }
    }
  }
}
</style>