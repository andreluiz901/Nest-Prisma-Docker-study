import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '@/src/modules/users/dto/create-user.dto';
import { UpdateUserDto } from '@/src/modules/users/dto/update-user.dto';
import { DatabaseService } from '@/src/modules/database/database.service';
import { User } from '@/src/modules/users/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private database: DatabaseService) {}

  async create(createUserDto: CreateUserDto) {
    if (
      await this.database.users.findUnique({
        where: { email: createUserDto.email },
      })
    )
      throw new HttpException('Email inválido', HttpStatus.BAD_REQUEST);
    await this.database.posts.create({
      data: {
        date_created: new Date(),
        message: 'message',
        id_creator: 1,
      },
    });
    return this.database.users.create({
      data: createUserDto,
    });
  }

  async findAll(): Promise<Array<User>> {
    return this.database.users.findMany({
      include: {
        posts: {
          select: { id: true, comments: { select: { id: true } } },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.database.users.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    console.log(
      this.database.users.findUnique({
        where: { email: updateUserDto.email },
      }),
    );
    if (
      await this.database.users.findUnique({
        where: { email: updateUserDto.email },
      })
    )
      throw new HttpException('Email inválido', HttpStatus.BAD_REQUEST);

    return this.database.users.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
