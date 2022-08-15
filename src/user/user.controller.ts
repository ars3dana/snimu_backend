import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() createUserDto: UserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('view')
  findAll() {
    return this.userService.findAll();
  }

  @Get('get')
  findOne(@Query('id') id: string) {
    return this.userService.findOneById(+id);
  }

  @Patch('edit')
  update(@Query('id') id: string, @Body() updateUserDto: UserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete('delete')
  remove(@Query('id') id: string) {
    return this.userService.remove(+id);
  }
}
