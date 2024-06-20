import { useI18n } from 'vue-i18n';
import { email, helpers, minLength, required, sameAs, numeric, minValue } from '@vuelidate/validators';

export function useRulesForForm() {
  const { t } = useI18n();
  const isCapitalLetter = helpers.regex(/[A-Z]/);
  const mustBeNumber = helpers.regex(/\d/);
  const leastOneSpecialCharacter = helpers.regex(/[^\dA-Za-z]/);
  const latinLetterPattern = helpers.regex(/^[\w!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~№\-]*$/);
  const notSameAs = (data: { oldPassword: string; password: string }) => () => {
    return data.oldPassword !== data.password;
  };

  const RulesForFormEmail = () => {
    return {
      required: helpers.withMessage(t('form.errorForInput.email.required'), required),
      email: helpers.withMessage(t('form.errorForInput.email.email'), email),
    };
  };
  const RulesForFormPassword = () => {
    return {
      required: helpers.withMessage(t('form.errorForInput.password.required'), required),
      isCapitalLetter: helpers.withMessage(t('form.errorForInput.password.isCapitalLetter'), isCapitalLetter),
      mustBeNumber: helpers.withMessage(t('form.errorForInput.password.mustBeNumber'), mustBeNumber),
      latinLetterPattern: helpers.withMessage(t('form.errorForInput.password.latinLetterPattern'), latinLetterPattern),
      leastOneSpecialCharacter: helpers.withMessage(
        t('form.errorForInput.password.leastOneSpecialCharacter'),
        leastOneSpecialCharacter,
      ),
      minLength: helpers.withMessage(t('form.errorForInput.password.minLength'), minLength(8)),
    };
  };
  const RulesForFormConfirmPassword = (passwordInput) => {
    return {
      required: helpers.withMessage(t('form.errorForInput.confirmPassword.required'), required),
      sameAs: helpers.withMessage(t('form.errorForInput.confirmPassword.sameAs'), sameAs(passwordInput)),
    };
  };
  const RulesForFormNewPassword = (data: { oldPassword: string; password: string }) => {
    return {
      required: helpers.withMessage(t('form.errorForInput.password.required'), required),
      isCapitalLetter: helpers.withMessage(t('form.errorForInput.password.isCapitalLetter'), isCapitalLetter),
      mustBeNumber: helpers.withMessage(t('form.errorForInput.password.mustBeNumber'), mustBeNumber),
      latinLetterPattern: helpers.withMessage(t('form.errorForInput.password.latinLetterPattern'), latinLetterPattern),
      leastOneSpecialCharacter: helpers.withMessage(
        t('form.errorForInput.password.leastOneSpecialCharacter'),
        leastOneSpecialCharacter,
      ),
      minLength: helpers.withMessage(t('form.errorForInput.password.minLength'), minLength(8)),
      notSameAs: helpers.withMessage(t('form.errorForInput.confirmPassword.notSameAs'), notSameAs(data)),
    };
  };
  const RulesForFormTwoFA = () => {
    return {
      required: helpers.withMessage(t('form.errorForInput.twoFA.required'), required),
    };
  };
  const RulesForFormCodeFromEmail = () => {
    return {
      required: helpers.withMessage(t('form.errorForInput.codeFromEmail.required'), required),
    };
  };
  const RulesForNumeric = (minV) => {
    return {
      required: helpers.withMessage(t('form.errorForInput.numeric.required'), required),
      numeric: helpers.withMessage(t('form.errorForInput.numeric.pattern'), numeric),
      min: helpers.withMessage(t('form.errorForInput.numeric.min'), minValue(minV)),
    };
  };

  return {
    t,
    RulesForFormEmail,
    RulesForFormPassword,
    RulesForFormConfirmPassword,
    RulesForFormTwoFA,
    RulesForFormCodeFromEmail,
    RulesForFormNewPassword,
    RulesForNumeric,
  };
}
