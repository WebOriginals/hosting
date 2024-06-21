
<script setup lang="ts">
const { t } = useI18n();
const items = [
  {
    flag: '/img/de.svg',
    slot: 'slotOne',
    label: t('countries.de'),
    icon: 'i-heroicons-arrow-down-tray',
    data: [
      {
        name: 'RU-ABS-1',
        priceMonth: '$50',
        priceDay: '$1.25',
        equipment: {
          cpu: '1 x 5.8 ГГц',
          ram: '8 GB',
          nvme: '15 GB ',
          internet: '10 GBit/s',
          anti_ddos: 'StormWall до 2TB/s',
        },
      },
      {
        name: 'RU-ABS-1',
        priceMonth: '$50',
        priceDay: '$1.25',
        equipment: {
          cpu: '1 x 5.8 ГГц',
          ram: '8 GB',
          nvme: '15 GB ',
          internet: '10 GBit/s',
          anti_ddos: 'StormWall до 2TB/s',
        },
      },
      {
        name: 'RU-ABS-1',
        priceMonth: '$50',
        priceDay: '$1.25',
        equipment: {
          cpu: '1 x 5.8 ГГц',
          ram: '8 GB',
          nvme: '15 GB ',
          internet: '10 GBit/s',
          anti_ddos: 'StormWall до 2TB/s',
        },
      },
      {
        name: 'RU-ABS-1',
        priceMonth: '$50',
        priceDay: '$1.25',
        equipment: {
          cpu: '1 x 5.8 ГГц',
          ram: '8 GB',
          nvme: '15 GB ',
          internet: '10 GBit/s',
          anti_ddos: 'StormWall до 2TB/s',
        },
      },
      {
        name: 'RU-ABS-1',
        priceMonth: '$50',
        priceDay: '$1.25',
        equipment: {
          cpu: '1 x 5.8 ГГц',
          ram: '8 GB',
          nvme: '15 GB ',
          internet: '10 GBit/s',
          anti_ddos: 'StormWall до 2TB/s',
        },
      },
      {
        name: 'RU-ABS-1',
        priceMonth: '$50',
        priceDay: '$1.25',
        equipment: {
          cpu: '1 x 5.8 ГГц',
          ram: '8 GB',
          nvme: '15 GB ',
          internet: '10 GBit/s',
          anti_ddos: 'StormWall до 2TB/s',
        },
      },
      {
        name: 'RU-ABS-1',
        priceMonth: '$50',
        priceDay: '$1.25',
        equipment: {
          cpu: '1 x 5.8 ГГц',
          ram: '8 GB',
          nvme: '15 GB ',
          internet: '10 GBit/s',
          anti_ddos: 'StormWall до 2TB/s',
        },
      },
      {
        name: 'RU-ABS-1',
        priceMonth: '$50',
        priceDay: '$1.25',
        equipment: {
          cpu: '1 x 5.8 ГГц',
          ram: '8 GB',
          nvme: '15 GB ',
          internet: '10 GBit/s',
          anti_ddos: 'StormWall до 2TB/s',
        },
      },
    ],
  },
  {
    flag: '/img/ne.svg',
    slot: 'slotTow',
    label: t('countries.ne'),
    data: [
      {
        name: 'EN-ABS-1',
        priceMonth: '$50',
        priceDay: '$1.25',
        equipment: {
          cpu: '1 x 5.8 ГГц',
          ram: '8 GB',
          nvme: '15 GB ',
          internet: '10 GBit/s',
          anti_ddos: 'StormWall до 2TB/s',
        },
      },
      {
        name: 'EN-ABS-1',
        priceMonth: '$50',
        priceDay: '$1.25',
        equipment: {
          cpu: '1 x 5.8 ГГц',
          ram: '8 GB',
          nvme: '15 GB ',
          internet: '10 GBit/s',
          anti_ddos: 'StormWall до 2TB/s',
        },
      },
      {
        name: 'RU-ABS-1',
        priceMonth: '$50',
        priceDay: '$1.25',
        equipment: {
          cpu: '1 x 5.8 ГГц',
          ram: '8 GB',
          nvme: '15 GB ',
          internet: '10 GBit/s',
          anti_ddos: 'StormWall до 2TB/s',
        },
      },
      {
        name: 'RU-ABS-1',
        priceMonth: '$50',
        priceDay: '$1.25',
        equipment: {
          cpu: '1 x 5.8 ГГц',
          ram: '8 GB',
          nvme: '15 GB ',
          internet: '10 GBit/s',
          anti_ddos: 'StormWall до 2TB/s',
        },
      },
      {
        name: 'RU-ABS-1',
        priceMonth: '$50',
        priceDay: '$1.25',
        equipment: {
          cpu: '1 x 5.8 ГГц',
          ram: '8 GB',
          nvme: '15 GB ',
          internet: '10 GBit/s',
          anti_ddos: 'StormWall до 2TB/s',
        },
      },
      {
        name: 'RU-ABS-1',
        priceMonth: '$50',
        priceDay: '$1.25',
        equipment: {
          cpu: '1 x 5.8 ГГц',
          ram: '8 GB',
          nvme: '15 GB ',
          internet: '10 GBit/s',
          anti_ddos: 'StormWall до 2TB/s',
        },
      },
      {
        name: 'RU-ABS-1',
        priceMonth: '$50',
        priceDay: '$1.25',
        equipment: {
          cpu: '1 x 5.8 ГГц',
          ram: '8 GB',
          nvme: '15 GB ',
          internet: '10 GBit/s',
          anti_ddos: 'StormWall до 2TB/s',
        },
      },
      {
        name: 'EN-ABS-1',
        priceMonth: '$50',
        priceDay: '$1.25',
        equipment: {
          cpu: '1 x 5.8 ГГц',
          ram: '8 GB',
          nvme: '15 GB ',
          internet: '10 GBit/s',
          anti_ddos: 'StormWall до 2TB/s',
        },
      },
    ],
  },
];
const style = {
  wrapper: 'relative space-y-2',
  container: 'relative w-full',
  base: 'focus:outline-none',
  list: {
    base: 'relative',
    background: 'bg-transparent',
    rounded: 'rounded-lg',
    shadow: '',
    padding: 'p-1 mb-10',
    height: 'h-10',
    width: 'w-full sm:w-2/4 xl:w-1/4',
    marker: {
      wrapper: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
      base: 'w-full h-full border border-primary-300',
      background: 'bg-primary-200',
      rounded: 'rounded-md',
      shadow: 'shadow-sm',
    },
    tab: {
      base: 'relative inline-flex items-center justify-center flex-shrink-0  ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
      background: '',
      active: 'text-gray-900 dark:text-white',
      inactive: 'text-gray-500 dark:text-gray-400',
      height: 'h-8',
      padding: 'px-3',
      size: 'text-sm',
      font: 'font-medium',
      rounded: 'rounded-md',
      shadow: '',
    },
  },
}

</script>

<template>
  <section class="ratesAndLocations">
    <div class="ratesAndLocations__container">
      <h2>Доступные тарифы и локации </h2>
      <UTabs :items="items" :ui="style">
        <template #default="{ item }">
          <div class="flex items-center gap-2 relative truncate bg-transparent">
            <img :src="item.flag" alt="" class="w-4 h-4 flex-shrink-0">
            <span class="truncate text-black"> {{ item.label }}</span>
          </div>
        </template>
        <template #slotOne="{ item }">
          <div class="ratesAndLocations__grid">
            <ui-card-with-price-a-b-c v-for="(info, index) in item.data" :key="index" :info="info" />
          </div>
        </template>

        <template #slotTow="{ item }">
          <div class="ratesAndLocations__grid">
            <ui-card-with-price-a-b-c v-for="(info, index) in item.data" :key="index" :info="info" />
          </div>
        </template>

      </UTabs>
    </div>
  </section>
</template>

<style scoped lang="scss">
.ratesAndLocations {
  @apply py-16;

  h2{
    @apply mb-10;
  }

  &__grid {
    @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4
  }
}
</style>