export function useGetIcon() {
  const config = useRuntimeConfig();
  const getServiceIcon = (serviceName) => `${config.public.amazonUrl}/service/${serviceName}0.webp`;
  const getCountryIcon = (countryName) => `${config.public.amazonUrl}/country/${countryName}.svg`;
  const getPayIcon = (payName) => `${config.public.amazonUrl}/pay/${payName}.svg`;
  const getIcon = (name) => `${config.public.amazonUrl}/icons/${name}.svg`;
  const getPlatformIcon = (platforName) => `${config.public.amazonUrl}/platform/${platforName}.svg`;

  return { getServiceIcon, getCountryIcon, getPayIcon, getIcon, getPlatformIcon };
}
