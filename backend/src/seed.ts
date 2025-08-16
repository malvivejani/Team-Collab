import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './modules/auth/user.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const userRepo = app.get<Repository<User>>(getRepositoryToken(User));

  const email = 'demo@teamcollab.app';
  const password = 'demo123';

  let user = await userRepo.findOne({ where: { email } });
  if (!user) {
    const hash = await bcrypt.hash(password, 10);
    user = userRepo.create({ email, password: hash });
    await userRepo.save(user);
    console.log(`✅ Seeded user: ${email} / ${password}`);
  } else {
    console.log(`ℹ️ User already exists: ${email}`);
  }

  await app.close();
}
bootstrap();
