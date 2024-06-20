/**
 * Пользовательский хук для реализации бесконечной прокрутки страниц.
 *
 * @template T — Тип элементов во входном массиве.
 * @param {Ref<HTMLElement>} elementRef — ссылка на элемент, за которым ведется наблюдение за изменением видимости.
 * @param {Ref<T[]>} inputArray — ссылка на входной массив элементов.
 * @param {() => void} callBackOnChange — функция обратного вызова, вызываемая при изменении входного массива.
 * @returns {Object} — объект, содержащий вычисляемый массив с нумерацией страниц и функцией наблюдения.
 */

import { useIntersectionObserver } from '@vueuse/core';

export const useInfiniteScrollPagination = <T>(elementRef: Ref<HTMLElement | null>, inputArray: Ref<T[]>) => {
  const currentPage = ref(0);

  const loadMoreOnVisibilityChange: IntersectionObserverCallback = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      currentPage.value += 1;
    }
  };

  // отпагинированный массив  для отображения на странице
  const arrayWithPagination = computed(() => {
    if (!inputArray.value || inputArray.value.length === 0) return [];
    // условие для того, чтобы не добавлять в массив больше, чем есть элементов
    const maxSlice =
      inputArray.value.length < currentPage.value * 10 ? inputArray.value.length : currentPage.value * 10;

    return inputArray.value.slice(0, maxSlice);
  });

  // следим за изменением отфильтрованного списка, если он изменился, то обнуляем индекс и массив для отображения
  watch(inputArray, () => {
    currentPage.value = 1;
  });

  const debounced = debounce(loadMoreOnVisibilityChange, 0);
  const observe = () => {
    return useIntersectionObserver(elementRef, debounced, { threshold: 0.5 });
  };

  return { arrayWithPagination, observe, currentPage };
};
