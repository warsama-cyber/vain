import {NestFactory} from '@nestjs/core';
import { AppModule } from '@common/home/app.module';
import { ConfigKey } from '@common/config/enum/config-key.enum';
import {swaggerConfiguration} from '@common/documentation';
import {Logger, ValidationError, ValidationPipe} from '@nestjs/common';
import { configManager } from '@common/config/config.manager';
import { HttpExceptionFilter } from '@common/config/exception';
import { ValidationException } from '@common/api';
import { ApiInterceptor } from '@common/api/api.interceptor';
const bootstrap = async () => {
const app = await NestFactory.create(AppModule);
app.setGlobalPrefix(configManager.getValue(ConfigKey.APP_BASE_URL));
swaggerConfiguration.config(app);
app.useGlobalFilters(new HttpExceptionFilter());
await app.listen(parseInt(configManager.getValue(ConfigKey.APP_PORT), 10));
app.useGlobalInterceptors(new ApiInterceptor());
app.useGlobalPipes(new ValidationPipe({
  exceptionFactory: (validationErrors: ValidationError[] = []) => new
  ValidationException(validationErrors)
  }));
}
bootstrap().then(()=>{
const logger = new Logger('Main Logger');
logger.log('Server is started !!')
});

/*import { NestFactory } from '@nestjs/core';
import { AppModule } from './common/home/app.module';
import {HttpExceptionFilter} from './common/config/exception';
import { swaggerConfiguration } from '@common/documentation';
/*import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';*/

/*async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(4000);

  
  
  swaggerConfiguration.config(app);
}*/
