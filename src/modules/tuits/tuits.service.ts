import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTuitDto, UpdateTuitDto } from './dto';
import { Tuit } from './tuit.entity';

@Injectable()
export class TuitsService {
    private tuits: Tuit[]=[
        {
            id: '33',
            message: 'hello world from nest.js'
        },
        {
            id: '434',
            message: 'hello XD'
        }
    ]; 

    getTuits(): Tuit[]{
        return this.tuits;
    }

    getTuit(id: string): Tuit{
        const tuit = this.tuits.find((item) => item.id === id);
        if(!tuit){
            throw new NotFoundException("resource not found")
        }  
        return tuit;
    }

    createTuit({message}: CreateTuitDto){
            this.tuits.push({
                id:(Math.floor(Math.random()*2000)+1).toString(),
                message,
            })
    }

    updateTuit(id: string, {message}: UpdateTuitDto){
        const tuit: Tuit = this.getTuit(id);
        tuit.message = message;
        return tuit;
    }

    removeTuit(id: string){
        const index = this.tuits.findIndex((tuit) => tuit.id === id);
        if (index >= 0){
            this.tuits.splice(index,1)
        }
    }





}
