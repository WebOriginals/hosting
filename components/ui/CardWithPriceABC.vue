<script setup lang="ts">
const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})
</script>

<template>
<div class="cardWithPriceABC">
  <div class="cardWithPriceABC__server">{{props.info.name}}</div>
  <div class="cardWithPriceABC__priceInMonth"><span>{{props.info.priceMonth}}</span> /{{$t('month')}}</div>
  <div class="cardWithPriceABC__priceInDay">{{props.info.priceDay}} /{{$t('day')}}</div>
  <ul class="cardWithPriceABC__list">
    <li><span>CPU</span> {{props.info.equipment.cpu}}</li>
    <li><span>RAM</span> {{props.info.equipment.ram}}</li>
    <li><span>NVME</span> {{props.info.equipment.nvme}}</li>
    <li><span>{{$t('internet')}}</span> {{props.info.equipment.internet}}</li>
    <li><span>AntiDDos</span> {{props.info.equipment.anti_ddos}}</li>
  </ul>
  <ui-base-button class="!w-full" label="Заказать" variant="solid" size="xl"/>
</div>
</template>

<style scoped lang="scss">
.cardWithPriceABC{
  @apply p-8 border border-primary-200 bg-primary-100/50 rounded-lg;

  &__server{
    @apply text-primary-600 bg-primary-200 rounded-3xl p-2 w-max text-sm mb-6;
  }
  &__priceInMonth{
    span{
      @apply text-3xl  font-semibold;
    }
  }
  &__priceInDay{
    @apply text-sm font-normal;
  }
  &__list{
    @apply py-8 grid gap-4;

    li{
      @apply flex justify-between font-medium text-base gap-3;
        span{
          @apply text-neutral-500;
        }
    }
  }
}
</style>