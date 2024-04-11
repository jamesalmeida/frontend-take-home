

// Debouncing function to limit the number of API calls
export const debounce = (fn, delay) => {
    var timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

// Just shortens text and adds ... to the end to fit it in better
export const shortenText = (text) => {
  return text && text.length > 135
    ? text.substr(0, 135) + '...' : text;
};