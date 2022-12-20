import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions } from '@nestjs/microservices';
import { KafkaConsumerService } from './resources/messaging/kafka/kafka-consumer.service';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Esse linha é criada quando fazemos a validação.
  app.useGlobalPipes(new ValidationPipe());

  const kafkaConsumerService = app.get(KafkaConsumerService); 

  app.connectMicroservice<MicroserviceOptions>({
    strategy: kafkaConsumerService,
  })


  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
