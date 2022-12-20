import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from './erros/notification-not-found';


interface CountRecipientNotificationsRequest {
  recipientId: string;
}

interface CountRecipientNotificationsResponse {
  count: number;
}


@Injectable()
export class  CountRecipientNotifications {
  constructor(private notificationRepository: NotificationRepository) {}


  async execute(
    request: CountRecipientNotificationsRequest,
    ): Promise<CountRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationRepository.countManyByRecipientId(
      recipientId,
    );

    return { count }
  }
  
}
