<script setup lang="ts">
const localePath = useLocalePath();
const router = useRouter();
const { locale } = useI18n();
const { isMobile } = useGetWidth();
const emit = defineEmits(['closeMenu']);


const toggleButton = ref(null);
const hiddenBlock = ref(null);
const showContent = ref(false)


const localizedLink = computed(() => {
  const currentLocale = locale.value;
  return `/${currentLocale}/#tab-1`;
});
const scrollToSectionOnHome = async () => {
  const currentLocale = locale.value;
  const homePath = `/${currentLocale}`; // Подставьте нужный путь в зависимости от конфигурации i18n


  if (router.currentRoute.value.path === homePath) {
    router.push({ hash: '#tab-1' });

    closeMenu()

  } else {
    await router.push(`${homePath}#tab-1`);
    // router.push({ hash: '#tab-1' });
    closeMenu()
  }
};

const toggleBlock = () => {
  showContent.value = !showContent.value;
};

const handleClickOutside = (event) => {
  if (showContent.value && hiddenBlock.value && !hiddenBlock.value.contains(event.target) && !toggleButton.value.contains(event.target)) {
    showContent.value = false;
  }
};

const closeMenu = () => {
  if(isMobile.value){
    emit('closeMenu');
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="dropdown" @click="toggleBlock">
    <button class="dropdown-btn">{{ $t('nav.products.products') }}
      <i class="i-heroicons-chevron-down-20-solid"></i>
    </button>
    <div v-if="showContent" ref="hiddenBlock" class="dropdown-content">
      <nuxt-link class="dropdown__link" :to="localizedLink" @click.prevent="scrollToSectionOnHome">{{$t('nav.products.virtualServers')}}</nuxt-link>
      <nuxt-link class="dropdown__link" :to="localePath( '/waf', )" @click="closeMenu">{{$t('nav.products.WAF')}}</nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dropdown{
  @apply relative;

  &-btn{
    @apply flex gap-2 items-center  max-md:py-2 text-base;
  }
  &-content{
    @apply grid md:p-4 md:rounded-md md:shadow-2xl md:shadow-black/30 md:absolute md:w-44 md:-left-14 md:text-sm;
  }
  &__link{
    @apply max-md:py-2 ;
  }
}
</style>