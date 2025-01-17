
export function useRedirectToPage() {
  const localeRoute = useLocaleRoute();
  const redirectToPage = (page) => {
      const route = localeRoute({ name: page });
      if (route) {
        return navigateTo(route.fullPath);
      }
  };

  return { redirectToPage };
}
