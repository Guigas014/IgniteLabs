import { SendNotification }  from './send-notification';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';



describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const sendNotification = new SendNotification(notificationRepository)

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id'
    })

    
    //console.log(notificationRepository.notifications)

    expect(notificationRepository.notifications).toHaveLength(1)
    //expect(notification).toBeTruthy()
  })

})

