import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { LoginDto, RegisterDto } from './dto'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Logs user into the system' })
  login(@Body() body: LoginDto) {
    return this.authService.login(body)
  }

  @Get('logout')
  @ApiOperation({ summary: 'Logs out current logged in user session' })
  logout() {
    return 'Hello world'
  }

  @Post('register')
  @ApiOperation({ summary: 'Register account for user' })
  register(@Body() body: RegisterDto) {
    return this.authService.register(body)
  }
}
