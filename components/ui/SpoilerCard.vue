<template>
  <div class="pva-spoiler" :class="[variant[props.variant].wrapperStyle, { isOpen: isVisible }]">
    <button
      class="pva-spoiler__button"
      @click="toggleShowText"
      :class="[{ isOpen: isVisible }, variant[props.variant].buttonStyle]"
    >
      <slot name="logo"></slot>
      <slot name="title">
        <h5 class="text">{{ $rt(item.label) }}</h5>
      </slot>
      <slot name="icon">
        <span class="icon i-heroicons-chevron-down-20-solid"></span>
      </slot>
    </button>
    <div class="pva-spoiler__content pva-spoiler-content" ref="spoilerContent" :class="[{ isOpen: isVisible }]">
      <div class="pva-spoiler-content__body">
        <slot name="content">
          {{ $rt(item.content) }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
  size: {
    type: String,
    required: true,
    default: 'md',
  },
  variant: {
    type: String,
    required: true,
    default: 'withTwoColumns',
  },
});

const spoilerContent = ref(null);
const isVisible = ref(false);

const toggleShowText = () => {
  isVisible.value = !isVisible.value;
};

const ui = {
  padding: {
    md: 'px-4 py-4',
    xl: 'px-12 py-8',
  },
  rounded: {
    md: 'rounded-lg',
    xl: 'rounded-2xl',
  },
};

const variant = {
  withTwoColumns: {
    wrapperStyle: `withTwoColumns bg-white border-sky-200 border-0 overflow-hidden ${ui.rounded[props.size]}`,
    buttonStyle: `w-full text-left grid gap-4 grid-cols-[1fr_auto] justify-start items-center text-black group-hover:text-primary-500 font-semibold text-xl ${
      ui.padding[props.size]
    }`,
  },
  withThreeColumns: {
    wrapperStyle: `withThreeColumns bg-white border-sky-200 hover:border-sky-500 border-2 overflow-hidden ${
      ui.rounded[props.size]
    }`,
    buttonStyle: `w-full text-left grid gap-4 grid-cols-[auto_1fr_auto] justify-start items-center text-black  font-semibold text-xl ${
      ui.padding[props.size]
    }`,
  },
};
</script>

<style scoped lang="scss">
.pva-spoiler {
  &__button {
    @apply relative;

    & .icon {
      @apply w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-800 dark:text-white flex shrink-0 items-center justify-center -my-1 transform duration-300;

      &:before {
        @apply text-xs transform duration-300;
      }
    }

    &.isOpen {
      & .icon {
        @apply bg-primary-500 text-white transform rotate-180;
      }

      & .paymentsCard__btn {
        @apply bg-red-600 transform rotate-180;
      }
    }

    .text {
      @apply font-normal;
    }
  }

  &-content {
    &__body {
      @apply overflow-hidden grid gap-2;
    }
  }

  &.withTwoColumns {
    @apply border border-primary-300;
    &.isOpen{
      @apply border border-primary-600;
      .pva-spoiler__button {
        @apply  bg-primary-100;
      }
    }

    .pva-spoiler__content {
      @apply text-black grid grid-rows-[0fr];

      &.isOpen {
        @apply grid-rows-[1fr] px-12 py-8 pt-0 bg-purple-100;
      }
    }
  }

  &.withThreeColumns {
    &.isOpen {
      @apply bg-purple-300;
    }

    :deep(.pva-spoiler__button) {
      .pva-spoiler__logo {
        @apply w-12 h-12 overflow-hidden rounded-full;
        img {
          @apply w-full h-full;
        }
      }

      &.isOpen {
        button {
          @apply transform rotate-180;
        }
      }

      .icon-pva__arrow_down {
        @apply flex justify-center items-center;
        &:before {
          font-size: 0.3rem;
        }
      }

      &:hover {
        .pva-spoiler__title {
          @apply text-black;
        }
        button {
          @apply bg-sky-600;
          .icon-pva__arrow_down {
            @apply text-white;
          }
        }
      }
    }

    .pva-spoiler__content {
      @apply text-stone-500 grid grid-rows-[0fr];

      &.isOpen {
        @apply grid-rows-[1fr] px-4 py-8 pt-0;
      }
    }
  }


}

@media (hover: hover) {
  .pva-spoiler {
    &:hover {
      .pva-spoiler__button {
        @apply text-primary-600;
        & .icon {
          @apply bg-primary-500 text-white;
        }
      }
    }
  }
}
</style>
