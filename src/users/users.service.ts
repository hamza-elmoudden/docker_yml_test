import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';


@Injectable()
export class UsersService {
    constructor(
        @Inject('PG_POOL') private readonly pool: Pool,
    ) { }


    async Log() {
        const res = await this.pool.query('SELECT NOW()');
        console.log(res.rows);
    }

}
