export const checkInputFieldHasError = (data: string | undefined): boolean => {
  if (!data || data === "") return false;
  return true;
};
