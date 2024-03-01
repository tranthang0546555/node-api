import { Controller, Get, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Users')
@Controller('users')
export class UsersController {
  @Get('')
  getAll() {
    return 'Get all'
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return 'Get one: ' + id
  }
}
