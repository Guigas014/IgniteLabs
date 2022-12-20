import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from './erros/notification-not-found';


interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void


@Injectable()
export class CancelNotification {
  constructor(private notificationRepository: NotificationRepository) {}


  async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();

    await this.notificationRepository.save(notification);
  }
  
}
