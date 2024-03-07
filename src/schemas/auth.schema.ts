import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Type } from 'class-transformer'
import mongoose from 'mongoose'
import { User } from './user.schema'
import { Role } from './role.schema'

@Schema({ timestamps: true })
export class Auth {
  @Prop({ required: true, unique: true })
  email: string

  @Prop({ required: true, minlength: 8 })
  password: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Role.name })
  role: Role

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  user: User

  @Prop()
  refreshToken: string

  @Prop({ type: Date })
  lastLogin: Date
}

export const AuthSchema = SchemaFactory.createForClass(Auth)
