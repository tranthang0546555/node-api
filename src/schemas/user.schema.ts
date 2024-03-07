import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({ timestamps: true })
export class User {
  @Prop()
  name!: string

  @Prop()
  phone!: number
}

export const UserSchema = SchemaFactory.createForClass(User)
