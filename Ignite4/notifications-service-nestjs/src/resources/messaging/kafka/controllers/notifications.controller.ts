import { SendNotification } from '../../../../app/use-cases/send-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';


interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  //O valor desse Pattern está no console do kafka( upstash.com )
  @EventPattern('notifications.send-notification')
  async handleSendNotification(
    @Payload() { content, category, recipientId }: SendNotificationPayload) {
      await this.sendNotification.execute({
        content,
        category,
        recipientId,
      });
    
      console.log('Funcionou');
  }

}

