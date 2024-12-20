import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config/config';
// import { HttpClientModule } from '@angular/common/http';


@Module({
imports: [ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            load: [config],
          }),
          JwtModule.registerAsync({ 
            imports: [ ConfigModule ],
              useFactory: async (config) =>({
              secret: config.get('jwt.secret'),
              // signOptions: { expiresIn: config.get('jwt.expiresIn') }, //Optional: Token Expiration
              }),
              global: true,
              inject: [ConfigService],
            }),
            MongooseModule.forRootAsync({
              imports:[ConfigModule],
              useFactory: async (config: ConfigService) => ({
                uri: config.get('database.connectionString'), // MongoDB connection string
              }),
              inject: [ConfigService],  

            }),
            AuthModule,

  ],
  controllers: [AppController],
  providers: [AppService]

})
export class AppModule {}