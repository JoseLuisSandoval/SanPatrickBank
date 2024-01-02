import { Uuid } from "../../../../Shared/infrastructure/Uuid";


export class UserId extends Uuid{
    /**
     *
     */
    constructor(value: string) {
        super(value);
        this.validate(value);
        
    }
}