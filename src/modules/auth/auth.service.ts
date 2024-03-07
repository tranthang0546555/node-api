import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Auth } from '../../schemas/auth.schema'
import { User } from '../../schemas/user.schema'
import { LoginDto, RegisterDto } from './dto'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Auth.name) private authModel: Model<Auth>
  ) {}

  async login(body: LoginDto) {
    const { email, password } = body
    // Check if user already exists
    const existingUser = await this.authModel.findOne({ email }).exec()
    if (!existingUser) {
      throw new HttpException('User does not exists', HttpStatus.BAD_REQUEST)
    }
    return (await this.authModel.findOne({ email }, { email: 1, lastLogin: 1, user: 1 })).populate({
      path: 'user',
      select: 'name'
    })
  }

  async register(body: RegisterDto) {
    const { email, password, retype } = body

    // Check if user already exists
    const existingUser = await this.authModel.findOne({ email }).exec()
    if (existingUser) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST)
    }

    const pwHashed = password
    const user = await new this.userModel({ name: 'NoName #' + Date.now() }).save()
    await new this.authModel({ email, password: pwHashed, user: user._id }).save()

    return 'Created'
  }
}
