import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { User } from './user.model';
import { UsersService } from './users.service';
import { diskStorage } from 'multer';

import { writeFile } from 'fs';
import { join } from 'path';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  // @Header('Content-Type', 'application/json')
  getAllUsers(): User[] {
    return this.usersService.getUsers();
  }

  @Post()
  addUser(@Body() body): User {
    let _addedUser = this.usersService.addUser(body);
    return _addedUser;
  }

  @Get(':id')
  getUser(@Param() param): User {
    let _user = this.usersService.findUser(param);
    if (_user) return _user;
    else {
      throw new NotFoundException('User not found!')
    }
  }

  @Patch(':id')
  updateUser(@Param('id') id, @Body() body): User {
    let _updatedUser = this.usersService.updateUser(id, body);
    if(_updatedUser) return _updatedUser;
    else throw new NotFoundException("User not found");
  }
  
  @Delete(':id')
  deleteUser(@Param('id') id): any {
    let _deleted = this.usersService.deleteUser(id);
    if (_deleted) return { message: 'User Deleted Successfully!' };
    else throw new NotFoundException('User not found');
  }

  @Post('upload')
  // @UseInterceptors(FileInterceptor('file', {
  //   storage: diskStorage({
  //     filename: function (req, file, cb) {
  //       cb(null, file.originalname)
  //     },
  //     destination: "my-uploads"
  //   })
  // }))
  // fileUpload(@UploadedFile() file): any {
  //   console.log('file: ', file);
  // }

  // to get all files from form data and can use req.body or @Body to get other form data
  @UseInterceptors(AnyFilesInterceptor())
  fileUpload(@UploadedFiles() files): any {
    for (let file of files) {
      writeFile(join('my-uploads', 'buffer.jpg'), file.buffer, (err) => {
        if (err) console.log('error: ', err);
      });
    }
  }
}
