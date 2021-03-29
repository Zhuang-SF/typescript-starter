import { TypeOrmModule } from '@nestjs/typeorm';
import { Mi_transfer_stockEntity } from './mi_transfer_stock.entity';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';

import { UserService } from '../user/user.service';
import { AuthMiddleware } from '../user/auth.middleware';
import { UserEntity } from '../user/user.entity';
import { TransferStockController } from './transferStock.controller';

import { TransferStockService } from './transferStock.service';

@Module({
  imports: [TypeOrmModule.forFeature([Mi_transfer_stockEntity, UserEntity])],
  controllers: [TransferStockController],
  providers: [TransferStockService, UserService],
})
export class TransferStockModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    // 添加新record的时候需要 auth 验证
    // consumer.apply(AuthMiddleware).forRoutes({
    //   path: 'transfer_stock/add',
    //   method: RequestMethod.POST,
    // });
  }
}
