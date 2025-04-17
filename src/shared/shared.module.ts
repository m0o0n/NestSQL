import { Global, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { LoggerMiddleware } from './middlewares/LoggerMiddleware';
@Global()
@Module({
    imports: [DatabaseModule],
    providers: [LoggerMiddleware],
    exports: [DatabaseModule, LoggerMiddleware],
})
export class SharedModule {}
