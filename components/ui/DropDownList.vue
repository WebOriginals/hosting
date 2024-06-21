<script setup lang="ts">
const localePath = useLocalePath();
const showContent = ref(false)
</script>

<template>
  <div class="dropdown">
    <button class="dropdown-btn" @click="showContent = !showContent">{{ $t('nav.products.products') }}
      <i class="i-heroicons-chevron-down-20-solid"></i>
    </button>
    <div v-if="showContent" class="dropdown-content">
      <nuxt-link :to="localePath( '#tab-1', )">{{$t('nav.products.virtualServers')}}</nuxt-link>
      <nuxt-link :to="localePath( '/waf', )">{{$t('nav.products.WAF')}}</nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dropdown{
  @apply relative;

  &-btn{
    @apply flex gap-2 items-center;
  }
  &-content{
    @apply grid md:p-4 md:rounded-md md:shadow-2xl md:shadow-black/30 md:absolute md:w-44 md:-left-14 md:text-sm;
  }
}
</style>