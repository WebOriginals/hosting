import { useUserStore } from '../../pva_boom/store/user.js';
import { authModalState } from '../../pva_boom/utils/authModalState.js';
export function useRedirectToPage() {
  const storeUser = useUserStore();
  const localeRoute = useLocaleRoute();
  const redirectToPage = (page) => {
    if (storeUser.getIsLoggedIn) {
      const route = localeRoute({ name: page });
      if (route) {
        return navigateTo(route.fullPath);
      }
    } else {
      // authModalStep.value = authModalState.login;
      storeUser.openAuthModal(authModalState.Login);
    }
  };

  return { redirectToPage };
}
