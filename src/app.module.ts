import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigService } from './config'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/users/users.module'

const config = ConfigService.getInstance()

@Module({
  imports: [
    MongooseModule.forRoot(config.get('DATABASE_URL'), { dbName: config.get('DATABASE_NAME') }),
    AuthModule,
    UserModule
  ]
})
export class AppModule {}
