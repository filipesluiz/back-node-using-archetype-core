import 'source-map-support/register';
import { bootstrap } from 'fibra-backend-core';
import { AppModule } from './app.module';

bootstrap(4000, '/up-down-cross', AppModule);
