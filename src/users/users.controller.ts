import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ) { }

    @Get()
    async Log() {
        await this.userService.Log()
        return 'db log'
    }
}
