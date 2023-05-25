import { CountCapital } from "./CountCapital";

describe('CountCapital' , ()=>{

    const ret = CountCapital('gaurav');
    const ret2 = CountCapital('GAURAV');
    

    it('should return count of capital letters ', ()=>{
        expect(ret).toEqual(0);
        expect(ret2).toEqual(6);

    } );
})