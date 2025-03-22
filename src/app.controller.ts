import {
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	Render,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('/status')
	getStatus() {
		return this.appService.getStatus();
	}

	@Get('/repair-bay')
	@Render('repair-bay')
	repairBay() {
		return this.appService.repairBay();
	}

	@Post('/teapot')
	@HttpCode(HttpStatus.I_AM_A_TEAPOT)
	teapot() {
		return {
			teapot: true,
		};
	}
}
