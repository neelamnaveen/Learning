import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleClass {

  constructor() {}

  async add(): Promise<number> {
    return 70;
  }
}