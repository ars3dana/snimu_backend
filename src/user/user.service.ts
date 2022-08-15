import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOneById(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });

    return user;
  }

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { email } });

    return user;
  }

  async create(user: UserDto) {
    const newUser = await this.usersRepository.create(user);

    await this.usersRepository.save(user);

    return { newUser, message: 'User created' };
  }

  async update(id: number, user: UserDto) {
    await this.usersRepository.update(id, user);

    const updatedUser = await this.usersRepository.findOne({ where: { id } });

    return { updatedUser, message: 'User updated' };
  }

  async remove(id: number) {
    await this.usersRepository.delete({ id });

    return { message: 'User deleted' };
  }
}
