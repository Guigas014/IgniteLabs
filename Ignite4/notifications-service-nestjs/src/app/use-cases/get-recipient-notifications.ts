import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from './erros/notification-not-found';


interface GetRecipientNotificationsRequest {
  recipientId: string;
}

interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}


@Injectable()
export class  GetRecipientNotifications {
  constructor(private notificationRepository: NotificationRepository) {}


  async execute(
    request: GetRecipientNotificationsRequest,
    ): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications = await this.notificationRepository.findManyByRecipientId(
      recipientId,
    );

    return { notifications }
  }
  
}
