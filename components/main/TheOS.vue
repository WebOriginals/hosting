<script setup lang="ts">

import 'swiper/css';

const { t } = useI18n();
</script>

<template>
<section class="os">
  <div class="os__container">
    <h2>{{$t('page.main.os.title')}}</h2>
    <Swiper
      class="os__swiper"
      :modules="[SwiperAutoplay]"
      :height="300"
      :loop="true"
      :centered-slides="true"
      :breakpoints="{280: {slidesPerView: 2.5,spaceBetween:15}, 1024: {slidesPerView: 4, spaceBetween:30},  1380: {slidesPerView: 5,spaceBetween:50}}"
      :autoplay="{delay: 2500}"
    >
      <SwiperSlide>
        <img src="/img/allos.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/alma-astra.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/centos.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/debian.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/ubuntu.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/windows.png" alt="">
      </SwiperSlide>
    </Swiper>
  </div>
</section>
</template>

<style scoped lang="scss">
.os {
  @apply py-16;

  h2{
    @apply mb-10;
  }

  &__swiper {
    .swiper-slide {
      @apply p-6 flex justify-center items-center border border-primary-200 h-[135px] w-[135px] md:h-[200px] md:w-[200px] rounded-lg;
    }

    .swiper-pagination {
      @apply relative pt-6;

      .swiper-pagination-bullet {
        @apply dark:bg-sky-400;
      }

      .swiper-pagination-bullet-active {
        @apply dark:bg-sky-500;
      }
    }
  }
}
</style>