import * as express from 'express';
import { Request, Response } from 'express';
import Person from '@/person';

const app = express();

app.get('/', (request: Request, response: Response) => {
  response.send(new Person().sayMyName('Hi, my name is David!'));
});

app.listen(3333, () => {
  console.clear();
  console.log('Server Up. Listening on port 3333!');
});
