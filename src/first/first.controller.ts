import { Controller, Get, Param } from '@nestjs/common';

@Controller('tuits')
export class FirstController {
    @Get()
    getTuits(): string{
        return 'Hola soy first xd';
    }
    @Get(':id')
    getTuit(@Param('id') id:string):string{
        return `tu id es ${id}`
    }
}
