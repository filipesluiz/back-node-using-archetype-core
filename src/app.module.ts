import { Module } from '@nestjs/common';

import { imports, providers, controllers, AppCoreModule } from 'fibra-backend-core';
import { winstonLogger } from 'fibra-backend-core';
import { ProductModule } from './product/product.module';

@Module({
    imports: [
        ...imports,
        winstonLogger('up-down-cross'),
        ProductModule,
    ],
    controllers: [
        ...controllers,
    ],
    providers: [
        ...providers,
    ],
})
export class AppModule extends AppCoreModule {}
