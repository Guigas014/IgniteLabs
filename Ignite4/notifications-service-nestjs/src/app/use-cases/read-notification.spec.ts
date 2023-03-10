import { ReadNotification }  from './read-notification';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { makeNotification } from '../../../test/factories/notification-factory';
import { NotificationNotFound } from './erros/notification-not-found';



describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const readNotification = new ReadNotification(notificationRepository)

    const notification = makeNotification();

    await notificationRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    })

    
    //console.log(notificationRepository.notifications)

    expect(notificationRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  })

  it('should not be able to read a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const readNotification = new ReadNotification(notificationRepository)


    //Esse teste espera que aconteça um ERRO, por isso usamos o REJECTS.
    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound)
  })

})

