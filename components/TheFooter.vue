<script setup lang="ts">

</script>

<template>
<section class="footer">
  <div class="footer__container">
    <icons-the-logo/>
    <p>©2023. All right reserved.</p>
  </div>
</section>
</template>

<style scoped lang="scss">
.footer{
  @apply py-14;

  &__container{
    @apply grid gap-4 justify-items-center sm:flex sm:grid-cols-[auto_auto] sm:items-center sm:gap-4 sm:justify-center;
  }
}
</style>