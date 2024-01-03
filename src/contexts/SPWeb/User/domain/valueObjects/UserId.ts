import { Uuid } from "../../../../Shared/domain/valueObjects/Uuid";


export class UserId extends Uuid{
    /**
     *
     */
    constructor(value: string) {
        super(value);
        this.validate(value);
        
    }
}