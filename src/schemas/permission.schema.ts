import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose from 'mongoose'
import { Role } from './role.schema'

enum Permissions {
  GET,
  POST,
  DELETE,
  PATCH,
  PUT
}

@Schema({ autoIndex: true })
export class Permission {
  @Prop({ required: true })
  name: string

  @Prop({ required: true, index: true })
  pathname: string

  @Prop({ required: true })
  method: Permissions[]

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Role.name })
  role: Role
}

export const PermissionSchema = SchemaFactory.createForClass(Permission)
