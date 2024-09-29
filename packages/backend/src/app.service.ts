import { Injectable } from '@nestjs/common';
import { BaseDTO } from 'utilities';

@Injectable()
export class AppService {
  getHello(): BaseDTO {
    const base: BaseDTO = {
      id: 1,
      data: { name: 'Alexander', age: 39 },
    };
    return base;
  }
}
