export function debounce<T extends []>(
  func: (...args: T) => void,
  wait: number
) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function executedFunction(...args: T) {
    const later = () => {
      clearTimeout(timeout!);
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}