import { Body, Controller, Get, Header, Post, Req, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { User } from './user.model';
import { UsersService } from './users.service';
import { diskStorage } from "multer"

import { writeFile } from 'fs';
import { join } from 'path';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  // @Header('Content-Type', 'application/json')
  getUsers(): User[] {
    return this.usersService.getUsers();
  }
  
  @Post()
  // addUser(@Req() req): any {    // will give the whole request object
  addUser(@Body() body): User {
    let _addedUser = this.usersService.addUser(body);
    return _addedUser;
  }

  // Getting form data is possible using some file interceptor
  
  @Post("upload")
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
    
  // to get all files from form data and can use req.body to get other form data
  @UseInterceptors(AnyFilesInterceptor())
  fileUpload(@UploadedFiles() files): any {
    for(let file of files) {
     writeFile(join('my-uploads', 'buffer.jpg'), file.buffer, err => {
       if(err) console.log('error: ', err)
     })
   }
  }
    
}
