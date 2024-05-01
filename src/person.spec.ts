import Person from '@/person'; // Agora com as configs passadas para o tsconfig eu não preciso mais usar "../" para voltar a até a pasta raiz (src).

const name = 'David';
const age = 25;

const person = new Person();

it('should sum', () => {
  expect(person.sayMyName(name)).toBe(name);
});

it('should sum', () => {
  expect(person.sayMyAge(age)).toBe(age);
});
