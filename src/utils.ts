/* eslint-disable-next-line */
export const createUrl = (url: string) => {
  if (url.startsWith('https://') || url.startsWith('http://')) {
    return url;
  }

  return `https://${url}`;
};
