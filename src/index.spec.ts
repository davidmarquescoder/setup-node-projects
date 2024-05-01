import Person from '@/index';

const name = 'David';
const age = 25;

const person = new Person();

it('should sum', () => {
  expect(person.sayMyName(name)).toBe(name);
});

it('should sum', () => {
  expect(person.sayMyAge(age)).toBe(age);
});
