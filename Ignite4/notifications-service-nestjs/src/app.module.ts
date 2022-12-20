import { Module } from '@nestjs/common';
import { NotificationsController } from './resources/http/controller/notifications.controller';
import { MessagingModule } from './resources/messaging/messaging.module';
import { DatabaseModule } from './resources/database/database.module';
import { SendNotification } from '../src/app/use-cases/send-notification';
import { CancelNotification } from '../src/app/use-cases/cancel-notification';
import { CountRecipientNotifications } from '../src/app/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '../src/app/use-cases/get-recipient-notifications';
import { ReadNotification } from '../src/app/use-cases/read-notification';
import { UnReadNotification } from '../src/app/use-cases/unread-notification';


@Module({
  imports: [DatabaseModule, MessagingModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnReadNotification,
  ],
})

export class AppModule {}

