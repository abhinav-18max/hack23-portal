import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {


  async findOne(username: string): Promise<User | undefined> {
     return null;

  }
}
