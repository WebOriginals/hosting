import { useI18n } from 'vue-i18n';
export function useResponseStatusesState() {
  const { t } = useI18n();

  const responseStatusesState = Object.freeze({
    2000: t('alert.success'),
    2001: t('alert.user_registered'),
    2002: t('alert.successfully_logged_in'),
    2003: t('alert.successfully_logged_out'),
    2004: t('alert.successfully_buy_activation'),

    4001: t('alert.user_not_found'),
    4002: t('alert.email_not_verified'),
    4003: t('alert.credentials_not_match'),
    4004: t('alert.not_found'),
    4005: t('alert.validation_registration_error'),
    4006: t('alert.validation_error'),
    4007: t('alert.payload_error'),
    4008: t('alert.activation_not_found'),
    4009: t('alert.activation_cant_be_canceled'),
    4010: t('alert.activation_cant_be_finished_no_code'),
    4011: t('alert.unauthorized'),
    4012: t('alert.resetTokenExpired'),
    4013: t('alert.badBalance'),

    4101: t('alert.paramService'),
    4102: t('alert.paramCountries'),
    4103: t('alert.paramPrice'),
    4104: t('alert.noNumbers'),

    4201: t('alert.outdatedData'),

    5000: t('alert.unknown_server_error'),
    5001: t('alert.user_not_created'),
    5002: t('alert.email_not_sent'),
    5003: t('alert.activation_order_not_created'),
    5004: t('alert.api_error'),
    5005: t('alert.early_cancel_denied'),
  });
  return { t, responseStatusesState };
}

// по нажатию на крестик смотрис обшику 4201 и обновляем данные по смс у конкретного номера
// поссле тогда как юзер получил смсс и начал за галочку  обновить данные и убедиться что номер и смс стерты из списка
