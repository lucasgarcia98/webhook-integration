import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post('pix')
  pix(@Body() data: any) {
    console.log('data: ', data);
    throw new HttpException(data, HttpStatus.OK);
  }
}
