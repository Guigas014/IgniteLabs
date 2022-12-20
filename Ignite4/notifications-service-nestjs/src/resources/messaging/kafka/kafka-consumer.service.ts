import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';


@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['national-sculpin-8168-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 
            'bmF0aW9uYWwtc2N1bHBpbi04MTY4JOepzWHUtpb8wgwRsMNrtK3fvO3H33EtjLo',
          password: 
            'ods9c7FRsCoN08FJhTRpl57pY1bYKwvfrXlrvyDpnWohIcEV1-g-trFxvnB7oTXr7qKp9Q==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}

