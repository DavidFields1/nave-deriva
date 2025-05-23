import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	app.setBaseViewsDir(join(__dirname, '..', 'views'));
	app.setViewEngine('hbs');

	app.enableCors();

	await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
