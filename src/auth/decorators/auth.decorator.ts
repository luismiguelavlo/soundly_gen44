import { applyDecorators, UseGuards } from "@nestjs/common";
import { ValidRoles } from "../interfaces/valid-roles";
import { RolProtected } from "./rol-protected.decorator";
import { AuthGuard } from "@nestjs/passport";
import { UserRolGuard } from "../guards/user-rol.guard";


export function Auth(...args: ValidRoles[]) {
  return applyDecorators(
    RolProtected(...args),
    UseGuards(AuthGuard(), UserRolGuard)
  )
}