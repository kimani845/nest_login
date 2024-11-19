import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignUpDto } from './dto/signup.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
  export class AuthService{
    constructor(@InjectModel(User.name) private UserModel: Model<User>){}
    async signup(signupData: SignUpDto){

      //check if the email exists
      const emailInUse = await this.UserModel.findOne({
        email: signupData.email
      });
      if( emailInUse ){
        throw new ConflictException("This email is already in user");
      }
      
      //Hash Password

      


    }
  }


// @Injectable()
// export class AuthService {
//   create(createAuthDto: CreateAuthDto) {
//     return 'This action adds a new auth';
//   }
//   findAll() {
//     return `This action returns all auth`;
//   }
//   findOne(id: number) {
//     return `This action returns a #${id} auth`;
//   }
//   update(id: number, updateAuthDto: UpdateAuthDto) {
//     return `This action updates a #${id} auth`;
//   }
//   remove(id: number) {
//     return `This action removes a #${id} auth`;
//   }
// }

