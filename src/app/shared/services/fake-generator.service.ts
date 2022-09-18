import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root',
})
export class FakeGeneratorService {
  constructor() {}

  generateBigText() {
    return faker.lorem.lines(2000);
  }
}
