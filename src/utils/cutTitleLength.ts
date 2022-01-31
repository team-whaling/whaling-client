export const cutTitleLength = (str: string) => {
  if (str.length > 27) return str.substr(0, 26) + '...';
  else return str;
};
