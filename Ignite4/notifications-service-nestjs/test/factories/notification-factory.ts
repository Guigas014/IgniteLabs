import { Content } from '../../src/app/entities/content';
import { Notification, NotificationProps } from '../../src/app/entities/notification';


type Override = Partial<NotificationProps>;


export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('This is a notification'),
    category: 'social',
    recipientId: 'recipient-2',
    createdAt:  new Date(),
    ...override,
  })
}
