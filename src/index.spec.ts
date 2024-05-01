import Person from '.';

const name = 'David';
const person = new Person();

it('should sum', () => {
  expect(person.sayMyName(name)).toBe('David');
});
