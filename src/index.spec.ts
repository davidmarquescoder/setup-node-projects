function sum(x: number, y: number) {
  return x + y;
}

it('should sum', () => {
  expect(sum(2, 2)).toBe(4);
});
