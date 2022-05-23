import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimconController } from './primcon/primcon.controller';

@Module({
  imports: [], //importa otros modulos
  controllers: [AppController, PrimconController],
  providers: [AppService],
})
export class AppModule {}
