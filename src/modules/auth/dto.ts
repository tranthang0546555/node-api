import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'

export class LoginDto {
  @ApiProperty({
    example: 'example@gmail.com',
    required: true
  })
  @IsEmail()
  email: string

  @ApiProperty({
    example: 'pw12345789',
    required: true
  })
  @IsNotEmpty()
  @MinLength(8)
  password: string
}

export class RegisterDto extends LoginDto {
  @ApiProperty({
    example: 'pw12345789',
    required: true
  })
  @IsNotEmpty()
  @MinLength(8)
  retype: string
}
