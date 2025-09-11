import { SetMetadata } from '@nestjs/common';
import { ValidRoles } from '../interfaces/valid-roles';
import { META_ROLES } from '../constants/roles';

export const RolProtected = (...args: ValidRoles[]) => SetMetadata(META_ROLES, args);
