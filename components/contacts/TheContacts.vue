<script setup lang="ts">

</script>

<template>
  <section class="internalFirst">
    <div class="internalFirst__container">
      <div class="internalFirst__gradient">
        <h1>{{$t('page.waf.title')}}</h1>
        <ul class="internalFirst__list">
          <li>
            <p>бесплатно с любого номера</p>
            <span>+372 57488752</span>
          </li>
          <li>
            <p>работаем круглосуточно</p>
            <span>support@ou.digital</span>
          </li>
          <li>
            <p>телеграм-бот для быстрых вопросов</p>
            <span>@ouhosting_bot</span>
          </li>
          <li>
            <p>юридическая информация</p>
            <span>CloudWebhosting OÜ (16943169 register code)</span>
          </li>
        </ul>
        <div class="internalFirst__soc">
          <p>социальные сети</p>
          <!--TODO добавить ссылку для соц сети-->
          <a href="#">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2093_709)">
                <path d="M27.9918 0H0.00820313C0.00367266 0 0 0.00367266 0 0.00820313V27.9918C0 27.9963 0.00367266 28 0.00820313 28H27.9918C27.9963 28 28 27.9963 28 27.9918V0.00820313C28 0.00367266 27.9963 0 27.9918 0Z" fill="#37AEE2"/>
                <path d="M10.8828 22.0938C10.2812 22.0938 10.3359 21.875 10.1719 21.3281L8.42188 15.5859L21.8203 7.71094" fill="#C8DAEA"/>
                <path d="M10.8828 22.0938C11.2656 22.0938 11.4844 21.875 11.7578 21.6562L14.2188 19.3047L11.1562 17.4453" fill="#A9C9DD"/>
                <path d="M11.1565 17.4453L18.5393 22.8594C19.3049 23.3516 19.9611 23.0781 20.1799 22.0937L23.1877 7.98437C23.4611 6.78125 22.6955 6.23437 21.8752 6.61718L4.32052 13.3984C3.17208 13.8359 3.17208 14.5469 4.10177 14.8203L8.64083 16.2422L19.0315 9.625C19.5236 9.35156 19.9611 9.46093 19.633 9.84375" fill="#F6FBFE"/>
              </g>
              <defs>
                <clipPath id="clip0_2093_709">
                  <rect width="28" height="28" rx="3" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <div class="internalFirst__img">
        <img src="/img/star.svg" alt="">
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
    @apply bg-gradient-to-r from-primary-500 to-primary-400 text-white p-9 pb-28 sm:pb-40 lg:py-14 lg:px-16 rounded-3xl relative grid gap-4;

    &:before{
      content: "";
      z-index: 0;
      @apply bg-[url('/img/contact.svg')]  bg-no-repeat bg-[36%_10%]  bg-[length:120%] absolute w-full h-full top-0 right-0
    }

    p{
      @apply text-white;
    }
  }

  &__img{
    @apply max-lg:origin-center w-2/3 max-lg:-rotate-[25deg] absolute -bottom-24 -right-8  sm:-bottom-48 sm:-right-24  lg:-right-24 lg:-top-52
  }

  &__list{
    @apply grid gap-4 mt-8 lg:mt-14;

    li{

      p{
        @apply text-white/50 text-sm
      }

      span{
        @apply text-3xl font-medium
      }

      &:last-child{
        @apply lg:mt-24;
      }
    }
  }

  &__soc{
    @apply lg:absolute lg:right-16 lg:bottom-16;

    p{
      @apply text-white/50 text-sm mb-4
    }
  }
}
</style>