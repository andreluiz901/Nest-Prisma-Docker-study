import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from '@/modules/users/dto/create-user.dto'; //TODO:@
import { UpdateUserDto } from '@/modules/users/dto/update-user.dto';
import { DatabaseService } from '@/modules/database/database.service';
import { User } from '@/modules/users/entities/user.entity';
import {
  FindOneByEmailDTO,
  RulesFindOneByEmail,
} from '@/modules/users/dto/find-one-by-email-user.dto';
import { SecurityService } from '@/modules/security/security.service';

@Injectable()
export class UsersService {
  constructor(
    private database: DatabaseService,
    private securityService: SecurityService,
  ) {}

  async create({
    email,
    fullName,
    password,
    username,
    profile_photo,
  }: CreateUserDto) {
    await this.findOneByEmail({ email, rule: RulesFindOneByEmail.IF_EXISTS });

    return this.database.users.create({
      select: {
        email: true,
        fullName: true,
        username: true,
        profile_photo: true,
      },
      data: {
        email,
        fullName,
        username,
        profile_photo,
        password: this.securityService.encrypt(password),
      },
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

  async findOneByEmail({
    email,
    rule,
  }: FindOneByEmailDTO): Promise<User | undefined> {
    const responseUser = await this.database.users.findUnique({
      where: { email },
    });

    if (rule === RulesFindOneByEmail.IF_NOT_EXISTS) {
      if (responseUser) {
        return responseUser;
      }
      throw new NotFoundException('Usuário não existe');
    }

    if (responseUser) {
      throw new BadRequestException('Email já existe.');
    }
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
