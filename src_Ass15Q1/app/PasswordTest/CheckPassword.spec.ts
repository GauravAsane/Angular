import { CheckPassword } from "./CheckPassword";

describe('CheckPassword' , ()=>{

    

    it('should be 2 capital, 3 small, 2 digits and 1 special symbol in password. ' , ()=>{

        const ret = CheckPassword('GAurav@123');
        expect(ret).toBe(true);
    })


})