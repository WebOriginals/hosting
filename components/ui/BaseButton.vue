<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
  },
  size: {
    type: String,
    default: 'xs',
  },
  icon: {
    type: String,
    default: null,
  },
  rounded: {
    type: String,
    default: 'rounded-lg',
  },
  variant: {
    type: String,
    default: 'solid',
  },
  color: {
    type: String,
    default: 'primary',
  }
});

const solid = {
  disabled: `disabled:bg-{color}-300 disabled:text-{color}-400 disabled:opacity-100 dark:disabled:bg-{color}-300 `,
  dark: 'dark:text-red dark:bg-{color}-800 w-full sm:w-auto ',
  darkFocus: 'dark:focus-visible:outline-{color}-400',
  darkHover: 'dark:hover:bg-{color}-300',
  light: `shadow-sm text-white bg-{color}-600 w-full sm:w-auto`,
  lightFocus:
      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500',
  lightHover: 'hover:bg-{color}-500',
};

const outline = {
  disabled:
      'disabled:bg-{color}-300 disabled:text-{color}-400 ring-0 disabled:opacity-100 dark:disabled:bg-{color}-300 dark:disabled:border  disabled:border  dark:disabled:text-{color}-400',
  dark: 'dark:text-{color}-800 dark:border-{color}-800 ring-0',
  darkFocus: 'dark:focus-visible:border-{color}-400 ring-0',
  darkHover: 'dark:hover:bg-{color}-500 dark:hover:text-white dark:hover:border-{color}-500 ring-0',
  light: 'rounded-lg border border-primary-500 text-{color}-500 bg-{color}-100 ring-0',
  lightFocus: 'focus-visible:border-{color}-500 ring-0',
  lightHover: 'hover:border-{color}-600 hover:bg-{color}-600 hover:text-white border-{color}-500 ',
};

const soft = {
  disabled:
      'dark:disabled:bg-transparent dark:disabled:text-{color}-400 disabled:bg-{color}-300 disabled:text-{color}-400 disabled:opacity-100 dark:disabled:bg-{color}-300 ',
  dark: 'dark:text-white dark:bg-{color}-900 ',
  darkFocus: '',
  darkHover: 'dark:hover:bg-{color}-500 dark:hover:text-white',
  light: 'text-black bg-sky-200/50 font-normal',
  lightFocus: '',
  lightHover: 'hover:bg-{color}-100 hover:text-{color}-600',
};

const btnStyle = {
  base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed justify-center',
  size: {
    '2sm': 'text-sm',
    sm: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
    xxl: 'text-base',
  },
  padding: {
    '2sm': 'py-0.5 px-0.5',
    sm: 'py-0.5 px-0.5',
    md: 'p-1 px-2',
    lg: 'py-2 px-4',
    xl: 'py-3 px-6',
    xxl: 'py-4 px-8',
  },
  rounded: props.rounded,
  font: 'TT Norms Pro',
  variant: {
    solid: `${solid.light} ${solid.lightFocus} ${solid.lightHover} ${solid.dark} ${solid.darkFocus} ${solid.darkHover} ${solid.disabled}`,
    outline: `${outline.light} ${outline.lightFocus} ${outline.lightHover} ${outline.dark} ${outline.darkFocus} ${outline.darkHover} ${outline.disabled}`,
    soft: `${soft.light} ${soft.lightFocus} ${soft.lightHover} ${soft.dark} ${soft.darkFocus} ${soft.darkHover} ${soft.disabled}`,
  },
  icon: {
    base: 'flex-shrink-0',
    size: {
      '2xs': 'h-4 w-4',
      xs: 'h-4 w-4',
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6',
    },
  },
};
</script>

<template>
  <UButton :color="props.color" :ui="btnStyle" :label="props.label" :size="props.size" :icon="props.icon" :variant="props.variant"/>
</template>

<style scoped lang="scss">

</style>