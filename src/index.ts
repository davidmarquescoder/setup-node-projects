import Three from '@/one/two/three/three';

export default class Person {
  sayMyName(name: string) {
    return name;
  }

  sayMyAge(age: number) {
    return age;
  }
}

console.clear();
console.log(new Three().sayThree());
