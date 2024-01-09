import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configManager } from '@common/config/config.manager';
import { JwtGuard } from 'security/jwt/jwt.guard';
import { APP_GUARD } from '@nestjs/core';

import { SecurityModule } from 'security/security.module';

@Module({
  imports: [TypeOrmModule.forRoot(configManager.getTypeOrmConfig()),SecurityModule],
  controllers: [AppController],
  providers:[AppService,{provide: APP_GUARD,useClass: JwtGuard}],
  /*providers: [AppService , {
    provide: APP_GUARD, useClass: JwtGuard
  }],*/
})
export class AppModule {}