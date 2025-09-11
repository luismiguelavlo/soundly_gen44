import { createParamDecorator, ExecutionContext, InternalServerErrorException, SetMetadata } from '@nestjs/common';

export const GetUser = createParamDecorator((data, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest()
  const user = req.user

  if (!user) throw new InternalServerErrorException('User not found')

  return !data ? user : user[data]
}) 
