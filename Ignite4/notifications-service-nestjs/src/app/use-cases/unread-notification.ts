import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from './erros/notification-not-found';


interface UnReadNotificationRequest {
  notificationId: string;
}

type UnReadNotificationResponse = void


@Injectable()
export class UnReadNotification {
  constructor(private notificationRepository: NotificationRepository) {}


  async execute(request: UnReadNotificationRequest): Promise<UnReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationRepository.save(notification);
  }
  
}
