import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [WebhookModule],
})
export class AppModule {}
