import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable({})
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
  ) {}

  async login({ email, password }) {}

  async registration({ email, password }) {
    const oldUser = await this.userService.findOneByEmail(email);

    if (oldUser) {
      throw new HttpException(
        'User with this email already exist',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.userService.create({ email, password });
  }
}
