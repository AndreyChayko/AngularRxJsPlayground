export function* myGenerator() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < items.length; i++) {
    yield items[i];
  }
}

export function calculateScrollPercent(element: any) {
  const { scrollTop, scrollHeight, clientHeight } = element;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}
