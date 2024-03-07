import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('Users')
@Controller('users')
export class UsersController {
  @Get('')
  @ApiOperation({ summary: 'Get users' })
  getAll() {
    return 'Get all'
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user' })
  getOne(@Param('id') id: string) {
    return 'Get one: ' + id
  }
}
