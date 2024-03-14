export const formatDate = (dateString: string, locale = 'en-UK'): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  return date.toLocaleDateString(locale, options);
};

export const formatTime = (dateString: string, locale = 'en-US'): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    // second: '2-digit',
    timeZone: 'UTC',
  };

  let formattedTime = date.toLocaleTimeString(locale, options);

  if (locale === 'de-DE') {
    formattedTime += ' Uhr';
  }

  return formattedTime;
};
