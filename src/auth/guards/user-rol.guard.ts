import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { META_ROLES } from '../constants/roles';
import { User } from '../entities/user.entity';
import { RESPONSE } from '../constants/responses-messages';

@Injectable()
export class UserRolGuard implements CanActivate {

  constructor(private readonly reflector: Reflector) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const validRoles: string[] = this.reflector.get(META_ROLES, context.getHandler())

    if (!validRoles) return true;
    if (validRoles.length === 0) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user as User;

    if (!user) throw new UnauthorizedException(RESPONSE.USER_NOT_FOUND)

    for (const rol of user.role) {
      if (validRoles.includes(rol)) return true;
    }

    throw new ForbiddenException(RESPONSE.FORBIDDEN)
  }
}
