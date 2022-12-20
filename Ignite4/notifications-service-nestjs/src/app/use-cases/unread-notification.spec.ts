import { UnReadNotification }  from './unread-notification';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { makeNotification } from '../../../test/factories/notification-factory';
import { NotificationNotFound } from './erros/notification-not-found';



describe('Unread notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const unreadNotification = new UnReadNotification(notificationRepository)

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    })

    
    //console.log(notificationRepository.notifications)

    expect(notificationRepository.notifications[0].readAt).toBeNull();
  })

  it('should not be able to unread a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const unreadNotification = new UnReadNotification(notificationRepository)


    //Esse teste espera que aconteça um ERRO, por isso usamos o REJECTS.
    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound)
  })

})

