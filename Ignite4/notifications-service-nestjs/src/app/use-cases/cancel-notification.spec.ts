import { CancelNotification }  from './cancel-notification';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { makeNotification } from '../../../test/factories/notification-factory';
import { NotificationNotFound } from './erros/notification-not-found';



describe('Cancel notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const cancelNotification = new CancelNotification(notificationRepository)

    const notification = makeNotification();

    await notificationRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    })

    
    //console.log(notificationRepository.notifications)

    expect(notificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  })

  it('should not be able to cancel a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const cancelNotification = new CancelNotification(notificationRepository)


    //Esse teste espera que aconteça um ERRO, por isso usamos o REJECTS.
    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound)
  })

})

