import { Kafka } from 'kafkajs';
import { randomUUID } from 'node:crypto';


async function bootstrap() {
  const kafka = new Kafka({
     clientId: 'kafka-producer',
     brokers: ['national-sculpin-8168-us1-kafka.upstash.io:9092'],
     sasl: {
           mechanism: 'scram-sha-256',
           username:
             'bmF0aW9uYWwtc2N1bHBpbi04MTY4JOepzWHUtpb8wgwRsMNrtK3fvO3H33EtjLo',
           password:
             'ods9c7FRsCoN08FJhTRpl57pY1bYKwvfrXlrvyDpnWohIcEV1-g-trFxvnB7oTXr7qKp9Q==',
         },
         ssl: true,
     });

     const producer = kafka.producer()

     await producer.connect()
  await producer.send({
    topic: 'notifications.send-notification',
    messages: [
      {
        value: JSON.stringify({
          content: 'Nova solicitação de amizade!',
          category: 'social',
          recipientId: randomUUID(),
        }) 
      },
    ],
  })

  await producer.disconnect()
}

bootstrap()

