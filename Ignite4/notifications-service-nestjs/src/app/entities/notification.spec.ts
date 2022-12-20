//Esse é um arquivo de teste que utiliza o JEST.

import { Content } from './content';
import { Notification } from './notification';


describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitaçã ode amizade.'),
      category: 'social',
      recipientId: 'tantoFAz',
      createdAt: new Date(),
    });

    expect(notification).toBeTruthy();
  });




});

