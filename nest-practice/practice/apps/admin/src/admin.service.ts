import { Injectable } from '@nestjs/common';
import { ExampleClass } from './ExampleClass.service';

@Injectable()
export class AdminService {
  getAddition(): Promise<number> {

    let instance= new ExampleClass();

    let res= instance.add();

    return res;
  }
}
