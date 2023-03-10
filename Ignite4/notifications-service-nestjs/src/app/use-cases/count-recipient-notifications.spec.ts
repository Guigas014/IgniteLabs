import { CountRecipientNotifications }  from './count-recipient-notifications';
import { makeNotification } from '../../../test/factories/notification-factory';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';



describe('Count recipients notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository
    )

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );


    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    })

    
    //console.log(notificationRepository.notifications)

    expect(count).toEqual(2);
  })

})

