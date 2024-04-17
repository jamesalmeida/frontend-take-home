

// Debouncing function to limit the number of API calls
export const debounce = (fn: (...args: any[]) => any, delay: number) => {
  let timeoutId: NodeJS.Timeout | null = null;
  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

// Just shortens text and adds ... to the end to fit it in better
export const shortenText = (text: string) => {
  return text && text.length > 135
    ? text.substr(0, 135) + '...' : text;
};
