import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignUpDto } from './dto/signup.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { LogInDto } from './dto/login.dto';


@Injectable()
  export class AuthService{

    async login( Credential: LogInDto){
      const {email, password} = Credential;

      // find if the user exists by email
      const user = await  this.UserModel.findOne({email});
      if(!user){
        throw new UnauthorizedException(" User Email does not Exist");
      }

      //Compare the two passwords for the user
      const passwordMatch =await bcrypt.compare(password, user.password);
      if(!passwordMatch){
        throw new UnauthorizedException("Password is incorrect");
        
    }
    //Generate JWT tokens

    return {
      message:" Login Successful",
      // accessToken,
      
    }
}

    constructor(@InjectModel(User.name) private UserModel: Model<User>){}
    async signup(signupData: SignUpDto){
      const {email, password, name} = signupData;

      //check if the email exists
      const emailInUse = await this.UserModel.findOne({
        email: signupData.email
      });
      if( emailInUse ){
        throw new ConflictException("This email is already in user");
      }
      
      //Hash Password

      const hashedPassword = await bcrypt.hash(signupData.password, 10);


      //Create user document and save in the mongodb

      await this.UserModel.create({
        name,
        email,
        password: hashedPassword,
      });

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

