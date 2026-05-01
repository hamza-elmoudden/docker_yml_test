import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    
    AppService,
  ],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule, 
    UsersModule],
  controllers: [AppController],
})
export class AppModule {}
