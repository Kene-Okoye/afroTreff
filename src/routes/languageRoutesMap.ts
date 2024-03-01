import { languageRoutesMapType } from '@/routes/types/locationMapType';

const languageRoutesMap: languageRoutesMapType = {
  '/': { en: '/en', de: '/de' },

  '/en': { en: '/en', de: '/de' },
  '/de': { en: '/en', de: '/de' },

  '/en/vision-and-team': { en: '/vision-and-team', de: '/vision-und-team' },
  '/de/vision-und-team': { en: '/vision-and-team', de: '/vision-und-team' },

  '/en/activities': { en: '/en/activities', de: '/de/aktivitaeten' },
  '/de/aktivitaeten': { en: '/en/activities', de: '/de/aktivitaeten' },

  '/en/blog': { en: '/en/blog', de: '/de/blog' },
  '/de/blog': { en: '/en/blog', de: '/de/blog' },

  '/en/albums': { en: '/en/albums', de: '/de/alben' },
  '/de/alben': { en: '/en/albums', de: '/de/alben' },

  '/en/get-involved': { en: '/en/get-involved', de: '/de/unterstuetzen-sie-uns' },
  '/de/unterstuetzen-sie-uns': { en: '/en/albums', de: '/de/unterstuetzen-sie-uns' },

  '/en/faq': { en: '/en/faq', de: '/de/faq' },
  '/de/faq': { en: '/en/faq', de: '/de/faq' },

  '/en/register': { en: '/en/register', de: '/de/anmelden' },
  '/de/anmelden': { en: '/en/register', de: '/de/anmelden' },

  '/en/thank-you': { en: '/en/thank-you', de: '/de/vielen-dank' },
  '/de/vielen-dank': { en: '/en/thank-you', de: '/de/vielen-dank' },

  '/en/contact': { en: '/en/contact', de: '/de/kontakt' },
  '/de/kontakt': { en: '/en/contact', de: '/de/kontakt' },

  '/en/imprint': { en: '/en/imprint', de: '/de/impressum' },
  '/de/impressum': { en: '/en/imprint', de: '/de/impressum' },

  '/en/privacy': { en: '/en/privacy', de: '/de/datenschutz' },
  '/de/datenschutz': { en: '/en/privacy', de: '/de/datenschutz' },
};

export default languageRoutesMap;
