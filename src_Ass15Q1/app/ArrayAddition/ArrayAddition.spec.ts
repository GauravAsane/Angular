import { ArrayAddition } from "./ArrayAddition";

describe('ArrayAddition' , () =>{

    it("should return addition of array element" , () =>
    {
       const ret = ArrayAddition([10,20,30,50]);

       expect(ret).toEqual(110);
    })
})